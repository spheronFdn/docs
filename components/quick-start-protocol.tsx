import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const QUICK_START_LIST_PROTOCOL = [
  {
    path: "/core-concepts",
    emoji: "🛠️",
    title: "Core Concepts",
    body: "Everything about the Protocol Core Concepts.",
  },
  {
    path: "/fizz",
    emoji: "💻",
    title: "Fizz Node",
    body: "Lend your excess GPU & Compute.",
  },
  {
    path: "/providers",
    emoji: "✈️",
    title: "Provider",
    body: "Build a Cloud Provider and lend GPU.",
  },
];

const QuickStart = () => {
  return (
    <main>
      <section className={styles.section}>
        {QUICK_START_LIST_PROTOCOL.map((item: IQuickStartCard, index) => (
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

export default QuickStart;
