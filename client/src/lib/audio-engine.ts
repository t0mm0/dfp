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
  onStepChange,
}: AudioEngineOptions) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const soundsRef = useRef<Record<string, AudioBuffer>>({});

  // Initialize audio context
  const initializeAudio = useCallback(async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();

      // Load actual audio samples
      await loadAudioSamples();
    }

    if (audioContextRef.current.state === "suspended") {
      await audioContextRef.current.resume();
    }
  }, []);

  // Load actual audio samples
  const loadAudioSamples = useCallback(async () => {
    if (!audioContextRef.current) return;

    const loadAudioFile = async (url: string): Promise<AudioBuffer | null> => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        if (arrayBuffer.byteLength === 0) {
          throw new Error('Empty audio file');
        }
        return await audioContextRef.current!.decodeAudioData(arrayBuffer);
      } catch (error) {
        console.warn(`Failed to load audio file: ${url}`, error);
        return null;
      }
    };

    // Audio files mapping - using available files from public/audio directory
    const audioFiles = {
      // Low Surdo variants
      ls_30: "/audio/ls_30.mp3",
      ls_58: "/audio/ls_58.mp3", 
      ls_68: "/audio/ls_68.mp3",
      ls_72: "/audio/ls_72.mp3",
      ls_73: "/audio/ls_73.mp3",
      ls_74: "/audio/ls_74.mp3",
      // Mid Surdo variants
      ms_30: "/audio/ms_30.mp3",
      ms_58: "/audio/ms_58.mp3",
      ms_68: "/audio/ms_68.mp3", 
      ms_72: "/audio/ms_72.mp3",
      ms_73: "/audio/ms_73.mp3",
      ms_74: "/audio/ms_74.mp3",
      // High Surdo variants
      hs_30: "/audio/hs_30.mp3",
      hs_58: "/audio/hs_58.mp3",
      hs_68: "/audio/hs_68.mp3",
      hs_72: "/audio/hs_72.mp3", 
      hs_73: "/audio/hs_73.mp3",
      hs_74: "/audio/hs_74.mp3",
      // Snare variants
      sn_2e: "/audio/sn_2e.mp3", // Ghost note
      sn_58: "/audio/sn_58.mp3", // Accent
      sn_66: "/audio/sn_66.mp3",
      sn_72: "/audio/sn_72.mp3",
      // Repi variants
      re_2e: "/audio/re_2e.mp3",
      re_58: "/audio/re_58.mp3",
      re_66: "/audio/re_66.mp3",
      re_68: "/audio/re_68.mp3",
      re_72: "/audio/re_72.mp3",
      re_73: "/audio/re_73.mp3",
      re_7a: "/audio/re_7a.mp3",
      // Agogo variants
      ag_2e: "/audio/ag_2e.mp3",
      ag_61: "/audio/ag_61.mp3", // Low bell
      ag_6f: "/audio/ag_6f.mp3", // High bell
      ag_72: "/audio/ag_72.mp3",
      // Tamborim variants
      ta_58: "/audio/ta_58.mp3",
      ta_66: "/audio/ta_66.mp3",
      ta_72: "/audio/ta_72.mp3",
      // Shaker variants
      sh_2e: "/audio/sh_2e.mp3",
      sh_58: "/audio/sh_58.mp3",
      // Other percussion
      ot_32: "/audio/ot_32.mp3",
      ot_33: "/audio/ot_33.mp3",
      ot_34: "/audio/ot_34.mp3",
      ot_35: "/audio/ot_35.mp3",
      ot_36: "/audio/ot_36.mp3",
      ot_41: "/audio/ot_41.mp3",
      ot_42: "/audio/ot_42.mp3",
      ot_43: "/audio/ot_43.mp3",
      ot_44: "/audio/ot_44.mp3",
      ot_45: "/audio/ot_45.mp3",
      ot_46: "/audio/ot_46.mp3",
      ot_47: "/audio/ot_47.mp3",
      ot_48: "/audio/ot_48.mp3",
      ot_49: "/audio/ot_49.mp3",
      ot_4a: "/audio/ot_4a.mp3",
      ot_4b: "/audio/ot_4b.mp3",
      ot_77: "/audio/ot_77.mp3",
      ot_79: "/audio/ot_79.mp3",
    };

    const audioBuffers: Record<string, AudioBuffer | null> = {};

    // Load all available audio files
    for (const [key, url] of Object.entries(audioFiles)) {
      audioBuffers[key] = await loadAudioFile(url);
    }

    // Map to instruments using best available sounds with fallback to synthetic
    const getFallbackSound = (
      audioBuffer: AudioBuffer | null,
      freq: number,
      dur: number,
      type: "kick" | "snare" | "hihat" | "bell",
    ): AudioBuffer => {
      return audioBuffer || createFallbackSound(freq, dur, type)!;
    };

    soundsRef.current = {
      // Low Surdo - prefer ls_73 or ls_74 for main sound
      ls: getFallbackSound(audioBuffers.ls_73 || audioBuffers.ls_74, 60, 0.5, "kick"),
      // Mid Surdo - prefer ms_73 or ms_74 
      ms: getFallbackSound(audioBuffers.ms_73 || audioBuffers.ms_74, 80, 0.4, "kick"),
      // High Surdo - prefer hs_74 or hs_73
      hs: getFallbackSound(audioBuffers.hs_74 || audioBuffers.hs_73, 100, 0.3, "kick"),
      // Repi - prefer re_58
      re: getFallbackSound(audioBuffers.re_58, 200, 0.2, "snare"),
      // Snare - prefer sn_58 for general use  
      sn: getFallbackSound(audioBuffers.sn_58, 150, 0.2, "snare"),
      // Tamborim - use ta_58 if available
      ta: getFallbackSound(audioBuffers.ta_58, 300, 0.1, "hihat"),
      // Agogo - use ag_61 for general use
      ag: getFallbackSound(audioBuffers.ag_61, 800, 0.3, "bell"),
      // Shaker - use sh_58 if available
      sh: getFallbackSound(audioBuffers.sh_58, 5000, 0.1, "hihat"),
      // Other percussion - use ot_42 as default
      ot: getFallbackSound(audioBuffers.ot_42, 400, 0.2, "bell"),
    };

    // Store individual agogo sounds for pattern-specific playback
    soundsRef.current.ag_low = audioBuffers.ag_61 || soundsRef.current.ag;   // 'a' character
    soundsRef.current.ag_high = audioBuffers.ag_6f || soundsRef.current.ag;  // 'o' character

    // Store individual snare sounds for pattern-specific playback
    soundsRef.current.sn_accent = audioBuffers.sn_58 || soundsRef.current.sn; // 'X' character
    soundsRef.current.sn_ghost = audioBuffers.sn_2e || soundsRef.current.sn;  // '.' character

    // Store additional surdo variations if available
    soundsRef.current.ls_open = audioBuffers.ls_30 || soundsRef.current.ls;  // open sound
    soundsRef.current.ls_muted = audioBuffers.ls_58 || soundsRef.current.ls; // muted sound
    soundsRef.current.ms_open = audioBuffers.ms_30 || soundsRef.current.ms;  // open sound
    soundsRef.current.ms_muted = audioBuffers.ms_58 || soundsRef.current.ms; // muted sound
    soundsRef.current.hs_open = audioBuffers.hs_30 || soundsRef.current.hs;  // open sound
    soundsRef.current.hs_muted = audioBuffers.hs_58 || soundsRef.current.hs; // muted sound
  }, []);

  // Fallback synthetic sound creation
  const createFallbackSound = (
    frequency: number,
    duration: number,
    type: "kick" | "snare" | "hihat" | "bell",
  ) => {
    if (!audioContextRef.current) return null;

    const sampleRate = audioContextRef.current.sampleRate;
    const buffer = audioContextRef.current.createBuffer(
      1,
      duration * sampleRate,
      sampleRate,
    );
    const data = buffer.getChannelData(0);

    for (let i = 0; i < buffer.length; i++) {
      const t = i / sampleRate;
      let value = 0;

      switch (type) {
        case "kick":
          value =
            Math.sin(2 * Math.PI * frequency * t) * Math.exp(-t * 30) * 0.5;
          break;
        case "snare":
          value = (Math.random() * 2 - 1) * Math.exp(-t * 40) * 0.3;
          break;
        case "hihat":
          value = (Math.random() * 2 - 1) * Math.exp(-t * 100) * 0.2;
          break;
        case "bell":
          value =
            Math.sin(2 * Math.PI * frequency * t) * Math.exp(-t * 5) * 0.3;
          break;
      }

      data[i] = value;
    }
    return buffer;
  };

  // Play a sound with specific character handling
  const playSound = useCallback(
    (instrument: string, char?: string) => {
      if (!audioContextRef.current) return;

      let soundBuffer: AudioBuffer | undefined;

      // Handle agogo-specific character mappings
      if (instrument === "ag" && char) {
        if (char === "a" && soundsRef.current.ag_low) {
          soundBuffer = soundsRef.current.ag_low;
        } else if (char === "o" && soundsRef.current.ag_high) {
          soundBuffer = soundsRef.current.ag_high;
        } else {
          soundBuffer = soundsRef.current[instrument];
        }
      }
      // Handle snare-specific character mappings
      else if (instrument === "sn" && char) {
        if (char === "X" && soundsRef.current.sn_accent) {
          soundBuffer = soundsRef.current.sn_accent;
        } else if (char === "." && soundsRef.current.sn_ghost) {
          soundBuffer = soundsRef.current.sn_ghost;
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
    },
    [volume, instrumentStates],
  );

  // Main playback loop
  const playPattern = useCallback(() => {
    const pattern = tune.patterns[patternName];
    if (!pattern) return;

    const patternLength = pattern.ls ? pattern.ls.length : 16;

    // Play sounds for current step
    Object.keys(instrumentStates).forEach((instrument) => {
      if (instrumentStates[instrument].enabled && pattern[instrument]) {
        const char = pattern[instrument][currentStep];
        if (char && char !== " ") {
          playSound(instrument, char);
        }
      }
    });

    // Update step
    const nextStep = (currentStep + 1) % patternLength;
    setCurrentStep(nextStep);
    onStepChange(nextStep);
  }, [
    tune,
    patternName,
    currentStep,
    instrumentStates,
    playSound,
    onStepChange,
  ]);

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
      const stepInterval = ((60 / tempo) * 1000) / 4; // 16th notes

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
    stop,
  };
}
