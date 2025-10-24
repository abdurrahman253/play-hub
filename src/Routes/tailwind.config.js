/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify all files that should be scanned for Tailwind classes
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      // --- Custom Animations (Class Names) ---
      animation: {
        // Longer duration spin
        'spin-slow': 'spin 3s linear infinite',
        // Counter-clockwise spin
        'spin-reverse': 'spin-reverse 2s linear infinite',
        // Slower, smoother pulse for background effects
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // Standard pulse for smaller elements
        'pulse-light': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // Slower ping for background effects
        'ping-slow': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
        // Simple fade-in effect
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      
      // --- Custom Keyframes (The actual animation steps) ---
      keyframes: {
        'spin-reverse': {
          // Rotates 360 degrees in the negative direction (counter-clockwise)
          to: { transform: 'rotate(-360deg)' },
        },
        fadeIn: {
          // Starts invisible
          '0%': { opacity: '0' },
          // Ends fully visible
          '100%': { opacity: '1' },
        }
      }
    },
  },
  
  plugins: [],
}

