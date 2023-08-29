import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const SCALING_LIST = [
  {
    path: "/compute/scaling/no-scaling",
    emoji: "😢",
    title: "No Scaling",
    body: "Easy instance setup.",
  },
  {
    path: "/compute/scaling/manual-scaling",
    emoji: "🚀",
    title: "Manual Scaling",
    body: "Manually allocate resources.",
  },
  {
    path: "/compute/scaling/auto-scaling",
    emoji: "🤖",
    title: "Auto Scaling",
    body: "Automatic adjustments based on demand.",
  },
];

const Scaling = () => {
  return (
    <main>
      <section className={styles.section}>
        {SCALING_LIST.map((item: IQuickStartCard, index) => (
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

export default Scaling;
