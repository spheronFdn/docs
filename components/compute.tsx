import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const CLUSTER_TYPE_LIST = [
  {
    path: "/compute/cluster/compute",
    emoji: "🚅",
    title: "Compute",
    body: "Run containers on CPU-based instances.",
  },
  {
    path: "/compute/cluster/accelerate",
    emoji: "🛩️",
    title: "Accelerate",
    body: "GPU-powered computation boost.",
  },
  {
    path: "/compute/type",
    emoji: "🚀",
    title: "Compute Type",
    body: "Adjust computational resources.",
  },
  {
    path: "/compute/plans/compute-plans",
    emoji: "💲",
    title: "Compute Plans",
    body: "Unparalleled flexibility & customization options.",
  },
  {
    path: "/github-actions",
    emoji: "🌀",
    title: "Github Actions",
    body: "Actions for working with Clusters.",
  },
  {
    path: "/terraform",
    emoji: "⚙️",
    title: "Terraform",
    body: "Deploy compute instances with Terraform.",
  },
];

const Compute = () => {
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

export default Compute;
