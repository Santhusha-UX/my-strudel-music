// 07_MANA_BURN.JS
// SYSTEM: 8-BIT_LOGIC_CORE
// VIBE: FINAL BOSS / COMPLETE / CHIPTUNE
// IG: @SANTHU.OFFSHORE

setcpm(160/4)

stack(
  // 1. THE BIT-CRUSHED ENGINE (Drums)
  s("bd sd [bd bd] sd")
    .bank("RolandTR909")
    .crush(4).shape(0.8).decay(0.1).gain(1.0),

  // 2. THE SIDE-SCROLLER BASS (Action)
  // Fixed syntax: using "." for sustain/rest makes the gallop cleaner.
  note("c2 - [c3 c3] - g2 - [c3 c3] -")
    .s("triangle")
    .clip(1).decay(0.15).sustain(0).gain(1.3),

  // 3. THE HERO'S SWORD (Melody)
  // Progression: C -> Eb -> F -> G (The Rising Battle)
  note("<[c5 c5 eb5 g5] [bb4 bb4 d5 f5] [ab4 c5 f5 ab5] [g4 b4 d5 g5]>")
    .s("square")
    .vibrato(2)
    .decay(0.1).sustain(0.4)
    .delay(0.25).decay(0.5) // Added delay for "Arena" feel
    .gain(0.8),

  // 4. THE "INSERT COIN" SFX
  note("b5 e6")
    .struct("~ ~ ~ [x x]")
    .s("sine").decay(0.1).gain(0.6),

  // 5. THE ARPEGGIO WALL (The Glue) <--- FIXED
  // NOW: It follows the chord progression!
  // It changes scale every bar to match the melody.
  // This creates that "Full Orchestral" NES sound.
  note("<[c4 eb4 g4 c5] [eb4 g4 bb4 eb5] [f4 ab4 c5 f5] [g4 b4 d5 g5]>")
    .s("sawtooth")
    .fast(16)       // The "Purr" speed
    .crush(6)
    .gain(0.5),

  // 6. THE 8-BIT EXPLOSION (The Impact) <--- NEW
  // A white noise crash on Beat 1.
  // Anchors the loop so it doesn't feel aimless.
  s("sd")
    .mask("<1 0 0 0>") // Only hits on the first beat of the 4-bar cycle
    .bank("RolandTR909")
    .crush(2)       // Destroyed to white noise
    .decay(0.5)     // Long tail (PSSSHHHH)
    .gain(0.8)
)