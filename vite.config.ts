import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://yhdleung.github.io/freecodecamp-project-random-quote-machine/",
  plugins: [react()],
})
