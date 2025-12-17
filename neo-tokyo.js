// 1. Set the Tempo
// We use a half-time feel. 140 BPM is fast (Cyberpunk), 
// but we feel it at 70 BPM (Lofi).
setcpm(140/4)

// 2. The Anime Chords (The Soul)
// We use 'gm_epiano1' for that classic anime intro sound.
// We play 4 notes at once [0,2,4,6] (a 7th chord) to make it lush.
$: n("<[0,2,4,6] [-2,0,2,4] [-4,-2,0,2] [-3,-1,1,3]>")
  .scale("A:minor")
  .sound("gm_epiano1").chop(4)
  .lpf(1500)      // Low Pass Filter: cuts high frequencies to make it "muffled" (Lofi)
  .room(2)        // Big reverb for that "dream sequence" vibe
  .gain(0.8)

// 3. The Cyber Drums (The Grit)
// We use 'crush' to reduce the audio quality (Bitcrushing) for that hacking/glitch feel.
// The rhythm is a "Breakbeat" pattern (kick... snare-kick-snare).
$: s("bd [~ sd] [~ bd] [sd ~]")
  .bank("RolandTR909") // 909 kit is classic techno/house
  .crush(6)            // <--- THE CYBERPUNK SAUCE (Bitcrusher)
  .shape(0.5)          // Adds distortion
  .gain(0.9)

// 4. The Hi-Hats (The Speed)
// Fast, ticking hats make it feel urgent and futuristic.
$: s("hh*8")
  .bank("RolandTR909")
  .mask("<1 1 0 1>")   // 'mask' silences parts of the pattern rhythmically (glitching)
  .pan(sine.range(0,1).slow(2)) // Auto-panning left to right

// 5. The Reese Bass (The Heavy)
// A deep, growling Sawtooth wave.
$: n("<0 -2 -4 -3>")
  .scale("A:minor")
  .sound("sawtooth")
  .lpf(sine.range(100, 800).slow(4)) // The filter moves up and down (Wobble bass)
  .cut(1) // Ensures bass notes don't overlap and get muddy

// 6. The Telephone Vocal (FIXED)
$: s("numbers:1 numbers:2 numbers:3 numbers:4")
  .vowel("<a o e i>") // Making the robot "speak"
  .distort(0.5)       // Add some static