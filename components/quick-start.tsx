import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "./quick.module.css";

const QUICK_START_LIST = [
  {
    path: "/billing",
    emoji: "💸",
    title: "Billing",
    body: "Upgrade to Pro to enjoy additional benefits!",
  },
  {
    path: "/organization",
    emoji: "🗂️",
    title: "Organization",
    body: "Learn how to create multiple organizations.",
  },
  {
    path: "/static/deployment/logs",
    emoji: "🚀",
    title: "Static App",
    body: "Deploy static apps from Github, Gitlab, or Bitbucket.",
  },
];

const QuickStart = () => {
  return (
    <main>
      <section className={styles.section}>
        {QUICK_START_LIST.map((item: IQuickStartCard, index) => (
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
