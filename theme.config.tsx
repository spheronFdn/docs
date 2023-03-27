import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { DiscordLogo, GithubLogo, SpheronLogo } from "./assets";

const config: DocsThemeConfig = {
  logo: <>{SpheronLogo}</>,
  logoLink: "https://spheron.network/",
  project: {
    link: "https://github.com/spheronFdn/docs",
    icon: <>{GithubLogo}</>,
  },
  chat: {
    link: "https://discord.com/invite/ahxuCtm",
    icon: <>{DiscordLogo}</>,
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: null,
    component: null,
  },
  navigation: false,
  primaryHue: 220,
};

export default config;
