import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const QUICK_START_LIST = [
  {
    path: "/core-concepts",
    emoji: "🛠️",
    title: "Core Concepts",
    body: "Everything about the Protocol Core Concepts.",
  },
  {
    path: "/providers",
    emoji: "✈️",
    title: "Provider",
    body: "Build a Cloud Provider and lend GPU.",
  },
  {
    path: "/providers/reward-details",
    emoji: "🏆",
    title: "Provider Reward",
    body: "Learn about the provider rewards.",
  },
  {
    path: "/fizz",
    emoji: "💻",
    title: "Fizz Node",
    body: "Lend your excess GPU & Compute.",
  },
  {
    path: "/fizz/reward-details",
    emoji: "💰",
    title: "Fizz Node Reward",
    body: "Learn about the fizz node rewards.",
  },
  {
    path: "/user-guide/deploy-your-app",
    emoji: "🚀",
    title: "Deploy your app",
    body: "Learn how to deploy your app on Spheron Protocol.",
  },
  {
    path: "/user-guide/protocol-cli",
    emoji: "🏪",
    title: "Protocol CLI",
    body: "Lease GPU with Protocol Native CLI.",
  },
  {
    path: "/user-guide/icl",
    emoji: "⚡",
    title: "ICL Configuration",
    body: "Learn about the deployment config.",
  },
  {
    path: "/user-guide/supports#gpu-support",
    emoji: "🌀",
    title: "GPU Supports",
    body: "Know all the GPU support and it's tiering.",
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
