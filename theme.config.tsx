import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { SpheronLogo } from "./assets/spheron";
import { GithubLogo } from "./assets/github";
import { DiscordLogo } from "./assets/discord";
import styles from "./styles/global.module.css";

const config: DocsThemeConfig = {
  logo: <>{SpheronLogo}</>,
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
  primaryHue: 200,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Spheron",
      description:
        "Power your dapp with Spheron's next-generation infrastructure",
    };
  },
  head: () => {
    const { frontMatter } = useConfig();

    return (
      <>
        <meta property="og:title" content={frontMatter.title || "Nextra"} />
        <meta
          property="og:description"
          content={frontMatter.description || "The next site builder"}
        />
      </>
    );
  },
};

export default config;
