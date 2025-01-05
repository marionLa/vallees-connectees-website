import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
  integrations: [tailwind(),
    icon({
      iconDir: "src/icons",
      svgoOptions: {
        plugins: [
          "preset-default",
          {
            name: "convertColors",
            params: { currentColor: true },
          },
        ],
      },
    }),
  ],
});