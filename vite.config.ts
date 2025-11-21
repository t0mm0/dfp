import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    ...(process.env.NODE_ENV == "production"
      ? [
          viteStaticCopy({
            targets: [
              {
                src: path.resolve(import.meta.dirname, 'public/audio/*.mp3'),
                dest: 'audio',
              },
              {
                src: path.resolve(import.meta.dirname, 'public/og-image.svg'),
                dest: '',
              },
              // bodge routing as github can't handle wildcards
              {
                src: path.resolve(import.meta.dirname, 'dist/public/index.html'),
                dest: '',
                rename: 'about.html',
              },
              {
                src: path.resolve(import.meta.dirname, 'dist/public/index.html'),
                dest: '',
                rename: 'instagram.html',
              },
              {
                src: path.resolve(import.meta.dirname, 'dist/public/index.html'),
                dest: '',
                rename: 'theory.html',
              },
              {
                src: path.resolve(import.meta.dirname, 'dist/public/index.html'),
                dest: '',
                rename: 'instruments.html',
              },
              {
                src: path.resolve(import.meta.dirname, 'dist/public/index.html'),
                dest: '',
                rename: 'protest-beats.html',
              },
              {
                src: path.resolve(import.meta.dirname, 'dist/public/index.html'),
                dest: '',
                rename: 'tunes.html',
              },
              {
                src: path.resolve(import.meta.dirname, 'dist/public/index.html'),
                dest: '',
                rename: 'experiment.html',
              },
              {
                src: path.resolve(import.meta.dirname, 'dist/public/index.html'),
                dest: '',
                rename: 'shop.html',
              },
            ],
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
