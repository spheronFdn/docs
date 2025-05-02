import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const QUICK_START_LIST = [
  {
    path: "/rent-gpu/deploy-container/with-console",
    emoji: "🤖",
    title: "Deploy with Console",
    body: "Understand how to deploy your container with Spheron Console.",
  },
  {
    path: "/rent-gpu/deploy-container/with-playground",
    emoji: "💻",
    title: "Deploy with Playground",
    body: "Understand how to deploy your container with Spheron Playground.",
  },
  {
    path: "/rent-gpu/deploy-container/with-cli",
    emoji: "🖥️",
    title: "Deploy with CLI",
    body: "Understand how to deploy your container with Spheron CLI.",
  }
];

const QuickStartDeploy = () => {
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
            style={styles.card_bigger}
          />
        ))}
      </section>
    </main>
  );
};

export default QuickStartDeploy;
