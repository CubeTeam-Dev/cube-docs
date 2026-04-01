// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Cube Bot Docs",
      logo: {
        src: "./public/favicon.svg",
      },
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/BynQSCJTeg",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "はじめに",
          items: [{ label: "Cube Bot について", link: "/" }],
        },
      ],
    }),
  ],
});
