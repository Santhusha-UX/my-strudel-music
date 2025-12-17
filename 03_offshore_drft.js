// 03_OFFSHORE_DRIFT.WAV
// SYSTEM: DEEP_DUB_PROTOCOL_FINAL
// VIBE: UNDERWATER / DUB TECHNO
// IG: @SANTHU.OFFSHORE

setcpm(118/4)

stack(
  // 1. KICK (The Pulse)
  s("bd*4").bank("RolandTR909")
    .lpf(800).shape(0.6).gain(1.4),

  // 2. DUB CHORDS (The Atmosphere)
  note("c3 min7").struct("~ x ~ x")
    .s("sawtooth")
    .lpf(sine.range(800, 3500).slow(16)) // Filter sweep
    .decay(0.15).sustain(0)
    .delay(0.75).decay(0.8) // Infinite Echo
    .jux(rev)               // <--- NEW: Spreads sound wide in stereo
    .room(3).gain(0.7),

  // 3. HATS (The Spray)
  s("hh*8").bank("RolandTR909")
    .hpf(1500)
    .velocity(sine.range(0.2, 0.8).slow(4))
    .gain(0.8),

  // 4. SUB BASS (The Floor)
  note("c2").s("triangle")
    .lpf(150).shape(0.3).gain(1.0),

  // 5. SONAR PING (New Layer)
  // A lone sine wave that pings once every 4 bars
  note("c6").s("sine")
    .mask("<0 0 0 1>") 
    .delay(0.6).room(6).gain(0.5),

  // 6. HYDROPHONE STATIC (Texture)
  // High-pass filtered noise to glue the mix together
  s("hh*16").bank("RolandTR808")
    .hpf(7000).decay(0.05)
    .gain(0.15)
)