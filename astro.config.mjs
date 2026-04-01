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
        {
          label: "コマンド",
          items: [
            { label: "全般コマンド", link: "/commands/general" },
            { label: "サーバー管理", link: "/commands/manage" },
            { label: "サーバー設定", link: "/commands/settings" },
          ],
        },
        {
          label: "便利な機能",
          items: [{ label: "コンテキストメニュー", link: "/contexts" }],
        },
      ],
    }),
  ],
});
