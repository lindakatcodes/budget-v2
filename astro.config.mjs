import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import clerk from "astro-clerk-auth";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    db(),
    clerk({
      afterSignInUrl: "/",
      afterSignUpUrl: "/",
    }),
  ],
  output: "server",
  adapter: netlify(),
});