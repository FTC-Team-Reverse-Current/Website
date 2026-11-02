// @ts-check
import {defineConfig, fontProviders} from 'astro/config';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,

  fonts: [{
    provider: fontProviders.local(),
    name: "Jersey-10",
    cssVariable: "--font-jersey-10",
    options: {
      variants: [{
        src: ['./src/assets/fonts/jersey-10.woff2'],
        weight: 'normal',
        style: 'normal',
      }]
    }
  },
  {
    provider: fontProviders.local(),
    name: "Cal Sans",
    cssVariable: "--font-cal-sans",
    options: {
      variants: [{
        src: ['./src/assets/fonts/cal-sans.woff2'],
        weight: 'normal',
        style: 'normal',
      }]
    }
  },
  {
    provider: fontProviders.local(),
    name: "JetBrains Mono",
    cssVariable: "--font-jetbrains-mono",
    options: {
      variants: [{
        src: ['./src/assets/fonts/jetbrains-mono.woff2'],
        weight: 'normal',
        style: 'normal',
      }]
    }
  },
  {
    provider: fontProviders.local(),
    name: "Geist Pixel",
    cssVariable: "--font-geist-pixel",
    options: {
      variants: [{
        src: ['./src/assets/fonts/geist-pixel.woff2'],
        weight: 'normal',
        style: 'normal',
      }]
    }
  },
  {
    provider: fontProviders.local(),
    name: "Dela Gothic One",
    cssVariable: "--font-dela-gothic-one",
    options: {
      variants: [{
        src: ['./src/assets/fonts/dela-gothic-one.woff2'],
        weight: 'normal',
        style: 'normal',
      }]
    }
  }]
});
