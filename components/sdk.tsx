import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const SDK_LIST = [
  {
    path: "/sdk/storage",
    emoji: "⛓️",
    title: "Storage SDK",
    body: "For Node.js based environments",
  },
  {
    path: "/sdk/browser",
    emoji: "🌐",
    title: "Browser SDK",
    body: "For Browser based environments",
  },
];

const SDK = () => {
  return (
    <main>
      <section className={styles.section}>
        {SDK_LIST.map((item: IQuickStartCard, index) => (
          <QuickStartCard
            key={index}
            path={item.path}
            emoji={item.emoji}
            title={item.title}
            body={item.body}
          />
        ))}
      </section>
    </main>
  );
};

export default SDK;
