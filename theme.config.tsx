import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { SpheronLogo } from "./assets/spheron";
import { GithubLogo } from "./assets/github";
import { DiscordLogo } from "./assets/discord";
import styles from "./styles/global.module.css";

const config: DocsThemeConfig = {
  logo: <>{SpheronLogo}</>,
  logoLink: "https://spheron.network/",
  project: {
    link: "https://github.com/spheronFdn/docs",
    icon: <div className={styles.linkIcon}>{GithubLogo}</div>,
  },
  chat: {
    link: "https://discord.com/invite/ahxuCtm",
    icon: <div className={styles.linkIcon}>{DiscordLogo}</div>,
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
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
};

export default config;
