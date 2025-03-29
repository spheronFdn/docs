import QuickStartCard, { IQuickStartCard } from "@/components/quick-start-card";
import styles from "@/styles/quick.module.css";

const PROVIDERS_TYPE_LIST = [
  {
    path: "https://provider.spheron.network",
    emoji: "💻",
    title: "Dashboard",
    body: "Checkout your provider dashboard.",
  },
  {
    path: "/providers/hardware-requirements",
    emoji: "🗄️",
    title: "Requirements",
    body: "Software & Hardware Requirement.",
  },
  {
    path: "/providers/prepare-linux-instances",
    emoji: "🅰️",
    title: "Prepare Instances",
    body: "Preparing your instances using Ansible.",
  },
  {
    path: "/providers/setup-provider",
    emoji: "🌐",
    title: "Setup Provider",
    body: "Set up a Spheron provider.",
  },
  {
    path: "/providers/reward-details",
    emoji: "💰",
    title: "Reward Details",
    body: "Reward details for the providers.",
  },
  {
    path: "/providers/common-issues",
    emoji: "🐛",
    title: "Common Issues",
    body: "Some common issues that provider might face.",
  },
];

const ProviderOnboarding = () => {
  return (
    <main>
      <section className={styles.section}>
        {PROVIDERS_TYPE_LIST.map((item: IQuickStartCard, index) => (
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
