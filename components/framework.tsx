import FrameworkCard, { IFrameworkCard } from "./framework-card";
import AngularIcon from "../assets/angular.svg";
import BrunchIcon from "../assets/brunch.svg";
import DocusarusIcon from "../assets/docusaurus.svg";
import GatsbyIcon from "../assets/gatsby.svg";
import HugoIcon from "../assets/hugo.svg";
import IonicIcon from "../assets/ionic.svg";
import NextIcon from "../assets/nextjs.svg";
import NuxtIcon from "../assets/nuxtjs.svg";
import PreactIcon from "../assets/preact.svg";
import ReactIcon from "../assets/react.svg";
import SanityIcon from "../assets/sanity.svg";
import StencilIcon from "../assets/stencil.svg";
import SvelteIcon from "../assets/svelte.svg";
import VanillaIcon from "../assets/vanillajs.svg";
import VueIcon from "../assets/vue.svg";
import ViteIcon from "../assets/vite.svg";
import styles from "../styles/framework.module.css";

const FRAMEWORK_LIST = [
  {
    path: "/framework-guide/deploy-angular",
    logo: AngularIcon,
    alt: "angular",
    title: "Deploy Angular App",
  },
  {
    path: "/framework-guide/deploy-brunch",
    logo: BrunchIcon,
    alt: "brunch",
    title: "Deploy Brunch App",
  },
  {
    path: "/framework-guide/deploy-docusarus",
    logo: DocusarusIcon,
    alt: "docusarus",
    title: "Deploy Docusarus App",
  },
  {
    path: "/framework-guide/deploy-gatsby",
    logo: GatsbyIcon,
    alt: "gatsby",
    title: "Deploy Gatsby App",
  },
  {
    path: "/framework-guide/deploy-hugo",
    logo: HugoIcon,
    alt: "hugo",
    title: "Deploy Hugo App",
  },
  {
    path: "/framework-guide/deploy-ireact",
    logo: IonicIcon,
    alt: "ireact",
    title: "Deploy Ionic React App",
  },
  {
    path: "/framework-guide/deploy-next",
    logo: NextIcon,
    alt: "nextjs",
    title: "Deploy Next.js App",
  },
  {
    path: "/framework-guide/deploy-nuxt",
    logo: NuxtIcon,
    alt: "nuxtjs",
    title: "Deploy Nuxt.js App",
  },
  {
    path: "/framework-guide/deploy-preact",
    logo: PreactIcon,
    alt: "preact",
    title: "Deploy Preact App",
  },
  {
    path: "/framework-guide/deploy-react",
    logo: ReactIcon,
    alt: "react",
    title: "Deploy React App",
  },
  {
    path: "/framework-guide/deploy-sanity",
    logo: SanityIcon,
    alt: "sanity",
    title: "Deploy Sanity App",
  },
  {
    path: "/framework-guide/deploy-stencil",
    logo: StencilIcon,
    alt: "stencil",
    title: "Deploy Stencil App",
  },
  {
    path: "/framework-guide/deploy-svelte",
    logo: SvelteIcon,
    alt: "svelte",
    title: "Deploy Svelte App",
  },
  {
    path: "/framework-guide/deploy-vanilla",
    logo: VanillaIcon,
    alt: "vanillajs",
    title: "Deploy Vanilla App",
  },
  {
    path: "/framework-guide/deploy-vue",
    logo: VueIcon,
    alt: "vue",
    title: "Deploy Vue App",
  },
  {
    path: "/framework-guide/deploy-iangular",
    logo: IonicIcon,
    alt: "iangular",
    title: "Deploy Ionic Angular App",
  },
  {
    path: "/framework-guide/deploy-vite",
    logo: ViteIcon,
    alt: "vite",
    title: "Deploy Vite App",
  },
];

const Framework = () => {
  return (
    <main>
      <section className={styles.section}>
        {FRAMEWORK_LIST.map((item: IFrameworkCard, i) => (
          <FrameworkCard
            key={i}
            path={item.path}
            logo={item.logo}
            alt={item.alt}
            title={item.title}
          />
        ))}
      </section>
    </main>
  );
};

export default Framework;
