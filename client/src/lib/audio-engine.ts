import { useState, useEffect, useRef, useCallback } from "react";
import type { Tune } from "@/data/tunes";

interface AudioEngineOptions {
  tune: Tune;
  pattern: string;
  tempo: number;
  volume: number;
  instrumentStates: Record<string, { enabled: boolean; volume: number }>;
  onStepChange: (step: number) => void;
}

export function useAudioEngine({
  tune,
  pattern: patternName,
  tempo,
  volume,
  instrumentStates,
  onStepChange
}: AudioEngineOptions) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const soundsRef = useRef<Record<string, AudioBuffer>>({});

  // Initialize audio context
  const initializeAudio = useCallback(async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Load actual audio samples
      await loadAudioSamples();
    }
    
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume();
    }
  }, []);

  // Load actual audio samples
  const loadAudioSamples = useCallback(async () => {
    if (!audioContextRef.current) return;

    const loadAudioFile = async (url: string): Promise<AudioBuffer | null> => {
      try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        return await audioContextRef.current!.decodeAudioData(arrayBuffer);
      } catch (error) {
        console.warn(`Failed to load audio file: ${url}`, error);
        return null;
      }
    };

    // Load the specific audio files you mentioned
    const audioFiles = {
      ls_73: '/src/ls_73.mp3',      // Low surdo slap
      hs_74: '/src/hs_74.mp3',      // High surdo (using your specified file)
      sn_2e: '/src/sn_2e.mp3',      // Snare ghost note
      sn_58: '/src/sn_58.mp3',      // Snare accent
      re_58: '/src/re_58.mp3',      // Repi hit
      ag_61: '/src/ag_61.mp3',      // Agogo low bell
      ag_6f: '/src/ag_6f.mp3',      // Agogo high bell
    };

    const audioBuffers: Record<string, AudioBuffer | null> = {};
    
    for (const [key, url] of Object.entries(audioFiles)) {
      audioBuffers[key] = await loadAudioFile(url);
    }

    // Map to instruments with fallback to synthetic sounds if files don't load
    const getFallbackSound = (audioBuffer: AudioBuffer | null, freq: number, dur: number, type: 'kick' | 'snare' | 'hihat' | 'bell'): AudioBuffer => {
      return audioBuffer || createFallbackSound(freq, dur, type)!;
    };

    soundsRef.current = {
      ls: getFallbackSound(audioBuffers.ls_73, 60, 0.5, 'kick'),
      ms: getFallbackSound(audioBuffers.ls_73, 80, 0.4, 'kick'), // Use same as ls for now
      hs: getFallbackSound(audioBuffers.hs_74, 100, 0.3, 'kick'),
      re: getFallbackSound(audioBuffers.re_58, 200, 0.2, 'snare'),
      sn: getFallbackSound(audioBuffers.sn_58, 150, 0.2, 'snare'),
      ta: createFallbackSound(300, 0.1, 'hihat')!, // Keep synthetic for tamborim
      ag: getFallbackSound(audioBuffers.ag_61, 800, 0.3, 'bell'), // Will handle both a/o sounds
      sh: createFallbackSound(5000, 0.1, 'hihat')! // Keep synthetic for shaker
    };

    // Store individual agogo sounds for pattern-specific playback
    soundsRef.current.ag_low = audioBuffers.ag_61 || soundsRef.current.ag;
    soundsRef.current.ag_high = audioBuffers.ag_6f || soundsRef.current.ag;
  }, []);

  // Fallback synthetic sound creation
  const createFallbackSound = (frequency: number, duration: number, type: 'kick' | 'snare' | 'hihat' | 'bell') => {
    if (!audioContextRef.current) return null;
    
    const sampleRate = audioContextRef.current.sampleRate;
    const buffer = audioContextRef.current.createBuffer(1, duration * sampleRate, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < buffer.length; i++) {
      const t = i / sampleRate;
      let value = 0;

      switch (type) {
        case 'kick':
          value = Math.sin(2 * Math.PI * frequency * t) * Math.exp(-t * 30) * 0.5;
          break;
        case 'snare':
          value = (Math.random() * 2 - 1) * Math.exp(-t * 40) * 0.3;
          break;
        case 'hihat':
          value = (Math.random() * 2 - 1) * Math.exp(-t * 100) * 0.2;
          break;
        case 'bell':
          value = Math.sin(2 * Math.PI * frequency * t) * Math.exp(-t * 5) * 0.3;
          break;
      }
      
      data[i] = value;
    }
    return buffer;
  };

  // Play a sound with specific character handling
  const playSound = useCallback((instrument: string, char?: string) => {
    if (!audioContextRef.current) return;
    
    let soundBuffer: AudioBuffer | undefined;
    
    // Handle agogo-specific character mappings
    if (instrument === 'ag' && char) {
      if (char === 'a' && soundsRef.current.ag_low) {
        soundBuffer = soundsRef.current.ag_low;
      } else if (char === 'o' && soundsRef.current.ag_high) {
        soundBuffer = soundsRef.current.ag_high;
      } else {
        soundBuffer = soundsRef.current[instrument];
      }
    } else {
      soundBuffer = soundsRef.current[instrument];
    }
    
    if (!soundBuffer) return;

    const source = audioContextRef.current.createBufferSource();
    const gainNode = audioContextRef.current.createGain();
    
    source.buffer = soundBuffer;
    source.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);
    
    const instrumentVolume = instrumentStates[instrument]?.volume || 70;
    gainNode.gain.value = (volume / 100) * (instrumentVolume / 100);
    
    source.start();
  }, [volume, instrumentStates]);

  // Main playback loop
  const playPattern = useCallback(() => {
    const pattern = tune.patterns[patternName];
    if (!pattern) return;

    const patternLength = pattern.ls ? pattern.ls.length : 16;
    
    // Play sounds for current step
    Object.keys(instrumentStates).forEach(instrument => {
      if (instrumentStates[instrument].enabled && pattern[instrument]) {
        const char = pattern[instrument][currentStep];
        if (char && char !== ' ' && char !== '.') {
          playSound(instrument, char);
        }
      }
    });

    // Update step
    const nextStep = (currentStep + 1) % patternLength;
    setCurrentStep(nextStep);
    onStepChange(nextStep);
  }, [tune, patternName, currentStep, instrumentStates, playSound, onStepChange]);

  // Start playback
  const play = useCallback(async () => {
    await initializeAudio();
    setIsPlaying(true);
  }, [initializeAudio]);

  // Pause playback
  const pause = useCallback(() => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Stop playback
  const stop = useCallback(() => {
    setIsPlaying(false);
    setCurrentStep(0);
    onStepChange(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [onStepChange]);

  // Handle tempo changes and playback timing
  useEffect(() => {
    if (isPlaying) {
      const stepInterval = (60 / tempo) * 1000 / 4; // 16th notes
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      intervalRef.current = setInterval(playPattern, stepInterval);
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isPlaying, tempo, playPattern]);

  // Reset step when pattern changes
  useEffect(() => {
    setCurrentStep(0);
    onStepChange(0);
  }, [patternName, onStepChange]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    isPlaying,
    currentStep,
    play,
    pause,
    stop
  };
}
