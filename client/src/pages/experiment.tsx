import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import BeatboxPlayer from "@/components/beatbox-player";
import { Play, RotateCcw, Save, Download } from "lucide-react";

export default function Experiment() {
  const [tuneName, setTuneName] = useState("My Custom Beat");
  const [tempo, setTempo] = useState(120);
  const [patterns, setPatterns] = useState({
    ls: "X   X   X   X   ", // Low Surdo
    ms: "  X   X   X   X ", // Mid Surdo
    hs: "    X       X   ", // High Surdo
    re: "  X   X   X   X ", // Repi
    sn: ". X . X . X . X ", // Snare
    ta: "X X X X X X X X ", // Tamborim
    ag: "a   o   a   o   ", // Agogo
    sh: ". . . . . . . . "  // Shaker
  });

  const instruments = [
    { key: 'ls', name: 'Low Surdo', description: 'Deep bass drum' },
    { key: 'ms', name: 'Mid Surdo', description: 'Medium bass drum' },
    { key: 'hs', name: 'High Surdo', description: 'High bass drum' },
    { key: 're', name: 'Repi', description: 'Snare-like drum' },
    { key: 'sn', name: 'Snare', description: 'Sharp snare drum' },
    { key: 'ta', name: 'Tamborim', description: 'Small high-pitched drum' },
    { key: 'ag', name: 'Agogo', description: 'Two-tone bell (a=low, o=high)' },
    { key: 'sh', name: 'Shaker', description: 'Percussion shaker' }
  ];

  const updatePattern = useCallback((instrument: string, index: number, value: string) => {
    setPatterns(prev => {
      const key = instrument as keyof typeof patterns;
      return {
        ...prev,
        [key]: prev[key].substring(0, index) + value + prev[key].substring(index + 1)
      };
    });
  }, []);

  const clearPattern = useCallback((instrument: string) => {
    setPatterns(prev => {
      const key = instrument as keyof typeof patterns;
      return {
        ...prev,
        [key]: "                " // 16 spaces
      };
    });
  }, []);

  const resetAll = useCallback(() => {
    setPatterns({
      ls: "X   X   X   X   ",
      ms: "  X   X   X   X ",
      hs: "    X       X   ",
      re: "  X   X   X   X ",
      sn: ". X . X . X . X ",
      ta: "X X X X X X X X ",
      ag: "a   o   a   o   ",
      sh: ". . . . . . . . "
    });
    setTempo(120);
    setTuneName("My Custom Beat");
  }, []);

  const downloadAsMP3 = useCallback(async () => {
    try {
      // Use MediaRecorder with MP3 support where available
      const stream = new MediaStream();
      
      // Create a temporary audio context for recording
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const destination = audioContext.createMediaStreamDestination();
      
      // Generate audio based on the pattern
      const sampleRate = audioContext.sampleRate;
      const durationSeconds = 8; // 8 seconds (2 loops)
      const stepDuration = (60 / tempo) / 4; // 16th note duration
      
      // Create oscillators and gain nodes for different instruments
      const createSound = (frequency: number, startTime: number, duration: number) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.frequency.setValueAtTime(frequency, startTime);
        oscillator.connect(gainNode);
        gainNode.connect(destination);
        
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.2, startTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
      };
      
      // Schedule sounds based on pattern
      const startTime = audioContext.currentTime + 0.1;
      for (let loop = 0; loop < 2; loop++) {
        for (let step = 0; step < 16; step++) {
          const time = startTime + (loop * 16 + step) * stepDuration;
          
          // Check each instrument for hits at this step
          Object.entries(patterns).forEach(([instrument, pattern]) => {
            const char = pattern[step];
            if (char && char !== ' ') {
              let frequency = 440; // Default frequency
              
              // Set different frequencies for different instruments
              switch (instrument) {
                case 'ls': frequency = 60; break;   // Low Surdo
                case 'ms': frequency = 80; break;   // Mid Surdo  
                case 'hs': frequency = 100; break;  // High Surdo
                case 're': frequency = 200; break;  // Repi
                case 'sn': frequency = char === 'X' ? 300 : 200; break; // Snare
                case 'ta': frequency = 800; break;  // Tamborim
                case 'ag': frequency = char === 'a' ? 1000 : 1200; break; // Agogo
                case 'sh': frequency = 5000; break; // Shaker
              }
              
              createSound(frequency, time, 0.1);
            }
          });
        }
      }
      
      // Set up MediaRecorder
      let mimeType = 'audio/webm';
      if (MediaRecorder.isTypeSupported('audio/mp4')) {
        mimeType = 'audio/mp4';
      } else if (MediaRecorder.isTypeSupported('audio/mpeg')) {
        mimeType = 'audio/mpeg';
      }
      
      const mediaRecorder = new MediaRecorder(destination.stream, { mimeType });
      const chunks: Blob[] = [];
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const fileExtension = mimeType.includes('mp4') ? 'mp4' : 
                             mimeType.includes('mpeg') ? 'mp3' : 'webm';
        
        const blob = new Blob(chunks, { type: mimeType });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${tuneName.replace(/[^a-zA-Z0-9]/g, '_')}.${fileExtension}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        audioContext.close();
      };
      
      // Start recording
      mediaRecorder.start();
      
      // Stop recording after the pattern finishes
      setTimeout(() => {
        mediaRecorder.stop();
      }, (durationSeconds + 1) * 1000);
      
      alert(`Recording started! Your beat will be downloaded in ${durationSeconds + 1} seconds.`);
      
    } catch (error) {
      console.error('Error generating audio:', error);
      alert('Error generating audio file. Please try again.');
    }
  }, [tuneName, patterns, tempo]);

  // Convert experiment to tune format for the player
  const experimentTune = {
    name: "experiment",
    displayName: tuneName,
    categories: ["custom"],
    speed: tempo,
    time: 4,
    description: "Your custom experimental beat",
    patterns: {
      Custom: {
        loop: true,
        ...patterns,
        mnemonics: {}
      }
    }
  };

  const PatternEditor = ({ instrument }: { instrument: any }) => {
    const pattern = patterns[instrument.key as keyof typeof patterns];
    
    return (
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">{instrument.name}</CardTitle>
              <p className="text-sm text-gray-400">{instrument.description}</p>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => clearPattern(instrument.key)}
              className="text-xs"
            >
              Clear
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-16 gap-1">
            {Array.from({ length: 16 }, (_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-xs text-gray-500 mb-1">{i + 1}</div>
                <button
                  className="w-8 h-8 border border-gray-600 rounded text-white bg-black hover:bg-gray-700 focus:ring-2 focus:ring-white focus:outline-none"
                  onClick={() => {
                    const currentChar = pattern[i];
                    let nextChar = ' ';
                    
                    if (instrument.key === 'ag') {
                      // Agogo: cycle through space, a, o
                      if (currentChar === ' ') nextChar = 'a';
                      else if (currentChar === 'a') nextChar = 'o';
                      else nextChar = ' ';
                    } else if (instrument.key === 'sn') {
                      // Snare: cycle through space, ., X
                      if (currentChar === ' ') nextChar = '.';
                      else if (currentChar === '.') nextChar = 'X';
                      else nextChar = ' ';
                    } else {
                      // Other instruments: cycle through space, X
                      nextChar = currentChar === 'X' ? ' ' : 'X';
                    }
                    
                    updatePattern(instrument.key, i, nextChar);
                  }}
                >
                  {pattern[i] === ' ' ? '·' : pattern[i]}
                </button>
              </div>
            ))}
          </div>
          <div className="mt-2 text-xs text-gray-500">
            {instrument.key === 'ag' ? 'Click: • → a → o → •' : 
             instrument.key === 'sn' ? 'Click: • → . → X → •' : 
             'Click: • → X → •'}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="street-text font-bold text-4xl md:text-5xl mb-4">Create Your Own</h1>
          <p className="text-xl text-gray-300">Experiment with patterns and create custom rhythms</p>
        </div>

        {/* Controls */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle>Beat Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="tune-name">Beat Name</Label>
                <Input
                  id="tune-name"
                  value={tuneName}
                  onChange={(e) => setTuneName(e.target.value)}
                  className="bg-black border-gray-600"
                />
              </div>
              <div>
                <Label htmlFor="tempo">Tempo: {tempo} BPM</Label>
                <Slider
                  id="tempo"
                  min={40}
                  max={200}
                  step={5}
                  value={[tempo]}
                  onValueChange={(value) => setTempo(value[0])}
                  className="mt-2"
                />
              </div>
              <div className="flex items-end gap-2">
                <Button onClick={resetAll} variant="outline">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset All
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save Beat
                </Button>
                <Button 
                  onClick={downloadAsMP3}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download MP3
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pattern Editors */}
        <div className="space-y-6 mb-8">
          {instruments.map((instrument) => (
            <PatternEditor key={instrument.key} instrument={instrument} />
          ))}
        </div>

        {/* Player */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5" />
              Test Your Beat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BeatboxPlayer 
              tune={experimentTune} 
            />
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="bg-gray-800 border-gray-700 mt-8">
          <CardHeader>
            <CardTitle>How to Use</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-300">
              <p><strong>Pattern Grid:</strong> Each row represents an instrument, and each column represents a beat (1-16).</p>
              <p><strong>Clicking Boxes:</strong> Click on any box to cycle through available sounds for that instrument.</p>
              <p><strong>Symbols:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>X</strong> = Hit/Strike</li>
                <li><strong>.</strong> = Ghost note (soft hit - for snare)</li>
                <li><strong>a</strong> = Low bell (agogo)</li>
                <li><strong>o</strong> = High bell (agogo)</li>
                <li><strong>·</strong> = Silence</li>
              </ul>
              <p><strong>Tips:</strong> Start with simple patterns and build complexity. Try syncopated rhythms by offsetting different instruments.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}