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
      
      // Create synthetic sounds for demo (in production, load actual samples)
      await loadSyntheticSounds();
    }
    
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume();
    }
  }, []);

  // Load actual audio samples or fallback to synthetic sounds
  const loadSyntheticSounds = useCallback(async () => {
    if (!audioContextRef.current) return;

    const createDrumSound = (frequency: number, duration: number, type: 'kick' | 'snare' | 'hihat' | 'bell') => {
      const sampleRate = audioContextRef.current!.sampleRate;
      const buffer = audioContextRef.current!.createBuffer(1, duration * sampleRate, sampleRate);
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

    // Use synthetic sounds - keeping the existing functionality intact
    soundsRef.current = {
      ls: createDrumSound(60, 0.5, 'kick'),
      ms: createDrumSound(80, 0.4, 'kick'),
      hs: createDrumSound(100, 0.3, 'kick'),
      re: createDrumSound(200, 0.2, 'snare'),
      sn: createDrumSound(150, 0.2, 'snare'),
      ta: createDrumSound(300, 0.1, 'hihat'),
      ag: createDrumSound(800, 0.3, 'bell'),
      sh: createDrumSound(5000, 0.1, 'hihat')
    };
  }, []);

  // Play a sound
  const playSound = useCallback((instrument: string) => {
    if (!audioContextRef.current || !soundsRef.current[instrument]) return;

    const source = audioContextRef.current.createBufferSource();
    const gainNode = audioContextRef.current.createGain();
    
    source.buffer = soundsRef.current[instrument];
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
          playSound(instrument);
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
