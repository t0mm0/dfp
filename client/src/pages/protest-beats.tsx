import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Download, Heart } from "lucide-react";
import { protestBeats } from "@/data/protest-beats";

export default function ProtestBeats() {
  const [playingBeat, setPlayingBeat] = useState<string | null>(null);

  const handlePlayBeat = (beatId: string) => {
    if (playingBeat === beatId) {
      setPlayingBeat(null);
    } else {
      setPlayingBeat(beatId);
      // Auto-stop after 3 seconds for demo
      setTimeout(() => setPlayingBeat(null), 3000);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy": return "bg-green-600";
      case "medium": return "bg-yellow-600";
      case "hard": return "bg-red-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="street-text font-bold text-4xl md:text-5xl mb-4">Protest Beats</h1>
          <p className="text-xl text-gray-300">Rhythms of resistance for marches and demonstrations</p>
        </div>

        {/* Solidarity Banner */}
        <Card className="bg-red-600 bg-opacity-20 border-2 border-red-600 mb-8">
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-4">
              <Heart className="h-8 w-8 text-red-600" />
              <div className="text-center">
                <h3 className="street-text font-bold text-2xl mb-2">Free Palestine</h3>
                <p className="text-lg">Music unites us in the struggle for justice and human rights</p>
              </div>
              <Heart className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        {/* Protest Beats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {protestBeats.map((beat) => (
            <Card key={beat.id} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={beat.imageUrl}
                    alt={beat.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="street-text font-semibold text-xl">{beat.name}</h3>
                    <p className="text-sm text-gray-400">{beat.description}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{beat.fullDescription}</p>
                <div className="flex justify-between items-center">
                  <Badge className={getDifficultyColor(beat.difficulty)}>
                    {beat.difficulty}
                  </Badge>
                  <Button
                    onClick={() => handlePlayBeat(beat.id)}
                    className={
                      playingBeat === beat.id
                        ? "bg-gray-600 hover:bg-gray-700"
                        : "bg-red-600 hover:bg-red-700"
                    }
                  >
                    {playingBeat === beat.id ? (
                      <>
                        <Pause className="mr-2 h-4 w-4" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Play
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="street-text font-bold text-2xl mb-4">Ready to Join the Movement?</h3>
          <p className="text-lg text-gray-300 mb-6">Download these beats and bring them to your next demonstration</p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <Download className="mr-2 h-5 w-5" />
            Download All Beats
          </Button>
        </div>
      </div>
    </div>
  );
}
