// 08_SHIBUYA_RAIN.MP3
// SYSTEM: LOFI_STUDY_DRIVER
// VIBE: 85 BPM / FINAL MASTER / TOKYO NIGHT
// IG: @SANTHU.OFFSHORE

setcpm(85/4)

stack(
  // 1. THE FOUNDATION (Boom Bap)
  // Kick on 1, Snare on 2.
  // Added "Ghost Notes" (quiet hits) for that rolling feel.
  s("bd ~ sd [~ bd] [~ bd] ~ sd ~")
    .bank("LinnDrum")
    .lpf(1000).shape(0.4)
    .gain(1.1),

  // 2. THE SWING (Hats)
  // FIXED: Back to *8 for the flow.
  // KEY: 'velocity' changes every hit. It sounds like a human hand.
  s("hh*8")
    .bank("LinnDrum")
    .nudge(0.05)    // The "Dilla" delay
    .velocity(sine.range(0.3, 0.8).fast(4)) // Human dynamics
    .gain(0.7),

  // 3. THE SAMPLED SOUL (Keys)
  // C Minor 9 -> F Minor 9
  // ADDED: 'vibrato(0.5)' = The "Warped Vinyl" pitch instability.
  // ADDED: Moving Filter = The sound gets duller and brighter slowly.
  note("<[c3,eb3,g3,bb3,d4] [f3,ab3,c4,eb4,g4]>")
    .s("gm_electric_piano_1")
    .sustain(3)
    .vibrato(0.5)   // <--- THE LOFI MAGIC (Warp)
    .lpf(sine.range(800, 2000).slow(8)) // Breathing filter
    .room(3)
    .gain(0.9),

  // 4. THE WARMTH (Bass)
  // Sub bass gliding underneath.
  note("<c2 f1>")
    .s("sine")
    .shape(0.4)
    .lpf(200)       // only the lows
    .gain(1.3),

  // 5. THE NOCTURNAL MELODY (Vibraphone)
  // A jazz lick that resolves on the beat.
  // "Ta... Ta-da... Ta"
  note("~ ~ g4 [c5 bb4] . g4 f4 ~")
    .s("gm_vibraphone")
    .delay(0.4).decay(0.5) // Smoky echo
    .room(5)
    .gain(0.85),

  // 6. THE ATMOSPHERE (Vinyl Crackle)
  // Using a glitch sound pitched up to sound like dust.
  s("glitch*8")
    .n(run(8))
    .hpf(8000)      // Only high frequencies (Hiss)
    .gain(0.15)     // Background noise
)