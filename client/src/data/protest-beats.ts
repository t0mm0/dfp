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
    id: "march",
    name: "March Beat",
    description: "Steady rhythm for walking",
    fullDescription: "A powerful, steady rhythm perfect for marches and demonstrations. Easy to play while walking.",
    pattern: "X   X   X   X   ",
    difficulty: "Easy",
    tempo: 120,
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "rally",
    name: "Rally Rhythm",
    description: "Energetic crowd beat",
    fullDescription: "High-energy rhythm for rallies and stationary protests. Gets the crowd moving and chanting.",
    pattern: "X X X   X X X   ",
    difficulty: "Medium",
    tempo: 130,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "solidarity",
    name: "Solidarity",
    description: "Unity through rhythm",
    fullDescription: "A unifying rhythm that brings communities together. Perfect for vigils and solidarity gatherings.",
    pattern: "X   X X X   X   ",
    difficulty: "Easy",
    tempo: 100,
    imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "resistance",
    name: "Resistance",
    description: "Power through sound",
    fullDescription: "A complex, powerful rhythm that demands attention. For experienced groups making a statement.",
    pattern: "X X   X X X   X ",
    difficulty: "Hard",
    tempo: 140,
    imageUrl: "https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "chant",
    name: "Chant Support",
    description: "Rhythmic backing",
    fullDescription: "Simple, repetitive rhythm designed to support chants and slogans without overwhelming voices.",
    pattern: "X       X       ",
    difficulty: "Easy",
    tempo: 90,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "liberation",
    name: "Liberation",
    description: "Celebration of freedom",
    fullDescription: "A joyous, complex rhythm celebrating freedom and victory. For moments of hope and celebration.",
    pattern: "X X X X X X X X ",
    difficulty: "Medium",
    tempo: 150,
    imageUrl: "https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];
