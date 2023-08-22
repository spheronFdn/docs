import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const SCALING_LIST = [
  {
    path: "/compute/scaling",
    emoji: "😢",
    title: "No Scaling",
    body: "Easily set up instances without complex configurations.",
  },
  {
    path: "/compute/scaling/manual",
    emoji: "🚀",
    title: "Manual Scaling",
    body: "Adjust allocated resources to align with changing demands.",
  },
  {
    path: "/compute/scaling",
    emoji: "🤖",
    title: "Auto Scaling",
    body: "Automatically adjust resources based on demand fluctuations.",
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
