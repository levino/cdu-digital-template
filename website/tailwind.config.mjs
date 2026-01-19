/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Offizielle CDU-Farben (Stand 2023)
        'cadenabbia': '#52b7c1',      // Cadenabbia-Türkis
        'rhoendorf': '#2d3c4b',       // Rhöndorf-Blau
        'unionsgold': '#ffa600',      // Union-Gold
        'unionsschwarz': '#1B191D',   // Union-Schwarz (aus CDU-Logo)
        // Abgestufte Varianten
        'cadenabbia-60': '#8ad0d7',   // Cadenabbia 60%
        'cadenabbia-30': '#c5e8eb',   // Cadenabbia 30%
        'rhoendorf-60': '#6b7a87',    // Rhöndorf 60%
        'rhoendorf-30': '#a5aeb7',    // Rhöndorf 30%
      },
      fontFamily: {
        // Offizielle CDU-Schriftarten laut CI-Manual 2023
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"IBM Plex Serif"', 'Georgia', 'serif'],
      },
      borderRadius: {
        // CDU CI: Keine abgerundeten Ecken
        'none': '0',
        DEFAULT: '0',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        cdu: {
          'primary': '#52b7c1',       // Cadenabbia-Türkis
          'secondary': '#2d3c4b',     // Rhöndorf-Blau
          'accent': '#ffa600',        // Union-Gold
          'neutral': '#2d3c4b',       // Rhöndorf-Blau
          'base-100': '#ffffff',
          'base-200': '#f8f9fa',
          'base-300': '#e9ecef',
          'info': '#52b7c1',
          'success': '#22c55e',
          'warning': '#ffa600',
          'error': '#dc2626',
          // Keine Border-Radius im CDU CI
          '--rounded-box': '0',
          '--rounded-btn': '0',
          '--rounded-badge': '0',
          // Tabs mit Primary-Farbe
          '--tab-border-color': '#52b7c1',
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
};
