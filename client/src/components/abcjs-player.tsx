import { Lesson } from "@/data/technique";
import { useEffect, useState } from "react";
import AudioContextWarning from "@/components/audio-context-warning";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Abcjs from "./abcjs";

interface AbcjsPlayerProps {
  lesson: Lesson;
}

export default function AbcjsPlayer({ lesson }: AbcjsPlayerProps) {
  // Automatically select the first available excercise
  const firstExcerciseName = Object.keys(lesson.excercises)[0] || "Excercise";
  const [selectedExcercise, setSelectedExcercise] =
    useState(firstExcerciseName);

  // Update selected pattern when tune changes
  useEffect(() => {
    const firstPattern = Object.keys(lesson.excercises)[0];
    if (firstPattern && !lesson.excercises[selectedExcercise]) {
      setSelectedExcercise(firstPattern);
    }
  }, [lesson, selectedExcercise]);

  const excercise = lesson.excercises[selectedExcercise];
  if (!excercise) return null;

  return (
    <>
      <AudioContextWarning />
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="street-text text-2xl">{lesson.name}</CardTitle>
          <p className="text-xl text-gray-300">{lesson.description}</p>
        </CardHeader>
        <CardContent className="space-y-6 px-2 sm:px-4">
          {/* Excercise Selection */}
          <div>
            <Select
              value={selectedExcercise}
              onValueChange={setSelectedExcercise}
            >
              <SelectTrigger className="w-full md:w-64 bg-black border-gray-600 text-white">
                <SelectValue placeholder="Select a pattern" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                {Object.keys(lesson.excercises).map((excerciseName) => (
                  <SelectItem
                    key={excerciseName}
                    value={excerciseName}
                    className="text-white hover:bg-gray-700"
                  >
                    {excerciseName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p className="text-gray-300">{excercise.description}</p>
          <Abcjs abcCode={excercise.abcCode} visualOptions={{}} />
        </CardContent>
      </Card>
    </>
  );
}
