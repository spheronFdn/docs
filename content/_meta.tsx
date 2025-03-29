import { MetaRecord } from "nextra";
import { JavaScriptIcon } from "nextra/icons";

const META: MetaRecord = {
  index: {
    title: "Getting Started",
  },
  "-----": {
    type: "separator",
    title: "PROTOCOL DOCS",
  },
  "core-concepts": "Protocol Core Concepts",
  "user-guide": "User Guide",
  providers: "Provider Onboarding",
  fizz: "Fizz Node",

  "-------": {
    type: "separator",
  },
  // "sos-ai-bounty": {
  //   title: "Spheron AI Bounty",
  //   href: "https://github.com/spheronFdn/sos-ai-bounty",
  // },
  "protocol-sdk": (
    <span className="flex items-center gap-2">
      <JavaScriptIcon height="20" className="text-white flex items-center" />
      Protocol SDK
    </span>
  ),
  guides: "Console Guides",
  "awesome-spheron": {
    title: "Awesome Spheron",
    href: "https://github.com/spheronFdn/awesome-spheron",
  },
  "general-info": {
    title: "General Information",
    type: "page",
    theme: {
      toc: false,
    },
  },
  changelog: {
    title: "Changelog",
    href: "https://spheron.network/changelog",
    type: "page",
  },
  signup: {
    title: "Sign Up",
    type: "page",
    href: "https://app.spheron.network/#/signup",
  },
};

export default META;
