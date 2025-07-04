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
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const soundsRef = useRef<Record<string, AudioBuffer>>({});
  const audioLoadedRef = useRef<boolean>(false);

  // Initialize audio context and preload samples
  const initializeAudio = useCallback(async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }

    if (audioContextRef.current.state === "suspended") {
      await audioContextRef.current.resume();
    }

    // Load audio samples if not already loaded
    if (!audioLoadedRef.current) {
      setIsAudioLoaded(false);
      await loadAudioSamples();
      audioLoadedRef.current = true;
      setIsAudioLoaded(true);
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

    // Get the base URL for direct audio access
    const getAudioBaseUrl = () => {
      if (typeof window !== 'undefined') {
        // In production, use the deployment URL directly
        if (window.location.hostname.includes('replit.app')) {
          return window.location.origin + '/audio/';
        }
        // In development, use the local URL
        return window.location.origin + '/audio/';
      }
      return '/audio/';
    };

    const audioBaseUrl = getAudioBaseUrl();

    // Audio files mapping - using direct URLs for faster loading
    const audioFiles = {
      // Low Surdo variants
      ls_30: audioBaseUrl + "ls_30.mp3",
      ls_58: audioBaseUrl + "ls_58.mp3", 
      ls_68: audioBaseUrl + "ls_68.mp3",
      ls_72: audioBaseUrl + "ls_72.mp3",
      ls_73: audioBaseUrl + "ls_73.mp3",
      ls_74: audioBaseUrl + "ls_74.mp3",
      // Mid Surdo variants
      ms_30: audioBaseUrl + "ms_30.mp3",
      ms_58: audioBaseUrl + "ms_58.mp3",
      ms_68: audioBaseUrl + "ms_68.mp3", 
      ms_72: audioBaseUrl + "ms_72.mp3",
      ms_73: audioBaseUrl + "ms_73.mp3",
      ms_74: audioBaseUrl + "ms_74.mp3",
      // High Surdo variants
      hs_30: audioBaseUrl + "hs_30.mp3",
      hs_58: audioBaseUrl + "hs_58.mp3",
      hs_68: audioBaseUrl + "hs_68.mp3",
      hs_72: audioBaseUrl + "hs_72.mp3", 
      hs_73: audioBaseUrl + "hs_73.mp3",
      hs_74: audioBaseUrl + "hs_74.mp3",
      // Snare variants
      sn_2e: audioBaseUrl + "sn_2e.mp3", // Ghost note
      sn_58: audioBaseUrl + "sn_58.mp3", // Accent
      sn_66: audioBaseUrl + "sn_66.mp3",
      sn_72: audioBaseUrl + "sn_72.mp3",
      // Repi variants
      re_2e: audioBaseUrl + "re_2e.mp3",
      re_58: audioBaseUrl + "re_58.mp3",
      re_66: audioBaseUrl + "re_66.mp3",
      re_68: audioBaseUrl + "re_68.mp3",
      re_72: audioBaseUrl + "re_72.mp3",
      re_73: audioBaseUrl + "re_73.mp3",
      re_7a: audioBaseUrl + "re_7a.mp3",
      // Agogo variants
      ag_2e: audioBaseUrl + "ag_2e.mp3",
      ag_61: audioBaseUrl + "ag_61.mp3", // Low bell
      ag_6f: audioBaseUrl + "ag_6f.mp3", // High bell
      ag_72: audioBaseUrl + "ag_72.mp3",
      // Tamborim variants
      ta_58: audioBaseUrl + "ta_58.mp3",
      ta_66: audioBaseUrl + "ta_66.mp3",
      ta_72: audioBaseUrl + "ta_72.mp3",
      // Shaker variants
      sh_2e: audioBaseUrl + "sh_2e.mp3",
      sh_58: audioBaseUrl + "sh_58.mp3",
      // Other percussion
      ot_32: audioBaseUrl + "ot_32.mp3",
      ot_33: audioBaseUrl + "ot_33.mp3",
      ot_34: audioBaseUrl + "ot_34.mp3",
      ot_35: audioBaseUrl + "ot_35.mp3",
      ot_36: audioBaseUrl + "ot_36.mp3",
      ot_41: audioBaseUrl + "ot_41.mp3",
      ot_42: audioBaseUrl + "ot_42.mp3",
      ot_43: audioBaseUrl + "ot_43.mp3",
      ot_44: audioBaseUrl + "ot_44.mp3",
      ot_45: audioBaseUrl + "ot_45.mp3",
      ot_46: audioBaseUrl + "ot_46.mp3",
      ot_47: audioBaseUrl + "ot_47.mp3",
      ot_48: audioBaseUrl + "ot_48.mp3",
      ot_49: audioBaseUrl + "ot_49.mp3",
      ot_4a: audioBaseUrl + "ot_4a.mp3",
      ot_4b: audioBaseUrl + "ot_4b.mp3",
      ot_77: audioBaseUrl + "ot_77.mp3",
      ot_79: audioBaseUrl + "ot_79.mp3",
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
    // Only start playing if audio is loaded
    if (isAudioLoaded) {
      setIsPlaying(true);
    }
  }, [initializeAudio, isAudioLoaded]);

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

  // Preload audio when tune changes
  useEffect(() => {
    initializeAudio();
  }, [tune, initializeAudio]);

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
    isAudioLoaded,
    play,
    pause,
    stop,
  };
}

// Export function to render authentic audio for download
export async function renderAuthenticAudio(
  tune: any,
  patternName: string,
  tempo: number,
  instrumentStates: Record<string, { enabled: boolean; volume: number }>,
  durationSeconds: number = 8
): Promise<AudioBuffer> {
  // Create audio context for rendering
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  // Load the same audio samples as the player
  const loadAudioFile = async (url: string): Promise<AudioBuffer | null> => {
    try {
      const response = await fetch(url);
      if (!response.ok) return null;
      const arrayBuffer = await response.arrayBuffer();
      if (arrayBuffer.byteLength === 0) return null;
      return await audioContext.decodeAudioData(arrayBuffer);
    } catch (error) {
      return null;
    }
  };

  // Get the base URL for direct audio access
  const getAudioBaseUrl = () => {
    if (typeof window !== 'undefined') {
      // In production, use the deployment URL directly
      if (window.location.hostname.includes('replit.app')) {
        return window.location.origin + '/audio/';
      }
      // In development, use the local URL
      return window.location.origin + '/audio/';
    }
    return '/audio/';
  };

  const audioBaseUrl = getAudioBaseUrl();

  // Same audio files mapping as in the player - using direct URLs for faster loading
  const audioFiles = {
    ls_73: audioBaseUrl + "ls_73.mp3",
    hs_74: audioBaseUrl + "hs_74.mp3", 
    sn_2e: audioBaseUrl + "sn_2e.mp3", // Ghost note
    sn_58: audioBaseUrl + "sn_58.mp3", // Accent
    re_58: audioBaseUrl + "re_58.mp3",
    ag_61: audioBaseUrl + "ag_61.mp3", // Low bell
    ag_6f: audioBaseUrl + "ag_6f.mp3", // High bell
    ta_58: audioBaseUrl + "ta_58.mp3",
    sh_2e: audioBaseUrl + "sh_2e.mp3",
  };

  // Load all audio samples
  const audioBuffers: Record<string, AudioBuffer | null> = {};
  for (const [key, url] of Object.entries(audioFiles)) {
    audioBuffers[key] = await loadAudioFile(url);
  }

  // Map to instruments
  const sounds: Record<string, AudioBuffer | null> = {
    ls: audioBuffers.ls_73,
    ms: audioBuffers.ls_73, // Use same as low surdo
    hs: audioBuffers.hs_74,
    re: audioBuffers.re_58,
    sn: audioBuffers.sn_58,
    sn_accent: audioBuffers.sn_58,
    sn_ghost: audioBuffers.sn_2e,
    ta: audioBuffers.ta_58,
    ag: audioBuffers.ag_61,
    ag_low: audioBuffers.ag_61,
    ag_high: audioBuffers.ag_6f,
    sh: audioBuffers.sh_2e,
  };

  // Create offline context for rendering
  const offlineContext = new OfflineAudioContext(1, audioContext.sampleRate * durationSeconds, audioContext.sampleRate);
  
  const pattern = tune.patterns[patternName];
  if (!pattern) {
    audioContext.close();
    throw new Error('Pattern not found');
  }

  const stepDuration = (60 / tempo) / 4; // 16th note duration
  const patternLength = 16;

  // Render the pattern
  for (let loop = 0; loop < Math.floor(durationSeconds / (stepDuration * patternLength)); loop++) {
    for (let step = 0; step < patternLength; step++) {
      const time = (loop * patternLength + step) * stepDuration;
      
      // Check each instrument at this step
      Object.keys(instrumentStates).forEach(instrument => {
        if (!instrumentStates[instrument].enabled) return;
        
        const instrumentPattern = pattern[instrument];
        if (!instrumentPattern || step >= instrumentPattern.length) return;
        
        const char = instrumentPattern[step];
        if (!char || char === ' ') return;
        
        // Get the appropriate sound buffer
        let soundBuffer: AudioBuffer | null = null;
        
        if (instrument === "ag") {
          if (char === "a") soundBuffer = sounds.ag_low;
          else if (char === "o") soundBuffer = sounds.ag_high;
          else soundBuffer = sounds.ag;
        } else if (instrument === "sn") {
          if (char === "X") soundBuffer = sounds.sn_accent;
          else if (char === ".") soundBuffer = sounds.sn_ghost;
          else soundBuffer = sounds.sn;
        } else {
          soundBuffer = sounds[instrument];
        }
        
        if (!soundBuffer) return;
        
        // Create audio source
        const source = offlineContext.createBufferSource();
        const gainNode = offlineContext.createGain();
        
        source.buffer = soundBuffer;
        source.connect(gainNode);
        gainNode.connect(offlineContext.destination);
        
        // Apply volume
        const instrumentVolume = instrumentStates[instrument]?.volume || 70;
        gainNode.gain.value = (instrumentVolume / 100) * 0.7; // Master volume
        
        source.start(time);
      });
    }
  }
  
  // Render and return the buffer
  const renderedBuffer = await offlineContext.startRendering();
  audioContext.close();
  return renderedBuffer;
}
