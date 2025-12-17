// 09_HEURISTIC_FAIL.LOG
// SYSTEM: KERNEL_PANIC
// VIBE: 170 BPM / BRAINDANCE / MASTERED
// IG: @SANTHU.OFFSHORE

setcpm(170/4)

stack(
  // 1. THE GLITCH CORE (Drill 'n' Bass)
  // Polish: Added 'shape' to crunch the drums.
  // Polish: Snare rolls now pan smoothly L->R (sine pan).
  stack(
    s("bd [~ bd] bd ~").bank("RolandTR909").shape(0.8),
    s("~ [sd*8] ~ [sd*16]")
      .bank("RolandTR909")
      .speed(saw.range(1, 3).fast(4))
      .pan(sine.slow(4)) // Smooth pan sweep
      .shape(0.6)        // Saturation
      .gain(0.95)
  ).mask("<1 1 1 0>"),   // The silence break

  // 2. THE ACID (Euclidean Bass)
  // Polish: Resonance is now dynamic. It opens and closes.
  // This makes the synth feel "alive" and squelchy.
  note("c2(3,8) g2(3,8)")
    .s("sawtooth")
    .lpf(sine.range(200, 3000).fast(8))
    .resonance(sine.range(5, 30).slow(8)) // <--- MOVING RESONANCE
    .clip(1).gain(0.85),

  // 3. THE GHOST (Lead)
  // Polish: Added 'vibrato' and 'detune'.
  // Now sounds like a lonely, warbly tape recording.
  note("c5 ~ g4 ~ b4 ~")
    .s("sine")
    .vibrato(2)         // Tape wobble
    .detune(0.5)        // Slight pitch drift
    .slow(2)
    .room(5)            // Huge space
    .gain(0.75),

  // 4. DATA CORRUPTION (Texture)
  s("glitch(5,16)")
    .n(run(8)).crush(4).hpf(5000).gain(0.4),

  // 5. THE ANALOG WARMTH (Pad)
  // Polish: Added 'hpf(200)' to clean up the low end mud.
  // Now the bass has room to breathe.
  note("[c3,eb3,g3,bb3,d4]")
    .s("sawtooth")
    .detune(0.04)
    .lpf(600)
    .hpf(200)           // <--- MIX FIX: Cuts the bass frequencies out of the pad
    .attack(1).release(2)
    .room(3)
    .gain(0.8)
)