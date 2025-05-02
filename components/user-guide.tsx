import QuickStartCard, { IQuickStartCard } from "@/components/quick-start-card";
import styles from "@/styles/quick.module.css";

const GUIDE_TYPE_LIST = [
  {
    path: "/rent-gpu/deploy-container",
    emoji: "🚀",
    title: "Deploy Container",
    body: "Learn how to deploy your container on Spheron.",
  },
  {
    path: "/rent-gpu/icl",
    emoji: "⚡",
    title: "ICL Configuration",
    body: "Learn about the deployment config.",
  },
  {
    path: "/rent-gpu/protocol-cli",
    emoji: "🏪",
    title: "Protocol CLI",
    body: "Lease GPU with Protocol Native CLI.",
  },
  {
    path: "/rent-gpu/fizz-vs-provider",
    emoji: "🤝",
    title: "Fizz vs Provider",
    body: "Learn about the diff b/w Fizz and Provider Mode.",
  },
  {
    path: "/rent-gpu/supports#gpu-support",
    emoji: "📟",
    title: "GPU Supports",
    body: "Know all the GPU support and it's tiering.",
  },
  {
    path: "/protocol-sdk",
    emoji: "🧑‍💻",
    title: "Protocol SDK",
    body: "Build something cool on Spheron Network.",
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
