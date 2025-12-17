// 02_SEWER_DOOM.BAT
// SYSTEM: INDUSTRIAL_HORROR_CORE
// VIBE: PHRYGIAN / HEAVY / METALLIC
// IG: @SANTHU.OFFSHORE

setcpm(135/4)

// 1. The Sludge Bass (The Foundation)
// A square wave filtered down to sound like heavy machinery.
// We use 'legato' to make it slide and 'shape' for thick distortion.
$: n("<0 [0 1] 0 -1>")
  .scale("A:phrygian")
  .s("square")
  .lpf(400)       // Muffled, like it's underground
  .lpq(5)         // High resonance makes it growl
  .shape(0.6)     // Heavy industrial distortion
  .cut(1)         // Monophonic (no overlapping notes)
  .gain(0.8)

// 2. The Metallic Snare (The Impact)
// We layer a 909 snare with a clap to make it snap.
// The 'room' is maxed out to sound like a giant sewer pipe.
$: s("~ [sd cp] ~ sd")
  .bank("RolandTR909")
  .distort(0.4)
  .room(3)        // Massive reverb space
  .gain(0.9)

// 3. The Anxiety Arp (The Tension)
// High pitched, fast moving bleeps that pan around your head.
// We use 'jux' (juxtapose) to play a reversed version in the right ear.
$: n("0 4 7 12")
  .scale("A:phrygian")
  .s("triangle")
  .fast(4)        // Very fast speed
  .mask("<1 1 0 1>") // Glitches out occasionally
  .jux(rev)       // Stereo widening trick
  .delay(0.3).gain(0.5)

// 4. The Steam Hiss (The Atmosphere)
// White noise hats that sound like leaking pipes.
$: s("hh*8")
  .bank("RolandTR909")
  .hpf(5000)      // Only high frequencies (the hiss)
  .pan(sine.range(0,1).fast(2)) // Pans rapidly L/R
  .gain(0.7)

// 5. The Alarm Drone
// A slow, dissonant pad in the background.
$: n("bb4 a4")
  .s("gm_synth_strings_2")
  .slow(4)        // Changes very slowly
  .vowel("o")     // Hollow, ghostly texture
  .gain(0.6)