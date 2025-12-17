// 04_RX-78_LAUNCH.EXE
// SYSTEM: MOBILE_SUIT_OS
// VIBE: 174 BPM / ANIME BATTLE / FINAL
// IG: @SANTHU.OFFSHORE

setcpm(170/4)

stack(
  // 1. ENGINE CORE (Bass Pulse)
  note("c2").struct("x x x x")
    .s("sawtooth")
    .lpf(2500)
    .decay(0.1).sustain(0.4)
    .clip(1).gain(1.2),

  // 2. HYDRAULICS (Heavy Drums)
  s("bd sd bd sd").bank("RolandTR909")
    .distort(0.5).gain(1.1),

  // 3. MECHANICAL GEARS (Hats)
  s("hh*8").bank("LinnDrum").gain(0.9),

  // 4. VENT BLAST (Texture)
  s("~ cp ~ cp").bank("RolandTR808")
    .room(2).gain(0.7),

  // 5. "ZERO SYSTEM" ARPEGGIO (The Variance)
  // Falling Chords: C -> Bb -> Ab -> G
  note("<[c5 eb5 g5 c6] [bb4 d5 f5 bb5] [ab4 c5 eb5 ab5] [g4 b4 d5 g5]>")
    .s("square")
    .fast(4)
    .decay(0.2).sustain(0)
    .delay(0.4)
    .gain(0.7),

  // 6. THE "NEWTYPE" FLASH (FIXED)
  // Sharp "Ping-Ping" radar sound.
  // Uses Triangle wave to cut through the mix.
  // Plays only on the 4th bar: <0 0 0 1>
  note("c6").struct("[x x]")
    .s("triangle")
    .mask("<0 0 0 1>") 
    .decay(0.1).sustain(0)
    .room(4) // Big reverb tail
    .gain(0.9)
)