import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BeatboxPlayer from "@/components/beatbox-player";
import { protestBeats } from "@/data/protest-beats";

export default function ProtestBeats() {
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

        <div className="space-y-8">
          {protestBeats.map((beat) => (
            <Card key={beat.id} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <CardTitle className="street-text text-2xl">{beat.name}</CardTitle>
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
                    <span className="text-sm text-gray-400">{beat.tempo} BPM</span>
                  </div>
                </div>
                <p className="text-gray-300 text-lg">{beat.description}</p>
                <p className="text-gray-400">{beat.fullDescription}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-black p-4 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Pattern:</h4>
                    <div className="font-mono text-lg tracking-wider text-white">
                      {beat.pattern}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <BeatboxPlayer 
                      tune={convertBeatToTune(beat)} 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gray-800 rounded-lg">
          <h3 className="street-text font-bold text-2xl mb-4">From the River to the Sea</h3>
          <p className="text-lg text-gray-300 mb-6">Palestine will be free. Use these rhythms to amplify voices of resistance and solidarity.</p>
        </div>
      </div>
    </div>
  );
}