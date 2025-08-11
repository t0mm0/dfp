import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Music, Target, Volume2 } from "lucide-react";

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
                    <strong>Why 4/4?</strong> Palestinian chants naturally fit this pattern - it matches speech rhythms and is easy for crowds to follow.
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
                    <strong>Pattern Loops:</strong> Most protest beats repeat every 1-2 bars, making them easy to learn and maintain.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Palestinian Chant Examples */}
        <section className="mb-12">
          <h2 className="street-text text-2xl sm:text-3xl font-bold mb-8 text-red-500">Palestinian Chants in 4/4 Time</h2>
          
          <div className="space-y-6">
            
            {/* Free Palestine */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">"Free Free Palestine"</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-black p-6 rounded border border-gray-600">
                    <p className="text-center text-gray-400 mb-4">Beat Pattern Visualization</p>
                    <div className="flex justify-center items-center gap-8 mb-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mb-2 animate-pulse">1</div>
                        <p className="text-red-400 font-bold">FREE</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mb-2 animate-pulse" style={{animationDelay: '0.25s'}}>2</div>
                        <p className="text-red-400 font-bold">FREE</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mb-2 animate-pulse" style={{animationDelay: '0.5s'}}>3</div>
                        <p className="text-red-400 font-bold">PAL-</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mb-2 animate-pulse" style={{animationDelay: '0.75s'}}>4</div>
                        <p className="text-red-400 font-bold">-ESTINE</p>
                      </div>
                    </div>
                    <p className="text-center text-gray-400 text-sm">Each syllable lands perfectly on a beat</p>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <strong>Rhythm Pattern:</strong> Strong emphasis on beats 1 and 2 ("FREE FREE"), with "Palestine" flowing across beats 3-4.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 1 2 3 4 */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">"1, 2, 3, 4 - Occupation No More"</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-black p-6 rounded border border-gray-600">
                    <p className="text-center text-gray-400 mb-4">Two-Bar Pattern</p>
                    
                    {/* First Bar */}
                    <div className="mb-6">
                      <p className="text-center text-white mb-2">Bar 1</p>
                      <div className="flex justify-center items-center gap-8 mb-2">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold mb-2">1</div>
                          <p className="text-yellow-400 font-bold">ONE</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold mb-2">2</div>
                          <p className="text-yellow-400 font-bold">TWO</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold mb-2">3</div>
                          <p className="text-yellow-400 font-bold">THREE</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold mb-2">4</div>
                          <p className="text-yellow-400 font-bold">FOUR</p>
                        </div>
                      </div>
                    </div>

                    {/* Second Bar */}
                    <div>
                      <p className="text-center text-white mb-2">Bar 2</p>
                      <div className="flex justify-center items-center gap-8">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mb-2">1</div>
                          <p className="text-red-400 font-bold">OC-CU-</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mb-2">2</div>
                          <p className="text-red-400 font-bold">-PA-TION</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mb-2">3</div>
                          <p className="text-red-400 font-bold">NO</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mb-2">4</div>
                          <p className="text-red-400 font-bold">MORE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <strong>Teaching Tool:</strong> This chant teaches counting while building solidarity. The numbers establish the beat, then the message reinforces it.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* From the River to the Sea */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">"From the River to the Sea"</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-black p-6 rounded border border-gray-600">
                    <p className="text-center text-gray-400 mb-4">Extended Pattern (4 bars)</p>
                    
                    {/* Bar 1 */}
                    <div className="mb-4">
                      <p className="text-center text-white mb-2">Bar 1</p>
                      <div className="flex justify-center items-center gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-sm mb-1">1</div>
                          <p className="text-green-400 text-xs">FROM</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm mb-1">2</div>
                          <p className="text-gray-400 text-xs">THE</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-sm mb-1">3</div>
                          <p className="text-green-400 text-xs">RI-</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm mb-1">4</div>
                          <p className="text-gray-400 text-xs">-VER</p>
                        </div>
                      </div>
                    </div>

                    {/* Bar 2 */}
                    <div className="mb-4">
                      <p className="text-center text-white mb-2">Bar 2</p>
                      <div className="flex justify-center items-center gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm mb-1">1</div>
                          <p className="text-blue-400 text-xs">TO</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm mb-1">2</div>
                          <p className="text-gray-400 text-xs">THE</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm mb-1">3</div>
                          <p className="text-blue-400 text-xs">SEA</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm mb-1">4</div>
                          <p className="text-gray-400 text-xs">(rest)</p>
                        </div>
                      </div>
                    </div>

                    {/* Bar 3 */}
                    <div className="mb-4">
                      <p className="text-center text-white mb-2">Bar 3</p>
                      <div className="flex justify-center items-center gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-sm mb-1">1</div>
                          <p className="text-red-400 text-xs">PAL-</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-sm mb-1">2</div>
                          <p className="text-red-400 text-xs">-ES-</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-sm mb-1">3</div>
                          <p className="text-red-400 text-xs">-TINE</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm mb-1">4</div>
                          <p className="text-gray-400 text-xs">WILL</p>
                        </div>
                      </div>
                    </div>

                    {/* Bar 4 */}
                    <div>
                      <p className="text-center text-white mb-2">Bar 4</p>
                      <div className="flex justify-center items-center gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black text-sm mb-1">1</div>
                          <p className="text-white text-xs">BE</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm mb-1">2</div>
                          <p className="text-gray-400 text-xs">(rest)</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black text-sm mb-1">3</div>
                          <p className="text-white text-xs">FREE</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm mb-1">4</div>
                          <p className="text-gray-400 text-xs">(rest)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <strong>Complex Pattern:</strong> This longer chant shows how powerful messages can be structured across multiple bars while maintaining clear rhythmic anchors.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Intifada */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">"Intifada, Intifada"</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-black p-6 rounded border border-gray-600">
                    <div className="flex justify-center items-center gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-2">1</div>
                        <p className="text-purple-400 font-bold">IN-TI-</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-2">2</div>
                        <p className="text-purple-400 font-bold">-FA-DA</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-2">3</div>
                        <p className="text-purple-400 font-bold">IN-TI-</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-2">4</div>
                        <p className="text-purple-400 font-bold">-FA-DA</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <strong>Repetitive Power:</strong> The repeated word creates hypnotic rhythm that's easy to maintain and builds collective energy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pattern Application */}
        <section>
          <h2 className="street-text text-2xl sm:text-3xl font-bold mb-8 text-red-500">Supporting the Chants</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Target className="h-6 w-6 text-red-500" />
                  Playing Around the Voices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p><strong>Count with the Chant:</strong> Master the 4/4 timing to stay perfectly in sync</p>
                  <p><strong>Find the Gaps:</strong> Play between vocal lines, not over them</p>
                  <p><strong>Support, Don't Lead:</strong> Follow the crowd's energy and tempo</p>
                  <p><strong>Listen First:</strong> Hear the natural rhythm before adding drums</p>
                  <p><strong>Volume Awareness:</strong> Adjust dynamics to complement, never overpower</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Volume2 className="h-6 w-6 text-red-500" />
                  Building Solidarity Through Rhythm
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p><strong>Tempo Unity:</strong> Keep steady time to help the crowd stay together</p>
                  <p><strong>Strategic Silence:</strong> Know when to stop playing for maximum impact</p>
                  <p><strong>Call and Response:</strong> Create space for crowd participation</p>
                  <p><strong>Cultural Respect:</strong> Honor Palestinian musical traditions</p>
                  <p><strong>Inclusive Playing:</strong> Ensure everyone can follow and join in</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900 border-red-500 mt-8">
            <CardHeader>
              <CardTitle className="text-red-400">Key Principles: Supporting Not Drowning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>• <strong>Count with the Crowd:</strong> Master 4/4 timing to play perfectly in sync with chants</p>
                <p>• <strong>Listen Before Playing:</strong> Hear the natural rhythm of voices before adding drums</p>
                <p>• <strong>Fill the Spaces:</strong> Play between vocal lines, during pauses, never over the words</p>
                <p>• <strong>Support the Tempo:</strong> Help the crowd stay together without overpowering them</p>
                <p>• <strong>Dynamic Awareness:</strong> Adjust volume and intensity to complement, not compete</p>
                <p>• <strong>Unity First:</strong> Every beat should strengthen solidarity, not showcase individual skill</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}