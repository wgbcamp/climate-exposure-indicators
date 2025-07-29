import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
    plugins: [
        tailwindcss(),
    ],
    base: '/climate-exposure-indicators'
}));