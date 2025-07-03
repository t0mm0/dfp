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
  [key: string]: any; // Allow indexing with string keys
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
  },
  {
    name: "stolen",
    displayName: "Stolen",
    categories: ["common", "tricky"],
    speed: 200,
    patterns: {
      "Tune": {
        loop: true,
        ls: "XXXXXXXXX",
        ms: "  X   X   XX XX",
        hs: "@ms",
        re: "..X...X...X..XX.",
        sn: "..X...X...X...X.",
        ta: "X   X   X  XX X",
        ag: "          oa ao ",
        sh: "@sn",
        mnemonics: {
          ls: "This beat? We've been pla-ying it for years",
          ms: "Hey wait, Where's this one from?",
          re: ". . Who . . . said . . . it's . . half-inched? .",
          ta: "Sto-len? That's ba-na-nas",
          ag: "Where's this one from?"
        }
      },
      "Alt Agogo": {
        loop: true,
        ag: "o ao  a  oaoo a ",
        sh: 'X . . . X . . . ',
        mnemonics: { ag: "This tune we play, I think it's sto-len" }
      },
      "Break 1": {
        time: 3,
        ls: "                     X                       X                       X                       X     X        X        X  ",
        ms: "                     X                       X                       X                       X     X        X        X  ",
        hs: "                     X                       X                       X                       X     X        X        X  ",
        re: "XXXXXXXXXXXXX X  X      XXXXXXXXXXXXX X  X      XXXXXXXXXXXXX X  X      XXXXXXXXXXXXX X  X     fX       fX       fX     ",
        sn: "                     X                       X                       X                       X     X        X        X  ",
        ta: "                     X                       X                       X                       X     X        X        X  ",
        ag: "                     X                       X                       X                       X     X        X        X  ",
        sh: "                     X                       X                       X                       X     X        X        X  ",
        mnemonics: {
          ls: "Nope Nope Nope Nope Yep Yep Yep",
          re: "A-ny-one got a-ny tips a-bout fin-ding that sto-len beat? A-ny-one got a-ny tips a-bout fin-ding that sto-len beat? A-ny-one got a-ny tips a-bout fin-ding that sto-len beat? A-ny-one got a-ny tips a-bout fin-ding that sto-len beat? Y' sure? Y' sure? Y' sure? "
        }
      },
      "2/4 Break": {
        ls: "X   X   X X X X ",
        ms: "X   X   X X X X ",
        hs: "X   X   X X X X ",
        re: "X   X   X X X X ",
        sn: "X   X   X X X X ",
        ta: "X   X   X X X X ",
        ag: "X   X   X X X X ",
        sh: "X   X   X X X X "
      },
      "Break 3": {
        ls: "X  X XX  X XX X X  X XX  X XX X X  X XX  X XX X X          XX X ",
        ms: "X  X XX  X XX X X  X XX  X XX X X  X XX  X XX X X          XX X ",
        hs: "X  X XX  X XX X X  X XX  X XX X X  X XX  X XX X X          XX X ",
        re: "X  X XX  X XX X X  X XX  X XX X X  X XX  X XX X X          XX X ",
        sn: "X..X.XX..X.XX.X.X..X.XX..X.XX.X.X..X.XX..X.XX.X.X          XX X ",
        ta: "X  X XX  X XX X X  X XX  X XX X X  X XX  X XX X X          XX X ",
        ag: "X  X XX  X XX X X  X XX  X XX X X  X XX  X XX X X          XX X ",
        sh: "X  X XX  X XX X X  X XX  X XX X X  X XX  X XX X X          XX X ",
        mnemonics: {
          ls: "Sto-len, you say? That's ba-na-nas Sto-len, you say? That's ba-na-nas Sto-len, you say? That's ba-na-nas That's ba-na-nas",
          sn: "Sto . . len . you say? . . That's . ba na . nas . Sto . . len . you say? . . That's . ba na . nas . Sto . . len . you say? . . That's . ba na . nas . That's ba-na-nas"
        }
      },
      "Whistle Break": {
        loop: true,
        ls: "X  XX  XXX XX   ",
        ms: "X  XX  XXX XX   ",
        hs: "X  XX  XXX XX   ",
        re: "  X   X   X   X ",
        sn: "  X   X   X   X ",
        ta: "  X   X   X   X ",
        ag: "  X   X   X   X ",
        sh: "X  XX  XXX XX   ",
        mnemonics: {
          ls: "Time to nick the Sheff whi-stle break",
          re: "Yep Yep Yep Yep"
        }
      }
    }
  },
  {
    name: "wolf",
    displayName: "Wolf",
    categories: ["new", "tricky"],
    speed: 120,
    patterns: {
      "Tune": {
        loop: true,
        ls: 'X XXX   XXXXX   X XXX   X   X   ',
        ms: '      XX      XX      XXXXXXXXXX',
        hs: '@ms',
        re: 'X  XX r X X X rrX  XX r  XXXX rr',
        sn: 'f.X...X...X...X.f.X...X...X...X.',
        ta: 'X X     X X     XX XXX XX       ',
        ag: 'o ooo a   a   a o ooo a   a   a',
        sh: 'X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.',
        mnemonics: {
          ls: "Here comes the wolf, ve-ry sca-ry wolf Here comes the Big Bad Wolf",
          ms: "And huff And puff Wolf will blow your li-ttle pi-ggy house down",
          re: "No-one told the Big Bad Wolf Li-ttle Red Ri-ding Hood was like as hard as nails",
          sn: "Grr . the . . . Big . . . Bad . . . Wolf . Grr . the . . . Big . . . Bad . . . Wolf .",
          ta: "Big Bad Wolf is hu-ffing and pu-ffing real tough",
          ag: "Pi-ggies aren't scared of the wolf Pi-ggies aren't scared of the wolf"
        }
      },
      "Alt Repi": {
        loop: true,
        re: 'X  XX  XX X X   XXXXX  XX X X   X  XX  XX X X   XXXXX  XX       ',
        sh: 'X   .   .   .   X   .   .   .   X   .   .   .   X   .   .   .   ',
        mnemonics: { re: "Here he comes, the Big Bad Wolf Ve-ry sca-ry guy, the Big Bad Wolf " + "Here he comes, the Big Bad Wolf Ve-ry sca-ry guy, the wolf" }
      },
      "Alt Tam": {
        loop: true,
        ta: 'X X     X X     XX XXX XX       X XX XX X X X X XX XXX XX       ',
        sh: 'X   .   .   .   X   .   .   .   X   .   .   .   X   .   .   .   ',
        mnemonics: { ta: "Big Bad Wolf is hu-ffing and pu-ffing real tough " + "Dressed up like your nan, come in close so Wol-fie can go-bble you up" }
      },
      "Break 1": {
        upbeat: 1,
        ls: 'XX X X X X       ',
        ms: 'XX X X X X       ',
        hs: 'XX X X X X       ',
        re: 'XX X X X X       ',
        sn: 'XX X X X X       ',
        ta: 'XX X X X X       ',
        ag: 'XX X X X X       ',
        sh: 'XX X X X X       ',
        ot: '           E D   ',
        mnemonics: {
          ls: "No we're not scared at all",
          ot: "Ah Woo!"
        }
      },
      "Break 2": {
        loop: true,
        ls: 'XXXXXXXXX  X XXXX     XXX       ',
        ms: 'XXXXXXXXX  X XXXX     XXX       ',
        hs: 'XXXXXXXXX  X XXXX     XXX       ',
        sh: 'X   .   .   .   X   .   .   .   ',
        mnemonics: { 
          ls: "Li-ttle pi-ggies got rid of the wolf, " + "So did Li-ttle Red With an axe"
        }
      },
      "Tune Break 2": {
        loop: true,
        ls: 'XXXXXXXXX  X XXXX     XXX       ',
        ms: 'XXXXXXXXX  X XXXX     XXX       ',
        hs: 'XXXXXXXXX  X XXXX     XXX       ',
        re: 'X XX  r X X X rrX XX  r  X XX rr',
        sn: 'f.X...X...X...X.f.X...X...X...X.',
        ta: 'X X     X X     XX XXX XX       ',
        ag: 'o ooo a   a   a o ooo a   a   a',
        sh: 'X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.'
      }
    }
  }
];
