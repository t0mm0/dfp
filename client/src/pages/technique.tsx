import Abcjs from "@/components/abcjs";
import AbcjsPlayer from "@/components/abcjs-player";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { lessons } from "@/data/technique";
import { useState } from "react";

export default function Technique() {
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="street-text font-bold text-4xl md:text-5xl mb-4">
            Technique
          </h1>
          <p className="text-xl text-gray-300">Learn drumming fundamentals</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Excercise Selection */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="street-text text-xl">
                  Select Lesson
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 max-h-96 overflow-y-auto">
                {lessons.map((lesson) => (
                  <button
                    key={lesson.name}
                    onClick={() => setSelectedLesson(lesson)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedLesson.name === lesson.name
                        ? "bg-red-600 border-2 border-red-500"
                        : "bg-black hover:bg-gray-700"
                    }`}
                  >
                    <div className="font-semibold">
                      {lesson.displayName || lesson.name}
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* ABC Player */}
          <div className="lg:col-span-3">
            <AbcjsPlayer lesson={selectedLesson} />
          </div>
        </div>
      </div>
    </div>
  );
}
