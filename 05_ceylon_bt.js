// 05_CEYLON_GLITCH.BAT
// SYSTEM: COLOMBO_CYBER_GRID
// VIBE: AUTHENTIC PAPARE / BAILA / HYPE
// IG: @SANTHU.OFFSHORE

setcpm(138/4)

stack(
  // 1. THE "CHIKA-CHIKA" GALLOP (Foundation)
  // The hats must run constantly in triplets to get the speed.
  // [Kick+Hat] - Hat - Hat - [Snare+Hat] - Hat - Hat
  s("[bd,hh] hh hh [sd,hh] hh hh")
    .bank("RolandTR707") // Tight, dry digital drums
    .gain(1.1),

  // 2. THE COWBELL (The Pulse)
  // Hitting the off-beats hard.
  s("~ [~ cb] ~ [~ cb]")
    .bank("RolandTR808")
    .gain(1.0),

  // 3. THE PAPARE TRUMPET (The Anthem)
  // Using GM Trumpet with 'legato' for that slurred brass band feel.
  note("<[c5 c5 d5 e5] [d5 c5 b4 a4] [g4 g4 a4 b4] [c5 g4 e4 c4]>")
    .s("gm_trumpet")
    .legato(0.9)
    .vibrato(3)     // Human breath wobble
    .gain(0.8),

  // 4. THE BOUNCY BASS
  note("[c2 ~ ~] [g2 ~ ~] [c2 ~ ~] [g2 ~ ~]")
    .s("sawtooth")
    .lpf(600)
    .decay(0.15).sustain(0)
    .gain(1.2),

  // 5. THE HYPE WHISTLE (The "Pea" Trill)
  // FIX: heavy vibrato mimics the rattling pea inside the whistle.
  // Rhythm: Tweet, Tweet, Twee-Twee-Twee-Tweet (The Hype Pattern)
  note("c7").struct("[x   x  ] [x x x x]")
    .s("sine")
    .vibrato(20)    // <--- THIS IS THE SECRET SAUCE (The Rattle)
    .mask("<0 0 0 1>") // Plays the hype pattern every 4th bar
    .gain(0.7)
)