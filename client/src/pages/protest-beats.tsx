import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BeatboxPlayer from "@/components/beatbox-player";
import { protestBeats } from "@/data/protest-beats";

export default function ProtestBeats() {
  const [selectedBeat, setSelectedBeat] = useState(protestBeats[0]);
  
  // Convert protest beat to tune format for the player
  const convertBeatToTune = (beat: any) => ({
    name: beat.id,
    displayName: beat.name,
    categories: ["protest"],
    speed: beat.tempo,
    time: 4,
    description: beat.fullDescription,
    patterns: {
      Beat: {
        loop: true,
        ls: beat.pattern,
        ms: beat.pattern,
        hs: beat.pattern,
        re: beat.pattern,
        sn: beat.pattern,
        ta: beat.pattern,
        ag: beat.pattern,
        sh: beat.pattern,
        mnemonics: {}
      }
    }
  });

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="street-text font-bold text-4xl md:text-5xl mb-4">Protest Beats</h1>
          <p className="text-xl text-gray-300">Rhythms of resistance and solidarity for Palestinian freedom</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-4 text-white">Select Beat</h2>
            <div className="space-y-3">
              {protestBeats.map((beat) => (
                <Button
                  key={beat.id}
                  variant={selectedBeat.id === beat.id ? "default" : "outline"}
                  className={`w-full p-4 h-auto text-left justify-start ${
                    selectedBeat.id === beat.id
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-600"
                  }`}
                  onClick={() => setSelectedBeat(beat)}
                >
                  <div className="flex flex-col items-start w-full">
                    <div className="font-semibold">{beat.name}</div>
                    <div className="text-sm opacity-75">{beat.description}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge 
                        variant="secondary" 
                        className={
                          beat.difficulty === "Easy"
                            ? "bg-green-600" 
                            : beat.difficulty === "Medium" 
                            ? "bg-yellow-600" 
                            : "bg-red-600"
                        }
                      >
                        {beat.difficulty}
                      </Badge>
                      <span className="text-xs text-gray-400">{beat.tempo} BPM</span>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <div className="mb-6">
                <h2 className="street-text text-3xl font-bold mb-2">{selectedBeat.name}</h2>
                <p className="text-gray-300 text-lg mb-2">{selectedBeat.description}</p>
                <p className="text-gray-400">{selectedBeat.fullDescription}</p>
              </div>

              <div className="bg-black p-4 rounded-lg mb-6">
                <h4 className="text-white font-semibold mb-4">Pattern Visualization:</h4>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {Array.from({ length: 16 }, (_, i) => {
                    const shouldShowSeparator = i % 4 === 0 && i > 0;
                    return (
                      <div key={i} className="flex items-center">
                        {shouldShowSeparator && (
                          <div className="w-0.5 h-6 bg-yellow-400 mx-1 shadow-lg shadow-yellow-400/50"></div>
                        )}
                        <div
                          className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                            selectedBeat.pattern[i] && selectedBeat.pattern[i] !== ' ' 
                              ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' 
                              : 'bg-gray-700 text-gray-400'
                          }`}
                          title={`Beat ${(i % 4) + 1}`}
                        >
                          {(i % 4) + 1}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="text-center text-gray-400 text-sm">
                  Pattern: <span className="font-mono">{selectedBeat.pattern}</span>
                </div>
              </div>

              <BeatboxPlayer tune={convertBeatToTune(selectedBeat)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}