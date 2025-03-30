import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const QUICK_START_LIST = [
  {
    path: "/user-guide/deploy-your-app/with-console",
    emoji: "🤖",
    title: "Deploy with Console",
    body: "Understand how to deploy your app with Spheron Console.",
  },
  {
    path: "/user-guide/deploy-your-app/with-cli",
    emoji: "💻",
    title: "Deploy with CLI",
    body: "Understand how to deploy your app with Spheron CLI.",
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
