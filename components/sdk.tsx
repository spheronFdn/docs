import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const SDK_LIST = [
   {
    path: "/sdk/compute",
    emoji: "📼",
    title: "Compute SDK",
    body: "Designed to streamline work with your compute organizations",
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
