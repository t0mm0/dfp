import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Music, Target, Volume2 } from "lucide-react";
import TimeSignatureTool from "@/components/time-signature-tool";

export default function Theory() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="street-text font-bold text-3xl sm:text-4xl md:text-5xl mb-4">Theory</h1>
          <p className="text-lg sm:text-xl text-gray-300">Playing with the chants, not over them</p>
        </div>

        {/* Time Signature & Basic Theory */}
        <section className="mb-12">
          <h2 className="street-text text-2xl sm:text-3xl font-bold mb-8 text-red-500">Rhythm Fundamentals</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Clock className="h-6 w-6 text-red-500" />
                  Time Signature: 4/4
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    <strong>What it means:</strong> 4 beats per bar, quarter note gets the beat
                  </p>
                  <div className="bg-black p-4 rounded border border-gray-600">
                    <p className="text-center text-lg font-mono text-white mb-2">4/4 Time</p>
                    <div className="flex justify-center items-center gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mb-1">1</div>
                        <p className="text-xs text-gray-400">Strong</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold mb-1">2</div>
                        <p className="text-xs text-gray-400">Weak</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold mb-1">3</div>
                        <p className="text-xs text-gray-400">Medium</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold mb-1">4</div>
                        <p className="text-xs text-gray-400">Weak</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-yellow-400 text-sm">
                    <strong>Why 4/4?</strong> This time signature matches natural speech rhythms and is easy for groups to follow.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Music className="h-6 w-6 text-red-500" />
                  Bars & Counts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    <strong>Bar (Measure):</strong> A complete cycle of 4 beats
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong>Count:</strong> Each individual beat within the bar (1, 2, 3, 4)
                  </p>
                  <div className="bg-black p-4 rounded border border-gray-600">
                    <p className="text-center text-white font-mono mb-3">One Complete Bar</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-500 font-bold">|</span>
                      <span className="text-white">1</span>
                      <span className="text-white">2</span>
                      <span className="text-white">3</span>
                      <span className="text-white">4</span>
                      <span className="text-red-500 font-bold">|</span>
                    </div>
                  </div>
                  <p className="text-yellow-400 text-sm">
                    <strong>Pattern Loops:</strong> Most rhythm patterns repeat every 1-2 bars, making them easy to learn and maintain.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Interactive Time Signature Tool */}
          <TimeSignatureTool />
        </section>

        {/* Rhythm Examples */}
        <section className="mb-12">
          <h2 className="street-text text-2xl sm:text-3xl font-bold mb-8 text-red-500">Rhythm Examples in 4/4 Time</h2>
          
          <div className="space-y-6">
            
            {/* Basic Quarter Notes */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">Basic Quarter Note Pattern</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-black p-6 rounded border border-gray-600">
                    <p className="text-center text-gray-400 mb-4">One Beat Per Count</p>
                    <div className="flex justify-center items-center gap-8 mb-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mb-2 animate-pulse">1</div>
                        <p className="text-red-400 font-bold">BEAT</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold mb-2 animate-pulse" style={{animationDelay: '0.25s'}}>2</div>
                        <p className="text-gray-400 font-bold">BEAT</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold mb-2 animate-pulse" style={{animationDelay: '0.5s'}}>3</div>
                        <p className="text-gray-400 font-bold">BEAT</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold mb-2 animate-pulse" style={{animationDelay: '0.75s'}}>4</div>
                        <p className="text-gray-400 font-bold">BEAT</p>
                      </div>
                    </div>
                    <p className="text-center text-gray-400 text-sm">Equal emphasis on every beat</p>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <strong>Application:</strong> Foundation pattern for learning timing. Strong beat 1 provides rhythmic anchor.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Accent Pattern */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">Strong Beat Emphasis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-black p-6 rounded border border-gray-600">
                    <p className="text-center text-gray-400 mb-4">Accent on Beats 1 & 3</p>
                    <div className="flex justify-center items-center gap-8 mb-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mb-2">1</div>
                        <p className="text-red-400 font-bold">STRONG</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold mb-2">2</div>
                        <p className="text-gray-400">weak</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mb-2">3</div>
                        <p className="text-red-400 font-bold">STRONG</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold mb-2">4</div>
                        <p className="text-gray-400">weak</p>
                      </div>
                    </div>
                    <p className="text-center text-gray-400 text-sm">Natural rhythm emphasis pattern</p>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <strong>Application:</strong> Common pattern in many musical styles. Helps establish rhythmic drive and groove.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Ensemble Playing Principles */}
        <section>
          <h2 className="street-text text-2xl sm:text-3xl font-bold mb-8 text-red-500">Ensemble Playing</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Target className="h-6 w-6 text-red-500" />
                  Playing with Others
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p><strong>Listen First:</strong> Hear what others are playing before adding your part</p>
                  <p><strong>Find Your Space:</strong> Play between other parts, not over them</p>
                  <p><strong>Follow the Leader:</strong> Watch for conductor signals and tempo changes</p>
                  <p><strong>Dynamic Awareness:</strong> Adjust volume to fit the overall sound</p>
                  <p><strong>Timing Unity:</strong> Stay locked in with the group rhythm</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Volume2 className="h-6 w-6 text-red-500" />
                  Building Musical Unity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p><strong>Steady Tempo:</strong> Help the group stay together with consistent timing</p>
                  <p><strong>Strategic Silence:</strong> Know when to rest for maximum impact</p>
                  <p><strong>Call and Response:</strong> Create space for musical conversation</p>
                  <p><strong>Support Others:</strong> Your role is to make the group sound better</p>
                  <p><strong>Stay Connected:</strong> Maintain eye contact and awareness</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900 border-red-500 mt-8">
            <CardHeader>
              <CardTitle className="text-red-400">Key Principles: Playing Together</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>• <strong>Listen Actively:</strong> Always be aware of what others are playing</p>
                <p>• <strong>Serve the Music:</strong> Your individual part serves the overall sound</p>
                <p>• <strong>Timing is Everything:</strong> Good time-keeping is more important than complex patterns</p>
                <p>• <strong>Volume Control:</strong> Blend with the group, don't dominate</p>
                <p>• <strong>Visual Awareness:</strong> Watch for cues and changes from leaders</p>
                <p>• <strong>Musical Conversation:</strong> Leave space for others to be heard</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}