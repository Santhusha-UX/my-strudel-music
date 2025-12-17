// 1. Heavy Slog Tempo
// Slow enough to feel heavy, fast enough to nod to.
setcpm(135/4)

// 2. The "Gut Wrenching" Bass
// We use a sawtooth wave, but we use .shape() to distort it into a square wave.
// We play very low notes (-2 octaves).
$: n("<0 -1>")
  .scale("A:phrygian") // Phrygian mode = Dark and exotic
  .s("sawtooth")
  .cut(1)          // Stops the bass notes from muddying each other
  .lpf(400)        // Keeps it deep. No high frequencies allowed
  .lpq(2)          // Lower resonance so it doesn't "whistle"
  .shape(0.4)     // Less distortion, just enough to be heavy
  .gain(0.7)      // Lower volume so it sits under the drums
  .room(0)        // Bass shouldn't have reverb (makes it muddy)

// 3. The "Panic" Arpeggio
// Fast, metallic blips that create anxiety.
$: n("0 [0 4] ~ [7 1]")
  .scale("A:phrygian")
  .s("square")
  .fast(2)         // Double speed
  .clip(0.5)       // Hard clipping for a metallic sound
  .delay(0.3).decay(0.1) // Short decay makes it percussive
  .pan(rand)       // Randomly jumps left and right in your ears

// 4. The Industrial Drums
// No soft jazz kits here. We want mechanical noise.
$: s("bd [~ sd] bd [sd <~ bd>]")
  .ply(4)
  .bank("LinnDrum") // Classic 80s industrial drum sound
  .shape(0.6)       // Distorts the drums
  .room(0.5)        // Adds a metallic room reverb
  
// 5. The "Siren" Drone
// A high pitched, uncomfortable dissonance in the background.
$: note("a5, bb5")  // Playing A and Bb together creates a "clash"
  .s("gm_synth_strings_2")
  .vowel("o")       // Makes it sound like a hollow ghost
  .gain(0.6)
  .slow(4)          // Plays very slowly over the top