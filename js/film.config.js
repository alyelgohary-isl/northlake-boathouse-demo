/* Northlake — home film. Four Kling clips, 61 frames each at 12 fps, square.
   approach: from the water to the dock (S1 → S2)
   slip:     cutaway into the boat slip (S2 → S3), played forward, held, then reversed on the timeline
   rise:     pull back and crane up to the aerial (S2 → S4)
   dusk:     locked aerial, afternoon → dusk, windows and lanterns come on (S4 → open)
   Units are relative (~100vh each on desktop, ~70vh on mobile); css #scroll-container = 695vh / 490vh. */
window.FILM = {
  sources: {
    approach: { dir: "frames/approach", prefix: "ap_", count: 61 },
    slip:     { dir: "frames/slip",     prefix: "sl_", count: 61 },
    rise:     { dir: "frames/rise",     prefix: "ri_", count: 61 },
    dusk:     { dir: "frames/dusk",     prefix: "du_", count: 61 },
  },
  timeline: [
    { id: "hero",   units: 0.9,  src: "approach", f0: 0,  f1: 0  },   // hold on the first frame under the hero copy
    { id: "clip1",  units: 1.0,  src: "approach", f0: 0,  f1: 60 },   // 1. seen first from the water
    { id: "hold1",  units: 0.35, src: "approach", f0: 60, f1: 60 },   // 2. cedar that belongs on the shore
    { id: "cufwd",  units: 0.9,  src: "slip",     f0: 0,  f1: 60 },   // cutaway: into the slip
    { id: "cuhold", units: 0.5,  src: "slip",     f0: 60, f1: 60 },   //    hold inside
    { id: "curev",  units: 0.6,  src: "slip",     f0: 60, f1: 0  },   //    back out (same frames, reversed)
    { id: "hold2",  units: 0.1,  src: "approach", f0: 60, f1: 60 },
    { id: "clip3",  units: 1.0,  src: "rise",     f0: 0,  f1: 60 },   // 3. dock, shore and boathouse, one piece
    { id: "hold3",  units: 0.2,  src: "rise",     f0: 60, f1: 60 },
    { id: "clip4",  units: 1.0,  src: "dusk",     f0: 0,  f1: 60 },   // 4. dusk: stats over the darkened aerial
    { id: "end",    units: 0.4,  src: "dusk",     f0: 60, f1: 60 },
  ],
  overlay: { enter: "clip4:0.22", leave: "end:0.8" },   // dark overlay behind the stats section
  firstChunk: 40,
};
