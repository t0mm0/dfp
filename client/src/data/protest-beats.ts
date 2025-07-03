export interface ProtestBeat {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  pattern: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tempo: number;
  imageUrl: string;
}

export const protestBeats: ProtestBeat[] = [
  {
    id: "gaza",
    name: "Gaza",
    description: "Solidarity beat for Gaza",
    fullDescription: "A powerful rhythm expressing solidarity with Gaza. Features multiple levels from basic to complex patterns.",
    pattern: "X   X   X   X   ",
    difficulty: "Easy",
    tempo: 120,
    imageUrl: ""
  },
  {
    id: "end-the-occupation",
    name: "End The Occupation",
    description: "Call to end occupation",
    fullDescription: "A demanding rhythm calling for the end of occupation. Progressive levels build intensity.",
    pattern: "X X X   X X X   ",
    difficulty: "Medium",
    tempo: 130,
    imageUrl: ""
  },
  {
    id: "we-are-the-people",
    name: "We Are The People",
    description: "Unity through rhythm",
    fullDescription: "A unifying rhythm that brings communities together. Builds from surdos to full ensemble.",
    pattern: "X   X X X   X   ",
    difficulty: "Easy",
    tempo: 100,
    imageUrl: ""
  },
  {
    id: "clave",
    name: "Clave",
    description: "Shut the system down",
    fullDescription: "Classic clave pattern: 'Shut the sys-tem down.' A powerful call for systemic change.",
    pattern: "X   X   X   X X ",
    difficulty: "Medium",
    tempo: 120,
    imageUrl: ""
  },
  {
    id: "single-tri-beat",
    name: "Single Tri-Beat",
    description: "Three rapid hits",
    fullDescription: "Three rapid hits in one count. Simple but effective for emphasis.",
    pattern: "XXX             ",
    difficulty: "Easy",
    tempo: 110,
    imageUrl: ""
  },
  {
    id: "karla-prog-break",
    name: "Karla Prog Break",
    description: "Progressive volume break",
    fullDescription: "4 soft beats, 4 medium, 4 loud, then 4 rests. Dynamic progression for maximum impact.",
    pattern: "X X X X X X X X X X X X     ",
    difficulty: "Hard",
    tempo: 140,
    imageUrl: ""
  }
];
