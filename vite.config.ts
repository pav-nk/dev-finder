import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // Set it to `true` to export React component as default.
      // Notice that it will override the default behavior of Vite.
      exportAsDefault: true,
      
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        icon: true, // if you want to control size with font-size
        // ...other svgr options
      },
    }),
  ],
})
