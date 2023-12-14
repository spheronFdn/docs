import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import Status from "./components/status";
import { SpheronLogo } from "./assets/spheron";
import { GithubLogo } from "./assets/github";
import { CommunityLogo } from "./assets/community";
import Spheron from "./assets/spheron.svg";
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
    text: (
      <section
        className="nx-flex nx-flex-wrap nx-justify-between nx-items-center"
        style={{ width: "100%" }}
      >
        <Status />
        <div
          className="nx-flex nx-items-center"
          style={{ marginBottom: "4px" }}
        >
          MIT {new Date().getFullYear()} ©{" "}
          <span className="nx-mx-2">
            <Image
              src={Spheron}
              alt="Logo"
              width={20}
              height={20}
              className={styles.logo}
            />
          </span>
          <a href="https://nextra.site" target="_blank">
            Spheron
          </a>
        </div>
      </section>
    ),
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
