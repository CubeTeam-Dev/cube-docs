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
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
      },
      defaultLocale: "root",
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
          items: [
            { label: "Cube Bot について", link: "/" },
            { label: "導入チュートリアル", link: "/getting-started" },
          ],
        },
        {
          label: "コマンド",
          items: [
            { label: "Bot 情報", link: "/commands/general" },
            { label: "モデレーション", link: "/commands/moderation" },
            { label: "ロール管理", link: "/commands/role" },
            { label: "VC 移動", link: "/commands/move" },
            { label: "自動化機能", link: "/commands/automation" },
            { label: "サーバー設定", link: "/commands/settings" },
          ],
        },
        {
          label: "コンテキストメニュー",
          items: [{ label: "メッセージ操作", link: "/contexts" }],
        },
      ],
    }),
  ],
});
