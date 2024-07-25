import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const PROVIDERS_TYPE_LIST = [
  {
    path: "/providers/hardware-requirements",
    emoji: "🗄️",
    title: "Hardware Requirements",
    body: "Software & Hardware Requirement.",
  },
  {
    path: "/providers/common-issues",
    emoji: "🐛",
    title: "Common Issues",
    body: "Some common issues that provider might face.",
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
    path: "/providers/spheron-add-node",
    emoji: "🚧",
    title: "Add Nodes",
    body: "Adding Nodes to Spheron Provider.",
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
