/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Blue architectural palette ──────────────────────
        obsidian:    "#001233",   // deepest navy (background)
        onyx:        "#001845",   // surface dark
        charcoal:    "#002855",   // surface mid
        twilight:    "#33415c",   // panel bg
        "blue-slate":"#5c677d",   // borders/muted bg
        muted:       "#7d8597",   // muted text
        "lav-grey":  "#979dac",   // secondary text
        alabaster:   "#e5e7ea",   // primary text (was warm white)
        cream:       "#d0d7e5",   // secondary text
        // Accent blues
        accent: {
          DEFAULT: "#0466c8",
          light:   "#4ba3fb",
          dim:     "rgba(4,102,200,0.22)",
        },
        sapphire:    "#0353a4",
        navy:        "#023e7d",
        // borders
        border:      "rgba(255,255,255,0.07)",
        "border-blue":"rgba(4,102,200,0.2)",
        "border-gold":"rgba(4,102,200,0.2)",  // alias
        champagne: {
          DEFAULT: "#0466c8",   // remapped to accent blue
          light:   "#4ba3fb",
          dim:     "rgba(4,102,200,0.22)",
        },
      },
      fontFamily: {
        sans:  ['SUSE', 'ui-monospace', 'Menlo', 'monospace'],
        mono:  ['SUSE', 'ui-monospace', 'Menlo', 'monospace'],
        suse:  ['SUSE', 'monospace'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
