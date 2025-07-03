export interface TunePattern {
  loop?: boolean;
  upbeat?: number;
  ls?: string;
  ms?: string;
  hs?: string;
  re?: string;
  sn?: string;
  ta?: string;
  ag?: string;
  sh?: string;
  ot?: string;
  mnemonics?: Record<string, string>;
  volumeHack?: Record<string, number> | Record<string, Record<number, number>>;
}

export interface Tune {
  name: string;
  displayName?: string;
  categories?: string[];
  speed?: number;
  time?: number;
  description?: string;
  video?: string;
  patterns: Record<string, TunePattern>;
  exampleSong?: Array<string | { tuneName?: string; patternName: string; length?: number }>;
}

// Convert provided tune data to our format
export const tunes: Tune[] = [
  {
    name: "karla",
    displayName: "Karla",
    categories: ["core", "easy"],
    speed: 120,
    patterns: {
      "Tune": {
        loop: true,
        ls: 'XXX   XX XX XXX   XX XX XXX   XX XX XXX   XX XX XXX   XX XX ',
        ms: '    X       X       X       X       X       X       X  X X XX X ',
        hs: '@ms',
        re: 'X  XX  X X XX X X  XX  X X XX X X  XX  X X XX X X  XX  X X XX X ',
        sn: '    X  X  X     X  X  X     X  X  X     X  X  X     X  X  X    ',
        ta: '    X       X       X  X X XX       X       X       X  X X XX   ',
        ag: 'o  oa o o  oa o o  oa o o  oa o o  oa o o  oa o o  oa o o  oa o ',
        sh: '................................................................',
        mnemonics: {
          ls: "Ra-bbit run Ra-bbit run Ra-bbit run Ra-bbit run from the ca-ges",
          ms: "Run fast Run fast Run fast Run fast from the ca-ges",
          re: "Ka-rla said you won't be fur coats Ka-rla said you won't be fur coats " +
              "Ka-rla said you won't be fur coats Ka-rla said you won't be fur coats",
          ta: "Ka-rla saved us from the farm Ka-rla saved us from the farm",
          ag: "Ha-ppy bu-nnies ha-ppy bu-nnies Ha-ppy bu-nnies ha-ppy bu-nnies " +
              "Ha-ppy bu-nnies ha-ppy bu-nnies Ha-ppy bu-nnies ha-ppy bu-nnies"
        }
      }
    }
  },
  {
    name: "custard",
    displayName: "Custard",
    categories: ["common", "medium"],
    speed: 120,
    patterns: {
      "Tune": {
        loop: true,
        ls: '0   X   0   X X ',
        ms: 'X   0   X   0   ',
        hs: 'X X 0   XX X0   ',
        re: '  XX  XX  XX  XX',
        sn: 'X.X.X..X.X..X...',
        ta: 'X X XX X X X XX ',
        ag: 'a a oo a a o oo ',
        sh: '................',
        mnemonics: {
          ls: "I quite like cu-stard",
          ms: "Cu-stard par-ty",
          hs: "Cu-stard thanks, Right in my pants",
          re: "Can I Get a Bit of Cu-stard?",
          sn: "Stop . wea . ring . . cu . stard? . . Nah . . .",
          ta: "I've got cu-stard in my un-der-pants",
          ag: "I've got cu-stard in my un-der-pants"
        }
      }
    }
  },
  {
    name: "funk",
    displayName: "Funk",
    categories: ["core", "easy"],
    speed: 120,
    patterns: {
      "Tune": {
        loop: true,
        ls: 'X  X  X X X     X  X  X X       ',
        ms: '    X       X X     X     X X   ',
        hs: '@ms',
        re: 'f  hf  hf  hf  hf  hf  hf  hXhrh',
        sn: '....X.......X.......X.......X...',
        ta: '@ms',
        ag: 'o  a  o   a a a o  a  o   a a a ',
        sh: 'X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.',
        mnemonics: {
          ls: "I like po-ta-toes, I like them mashed",
          ms: "Oh, do you? 'Cos I don't",
          re: "Mash is fine, but Mash is fine, but Mash is fine, but Chips are clea-rly be-tter",
          ag: "I like hash browns be-tter I like hash browns be-tter",
        }
      }
    }
  },
  {
    name: "bhangra",
    displayName: "Bhangra",
    categories: ["core", "onesurdo", "medium"],
    speed: 120,
    time: 3,
    patterns: {
      "Tune": {
        loop: true,
        ls: 'X       XX  X       XX  X       XX  X    X   X  ',
        ms: '@ls',
        hs: '@ls',
        re: 'X zX zX zX zX zX zX zX zX zX zX zX zXXXX  XXXX  ',
        sn: 'X..X..X..X..X..X..X..X..X..X..X..X..XXXX  XXXX',
        ta: 'X XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX X',
        ag: 'aaaa  oooo              aaaa  oooo              ',
        sh: 'X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..',
        mnemonics: {
          ls: "Swing your drum Swing your drum Swing your drum side to side",
          re: "Ban-ger ban-ger ban-ger ban-ger Ban-ger ban-ger ban-ger ban-ger Ban-ger ban-ger ban-ger ban-ger Danc-ing a lot, like it or not",
          sn: "1 . . 2 . . 3 . . 4 . . 1 . . 2 . . 3 . . 4 . . 1 . . 2 . . 3 . . 4 . . Dan-cing a lot, like it or not",
          ta: "Ban-ger ban-ger ban-ger ban-ger Ban-ger ban-ger ban-ger ban-ger Ban-ger ban-ger ban-ger ban-ger Ban-ger ban-ger ban-ger ban-ger",
          ag: "Dan-cing a lot, like it or not Dan-cing a lot, like it or not"
        }
      }
    }
  },
  {
    name: "afoxe",
    displayName: "Afoxé",
    categories: ["common", "medium"],
    speed: 120,
    patterns: {
      "Tune": {
        loop: true,
        ls: 's   s   s   s   s   s   X   X   ',
        ms: '0     X 0     X 0     X X X X X ',
        hs: '@ms',
        re: 'f  hs r f  hs r f  hs r s r s r ',
        sn: 'X...X..XX..X....X...X..XX..X....',
        ta: 'X X X X XX XX X X X X X XX XX X ',
        ag: 'a a o o aa o oo a a o o aa o oo ',
        sh: '................................',
        mnemonics: {
          ls: "I'm so sick of all this stu-bble",
          ms: "If you want a shave then grab a to-wel",
          re: "Sha-ving cream please, Sha-ving cream please, Sha-ving cream please, Cream please cream please",
          sn: "Don't . . . scratch . . my face, . . please . . . . Don't . . . scratch . . my face, . . please . . . .",
          ta: "Spent all e-vening sha-ving my arm-pits Spent all e-vening sha-ving my arm-pits",
          ag: "Spent all e-vening sha-ving both my legs Spent all e-vening sha-ving both my legs"
        }
      }
    }
  },
  {
    name: "angela-davis",
    displayName: "Angela Davis",
    categories: ["common", "medium"],
    speed: 120,
    patterns: {
      "Tune": {
        loop: true,
        ls: 'X X r  rXrX r   ',
        ms: 'XXXXXXXXX       ',
        hs: '            XXXX',
        re: 'f   f   f  XXX  ',
        sn: '....X.......X...',
        ta: 'X   X  XXX  X   ',
        ag: '  o a   oa  a   ',
        sh: '................',
        mnemonics: {
          ls: "Did a squi-rrel ask you for nuts?",
          ms: "I thought squi-rrels went for a-corns more",
          hs: "We like pea-nuts",
          re: "Pea-nuts for a squi-rrel",
          ta: "Who gives a squi-rrel nuts?",
          ag: "Oh my, squi-rrels fly?"
        }
      }
    }
  },
  {
    name: "hedgehog",
    displayName: "Hedgehog",
    categories: ["core", "easy"],
    speed: 120,
    patterns: {
      "Tune": {
        loop: true,
        ls: 's  X    s  X    s  X    X X X X ',
        ms: '      XX      XX      XX      XX',
        hs: '   X  X    X  X    X  X   X   X ',
        re: 'r  X  X r  X  X r  X  X r X r X ',
        sn: 'X..X..X.X..X..X.X..X..X.X...X...',
        ta: 'X  X    X  X    X  X    X X X   ',
        ag: 'o  a  a o  a  a o  a  a o a o a ',
        sh: '................................',
        mnemonics: {
          ls: "Hedge-hog Hedge-hog Hedge-hog I'm a hedge-hog",
          ms: "I'm a hedge-hog I'm a hedge-hog",
          hs: "Hedge-hog Hedge-hog Hedge-hog A hog",
          re: "1 hedge-hog, 2 hedge-hog, 3 hedge-hog I'm a hedge-hog",
          sn: "Hedge . . hog . . a . Hedge . . hog . . a . Hedge . . hog . . a . Small . . . guy . . .",
          ta: "Hedge-hog Hedge-hog Hedge-hog I'm a hog",
          ag: "1 hedge-hog, 2 hedge-hog, 3 hedge-hog I'm a hedge-hog"
        }
      }
    }
  },
  {
    name: "drum-bass",
    displayName: "Drum & Bass",
    categories: ["new", "medium"],
    speed: 120,
    patterns: {
      "Tune": {
        loop: true,
        ls: 'X         X  X  X         X     X         X  X  X         X     ',
        ms: '    X XXXX  X       X XXXX  X       X XXXX  X       X XXXX  X   ',
        hs: '@ms',
        re: '    X  X X XX XX    X       X       X  X X XX XX    X       X   ',
        sn: '....X..X....X.......X..X....X   ....X..X....X...X.X.X.X.X.X.X.X.',
        ta: '    X     X X       X   X X X       X     X X       X   X X X   ',
        ag: 'o ao ao a       o ao ao a       o ao ao a       o ao ao a       ',
        sh: '................................................................',
        mnemonics: {
          ls: "Drum, drum and bass, bass Up in your face, face",
          ms: "Dance, yeah I love it, dance Dance, yeah I love it, dance Dance, yeah I love it, dance Dance, yeah I love it, dance",
          re: "This M-C can rock the mic, Mic drop This M-C can rock the mic, Mic drop",
          sn: ". . . . Drum . . and . . . . bass . . . . . . . Drum . . and . . . . stop " +
              ". . . . Drum . . and . . . . bass . . . This . goes . out . to . all . the . D . Js .",
          ta: "The D-J plays bang-in' tunes The D-J plays bang-in' tunes",
          ag: "Drum and bass is so cool Drum and bass is so cool Drum and bass is so cool Drum and bass is so cool"
        }
      }
    }
  }
];
