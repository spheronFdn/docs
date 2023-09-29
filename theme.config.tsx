import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { SpheronLogo } from "./assets/spheron";
import { GithubLogo } from "./assets/github";
import { CommunityLogo } from "./assets/community";
import styles from "./styles/global.module.css";

const config: DocsThemeConfig = {
  logo: <>{SpheronLogo}</>,
  project: {
    link: "https://github.com/spheronFdn/docs",
    icon: <div className={styles.linkIcon}>{GithubLogo}</div>,
  },
  chat: {
    link: "https://community.spheron.network/",
    icon: <div className={styles.linkIcon}>{CommunityLogo}</div>,
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
};

export default config;
