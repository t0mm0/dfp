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
    id: "level-1",
    name: "Level 1",
    description: "Single beat every count",
    fullDescription: "Basic foundation rhythm - single beat every count. Perfect for beginners and building unified rhythm.",
    pattern: "X   X   X   X   ",
    difficulty: "Easy",
    tempo: 120,
    imageUrl: ""
  },
  {
    id: "level-2",
    name: "Level 2", 
    description: "Double beat on counts 1 and 3",
    fullDescription: "Double beat on counts 1 and 3. Builds foundation for more complex patterns.",
    pattern: "XX      XX      ",
    difficulty: "Easy",
    tempo: 120,
    imageUrl: ""
  },
  {
    id: "level-3",
    name: "Level 3",
    description: "Solid beats on counts 1-3 with tri-beat on count 4",
    fullDescription: "Solid beats on counts 1-3 with a tri-beat on count 4. Creates powerful momentum.",
    pattern: "X   X   X   XXX ",
    difficulty: "Medium",
    tempo: 110,
    imageUrl: ""
  },
  {
    id: "level-5",
    name: "Level 5",
    description: "Continuous hi-hat pulse on every count",
    fullDescription: "Continuous hi-hat pulse on every count. Maximum energy and drive.",
    pattern: "X X X X X X X X X X X X X X X X ",
    difficulty: "Medium",
    tempo: 130,
    imageUrl: ""
  },
  {
    id: "single-beat",
    name: "Single Beat",
    description: "A steady hit every count",
    fullDescription: "Basic steady rhythm - one hit per count. Foundation for all other patterns.",
    pattern: "X   X   X   X   ",
    difficulty: "Easy",
    tempo: 120,
    imageUrl: ""
  },
  {
    id: "double-beat",
    name: "Double Beat", 
    description: "Hits only on counts 1 and 3",
    fullDescription: "Emphasis on beats 1 and 3 only. Strong foundation pattern.",
    pattern: "X       X       ",
    difficulty: "Easy",
    tempo: 120,
    imageUrl: ""
  },
  {
    id: "clave",
    name: "Clave",
    description: "Classic pattern: 'Shut the sys-tem down'",
    fullDescription: "Traditional clave rhythm: 'Shut the sys-tem down.' Powerful and iconic protest beat.",
    pattern: "X  X  X   X X   ",
    difficulty: "Easy",
    tempo: 130,
    imageUrl: ""
  },
  {
    id: "8-beat",
    name: "8 Beat",
    description: "8 hits in a 16-step measure (every 2 steps)",
    fullDescription: "8 evenly spaced hits across 16 steps. Maintains steady energy and easy for crowds to follow.",
    pattern: "X X X X X X X X ",
    difficulty: "Easy",
    tempo: 120,
    imageUrl: ""
  },
  {
    id: "gaza-level1",
    name: "Gaza - Level 1",
    description: "Basic beat for everyone",
    fullDescription: "Gaza solidarity Level 1 - basic beat that everyone can play together.",
    pattern: "X   X   X   X   ",
    difficulty: "Easy",
    tempo: 110,
    imageUrl: ""
  },
  {
    id: "end-occupation",
    name: "End The Occupation",
    description: "Everyone joins in - Level 2",
    fullDescription: "Powerful rhythm demanding end to occupation. Everyone plays together for maximum impact.",
    pattern: "X X   X X X   X ",
    difficulty: "Medium",
    tempo: 110,
    imageUrl: ""
  },
  {
    id: "we-are-people-level1",
    name: "We Are The People - Level 1", 
    description: "Surdos only",
    fullDescription: "Foundation rhythm for 'We Are The People' - surdos establish the base rhythm.",
    pattern: "X       X       ",
    difficulty: "Easy",
    tempo: 100,
    imageUrl: ""
  },
  {
    id: "tri-hit",
    name: "1 Tri-Hit",
    description: "Three rapid hits on count 1",
    fullDescription: "Three rapid hits creating dramatic emphasis. Great for highlighting chants or calls.",
    pattern: "XXX             ",
    difficulty: "Medium",
    tempo: 100,
    imageUrl: ""
  }
];
