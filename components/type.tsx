import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const TYPE_LIST = [
  {
    path: "/compute/type/spot",
    emoji: "😢",
    title: "Spot",
    body: "Easy instance setup.",
  },
  {
    path: "/compute/type/on-demand",
    emoji: "🚀",
    title: "On Demand",
    body: "Manually allocate resources.",
  },
  {
    path: "/compute/type/autoscale",
    emoji: "🤖",
    title: "Autoscale",
    body: "Automatic adjustments based on demand.",
  },
];

const Type = () => {
  return (
    <main>
      <section className={styles.section}>
        {TYPE_LIST.map((item: IQuickStartCard, index) => (
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

export default Type;
