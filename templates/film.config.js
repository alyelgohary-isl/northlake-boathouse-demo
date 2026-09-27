/* Film configuration for the home page. Copy to js/film.config.js and edit.
   Frame files: <dir>/<prefix>0001.webp … (12 fps, square, from tools/frames.sh).
   Timeline units are relative: a 5 s clip ≈ 1.0, a hold ≈ 0.1–0.5, the hero ≈ 0.9.
   Text sections in index.html point at segment ids: data-seg="clip1:0.15,clip1:0.95". */
window.FILM = {
  sources: {
    film:     { dir: "frames",          prefix: "frame_", count: 246 },  // the main sequence
    // cutaway:  { dir: "frames/cutaway", prefix: "cu_",    count: 61 },
    // glow:     { dir: "frames/glow",    prefix: "gl_",    count: 61 },
  },
  timeline: [
    { id: "hero",  units: 0.9,  src: "film", f0: 0,   f1: 0   },   // hold on the first frame under the hero copy
    { id: "clip1", units: 1.0,  src: "film", f0: 0,   f1: 60  },
    { id: "hold1", units: 0.15, src: "film", f0: 60,  f1: 60  },
    { id: "clip2", units: 1.0,  src: "film", f0: 61,  f1: 121 },
    // cutaway pattern: leave the film at a frame, play the cutaway forward, hold, play it back, resume
    // { id: "cufwd",  units: 0.9, src: "cutaway", f0: 0,  f1: 60 },
    // { id: "cuhold", units: 0.5, src: "cutaway", f0: 60, f1: 60 },
    // { id: "curev",  units: 0.6, src: "cutaway", f0: 60, f1: 0  },
    { id: "clip3", units: 1.2,  src: "film", f0: 122, f1: 245 },
    { id: "end",   units: 0.3,  src: "film", f0: 245, f1: 245 },
  ],
  // overlay: { enter: "clip3:0.12", leave: "end:0.3" },   // dark overlay behind the stats section
  // marquee: { enter: "hold1:0.4",  leave: "clip2:0.9" },  // oversized sliding text
  firstChunk: 40,   // frames that must be loaded before the page shows; the rest stream in scroll order
};
