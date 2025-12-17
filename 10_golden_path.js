// 10_GOLDEN_PATH.SYS
// SYSTEM: UX_OPTIMIZATION_COMPLETE
// VIBE: STRATOSPHERE / HYPERDRIVE / FINAL
// IG: @SANTHU.OFFSHORE

setcpm(120/4)

stack(
  // 1. THE THRUST (Drums + Fill)
  stack(
    s("bd sd bd sd").bank("LinnDrum").shape(0.7).gain(1.1),
    s("~ ~ ~ [ht mt lt bd]").bank("LinnDrum").mask("<0 0 0 1>").room(4).gain(1.3)
  ),

  // 2. THE ENGINE (Rolling Bass)
  note("<f2 g2 a2 c3>").struct("x*8")
    .s("sawtooth")
    .lpf(400)
    .decay(0.1).sustain(0.4)
    .gain(1.2),

  // 3. THE HORIZON (Anthem Chords)
  note("<[f3 a3 c4 e4] [g3 b3 d4] [a3 c4 e4] [c4 e4 g4]>")
    .s("sawtooth")
    .detune(0.05)
    .lpf(2000)
    .gain(sine.range(0.6, 0.9).fast(4)) // Sidechain Pump
    .attack(0.1).release(1),

  // 4. THE STARS (Sparkles)
  note("<[c5 e5 g5 c6] [d5 g5 b5 d6] [e5 a5 c6 e6] [g5 c6 e6 g6]>")
    .s("square")
    .fast(4)
    .delay(0.5).decay(0.5)
    .gain(0.5),

  // 5. THE CRASH
  s("crash").bank("RolandTR909").mask("<1 0 0 0>").room(5).gain(0.7),

  // 6. THE HERO LEAD
  note("~ [c6 g5] ~ [a5 c6] [e6 ~] [d6 c6] [b5 g5] a5")
    .s("sawtooth")
    .legato(1.2)
    .vibrato(2)
    .room(4).gain(0.9),

  // 7. THE HYPERDRIVE (The Stratosphere) <--- NEW
  // No noise. Pure Harmonic Speed.
  // We use a Phaser to create the "Jet Engine" musical whoosh.
  note("c6(3,8) g6(3,8)") // Fast, driving math rhythm
    .s("square")
    .fast(4)        // Speed
    .phaser(4)      // <--- THE MAGIC: Makes it sound like it's taking off
    .lpf(sine.range(1000, 8000).slow(8)) // Slowly opens up the filter
    .pan(sine.fast(8)) // Spins around your head
    .gain(2.5)
)