import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";


const QUICK_START_LIST_USER = [
  {
    path: "/rent-gpu/deploy-container",
    emoji: "🚀",
    title: "Deploy Container",
    body: "Learn how to deploy your container on Spheron.",
  },
  {
    path: "/rent-gpu/protocol-cli",
    emoji: "🏪",
    title: "Protocol CLI",
    body: "Lease GPU with Protocol Native CLI.",
  },
  {
    path: "/protocol-sdk",
    emoji: "💻",
    title: "Protocol SDK",
    body: "Lease GPU with Spheron's Protocol SDK.",
  },
  {
    path: "/rent-gpu/icl",
    emoji: "⚡",
    title: "ICL Configuration",
    body: "Learn about the deployment config.",
  },
  {
    path: "/guides",
    emoji: "📚",
    title: "Console Guides",
    body: "Learn what you can deploy on Spheron.",
  },
  {
    path: "/rent-gpu/supports#gpu-support",
    emoji: "🌀",
    title: "GPU Supports",
    body: "Know all the GPU support and it's tiering.",
  },
];

const QuickStart = () => {
  return (
    <main>
      <section className={styles.section}>
        {QUICK_START_LIST_USER.map((item: IQuickStartCard, index) => (
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
