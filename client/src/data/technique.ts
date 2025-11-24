export interface AbcExcercise {
  description?: string;
  abcCode: string;
}

export interface Lesson{
  name: string;
  displayName?: string;
  description?: string;
  video?: string;
  excercises: Record<string, AbcExcercise>;
}

export const lessons: Lesson[] = [
  {
    name: "Lesson 1",
    description: "Basic rhythm - 1 note on each beat.",
    excercises: {
      "Excercise 1": {
        description: "Practice at different speeds to really lock in with the metronome. Pay atention to the accented notes.",
        abcCode: 'X:1\nM:4/4\nL:1/4\nQ: 120\nV:1 perc stafflines=1\n%%percmap B  acoustic-snare\n%%percmap ^B side-stick x\nK:perc\n!ppp!|: "R"LB"L"B"R"B"L"B | "R"LB"L"B"R"B"L"B | "R"LB"L"B"R"B"L"B | "R"LB"L"B"R"B"L"B :|\n|: "R"B"L"LB"R"B"L"B | "R"B"L"LB"R"B"L"B | "R"B"L"LB"R"B"L"B | "R"B"L"LB"R"B"L"B :|\n|: "R"B"L"B"R"LB"L"B | "R"B"L"B"R"LB"L"B | "R"B"L"B"R"LB"L"B | "R"B"L"B"R"LB"L"B :|\n|: "R"B"L"B"R"B"L"LB | "R"B"L"B"R"B"L"LB | "R"B"L"B"R"B"L"LB | "R"B"L"B"R"B"L"LB :|',
      },
      "Excercise 2 - reverse sticking": {
        description: "Now try leading with your other hand.",
        abcCode: 'X:1\nM:4/4\nL:1/4\nQ: 120\nV:1 perc stafflines=1\n%%percmap B  acoustic-snare\n%%percmap ^B side-stick x\nK:perc\n!ppp!|: "L"LB"R"B"L"B"R"B | "L"LB"R"B"L"B"R"B | "L"LB"R"B"L"B"R"B | "L"LB"R"B"L"B"R"B :|\n|: "L"B"R"LB"L"B"R"B | "L"B"R"LB"L"B"R"B | "L"B"R"LB"L"B"R"B | "L"B"R"LB"L"B"R"B :|\n|: "L"B"R"B"L"LB"R"B | "L"B"R"B"L"LB"R"B | "L"B"R"B"L"LB"R"B | "L"B"R"B"L"LB"R"B :|\n|: "L"B"R"B"L"B"R"LB | "L"B"R"B"L"B"R"LB | "L"B"R"B"L"B"R"LB | "L"B"R"B"L"B"R"LB :|',
      },

    },
  },
  {
    name: "Lesson 5",
    description: "Subdivision",
    excercises: {
      "Excercise 1": {
        description: "Focus on evenly dividing the beat in 2/3/4/6. Pay at differen speeds - it is especially hard to play slowly and accurately! Alternate R/L sticks and practice starting on each hand. Don't worry abou accents at first, but when you are comfortable experiment with your own accents.",
        abcCode: 'X:1\nM:4/4\nL:1/16\nQ: 90\nV:1 perc stafflines=1\n%%percmap B  acoustic-snare\n%%percmap ^B side-stick x\nK:perc\n!ppp!|: "R"B4"L"LB4"R"B4"L"LB4 | "R"B2"L"LB2"..."B2LB2 B2LB2B2LB2 | (3B2B2LB2 (3B2B2LB2 (3B2B2LB2 (3B2B2LB2 |\n BBLBB BBLBB BBLBB BBLBB |\n (6:4LBBBBBB (6:4LBBBBBB (6:4LBBBBBB (6:4LBBBBBB :|',
      },
      "Excercise 2": {
        description: "A short solo figure. Notice while the beat is subdivided in 4, accents are every 3 notes creating a syncopated feel. Again play each note with alternating sticks.",
        abcCode: 'X:1\nM:4/4\nL:1/16\nQ: 90\nV:1 perc stafflines=1\n%%percmap B  acoustic-snare\n%%percmap ^B side-stick x\nK:perc\n!ppp!|: LBBBLB BBLBB BLBBB LB/2B/2B/2B/2BB :|',
      },
      "Excercise 3": {
        description: "This excercise introduces several new features. We start with a \"pick up\" - the first 2 notes are before the bar. The notes with a cross head are \"rim shots\", if you have a practice pad with a rim try hitting both the pad and the rim at the same time for these. The last 8 notes are a \"paradiddle\" - where there are 2 notes with the same stick next to each other let the stick bounce but make sure to keep in time. Again it is useful to practice this slowly and aim to be precise with the metronome!",
        abcCode: 'X:1\nM:4/4\nL:1/16\nQ: 90\nV:1 perc stafflines=1\n%%percmap B  acoustic-snare\n%%percmap ^B side-stick x\nK:perc\n!ppp! z8 z4 z2 BB|: LB2BB L^B2BB LB2BB L^B2BB | LB2BB L^B2BB "R"B"L"B"R"B"R"B "L"B"R"B"L"B"L"B:|',
      },
    },
  },
]
