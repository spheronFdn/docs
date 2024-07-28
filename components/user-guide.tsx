import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const GUIDE_TYPE_LIST = [
  {
    path: "/user-guide/deploy-your-app",
    emoji: "🚀",
    title: "Deploy your app",
    body: "Learn how to deploy your app on Spheron Protocol.",
  },
  {
    path: "/user-guide/icl",
    emoji: "⚡",
    title: "ICL Configuration",
    body: "Learn about the deployment config.",
  },
  {
    path: "/user-guide/protocol-cli",
    emoji: "🏪",
    title: "Protocol CLI",
    body: "Lease GPU with Protocol Native CLI.",
  },
  {
    path: "/user-guide/supports#gpu-support--tiering",
    emoji: "📟",
    title: "GPU Supports",
    body: "Know all the GPU support and it's tiering.",
  },
];

const ProviderOnboarding = () => {
  return (
    <main>
      <section className={styles.section}>
        {GUIDE_TYPE_LIST.map((item: IQuickStartCard, index) => (
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

export default ProviderOnboarding;
