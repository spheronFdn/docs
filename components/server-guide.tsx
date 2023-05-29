import FrameworkCard, { IFrameworkCard } from "./framework-card";
import DjangoIcon from "../assets/django.svg";
import NextIcon from "../assets/nextjs.svg";
import styles from "../styles/framework.module.css";

const SERVER_LIST = [
  {
    path: "/server-guide/django",
    logo: DjangoIcon,
    alt: "django",
    title: "Deploy Django App",
  },
  {
    path: "/server-guide/nextjs",
    logo: NextIcon,
    alt: "nextjs",
    title: "Deploy Next App",
  },
];

const ServerGuide = () => {
  return (
    <main>
      <section className={styles.section}>
        {SERVER_LIST.map((item: IFrameworkCard, i) => (
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

export default ServerGuide;
