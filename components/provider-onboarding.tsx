import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const CLUSTER_TYPE_LIST = [
  {
    path: "/provider-onboarding/setup-ansible",
    emoji: "🅰️",
    title: "Setup Ansible",
    body: "Deploying a provider using Ansible.",
  },
  {
    path: "/provider-onboarding/setup-provider",
    emoji: "🌐",
    title: "Setup Provider",
    body: "Set up a Spheron provider.",
  },
  {
    path: "/provider-onboarding/test-deployment",
    emoji: "🚧",
    title: "Test Deployment",
    body: "Create a Test deployments.",
  },
];

const ProviderOnboarding = () => {
  return (
    <main>
      <section className={styles.section}>
        {CLUSTER_TYPE_LIST.map((item: IQuickStartCard, index) => (
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
