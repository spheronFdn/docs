import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const CLUSTER_TYPE_LIST = [
  {
    path: "/compute/cluster/compute",
    emoji: "🚅",
    title: "Compute",
    body: "Run containers on CPU-based instances",
  },
  {
    path: "/compute/cluster/accelerate",
    emoji: "🛩️",
    title: "Accelerate",
    body: "GPU-powered computation boost",
  },
];

const Cluster = () => {
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

export default Cluster;
