import FrameworkCard, { IFrameworkCard } from "./framework-card";
import styles from "../styles/framework.module.css";

const FRAMEWORK_LIST = [
  {
    path: "/framework-guide/deploy-angular",
    title: "Deploy Angular App",
  },
  {
    path: "/framework-guide/deploy-brunch",
    title: "Deploy Brunch App",
  },
  {
    path: "/framework-guide/deploy-docusarus",
    title: "Deploy Docusarus App",
  },
  {
    path: "/framework-guide/deploy-gatsby",
    title: "Deploy Gatsby App",
  },
  {
    path: "/framework-guide/deploy-hugo",
    title: "Deploy Hugo App",
  },
  {
    path: "/framework-guide/deploy-ireact",
    title: "Deploy Ionic React App",
  },
  {
    path: "/framework-guide/deploy-next",
    title: "Deploy Next.js App",
  },
  {
    path: "/framework-guide/deploy-nuxt",
    title: "Deploy Nuxt.js App",
  },
  {
    path: "/framework-guide/deploy-preact",
    title: "Deploy Preact App",
  },
  {
    path: "/framework-guide/deploy-react",
    title: "Deploy React App",
  },
  {
    path: "/framework-guide/deploy-sanity",
    title: "Deploy Sanity App",
  },
  {
    path: "/framework-guide/deploy-stencil",
    title: "Deploy Stencil App",
  },
  {
    path: "/framework-guide/deploy-svelte",
    title: "Deploy Svelte App",
  },
  {
    path: "/framework-guide/deploy-vanilla",
    title: "Deploy Vanilla App",
  },
  {
    path: "/framework-guide/deploy-vue",
    title: "Deploy Vue App",
  },
  {
    path: "/framework-guide/deploy-iangular",
    title: "Deploy Ionic Angular App",
  },
  {
    path: "/framework-guide/deploy-vite",
    title: "Deploy Vite App",
  },
];

const Framework = () => {
  return (
    <main>
      <section className={styles.section}>
        {FRAMEWORK_LIST.map((item: IFrameworkCard) => (
          <FrameworkCard path={item.path} title={item.title} />
        ))}
      </section>
    </main>
  );
};

export default Framework;
