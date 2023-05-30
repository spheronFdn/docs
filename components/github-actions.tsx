import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const ACTION_LIST = [
  {
    path: "/github-actions/instance-update-action",
    emoji: "👾",
    title: "Instance Update",
    body: "Action For Updating Cluster Instances",
  },
];

const GithubActions = () => {
  return (
    <main>
      <section className={styles.section}>
        {ACTION_LIST.map((item: IQuickStartCard, index) => (
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

export default GithubActions;
