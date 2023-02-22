import Card from "./card";
import styles from "./quick.module.css";

const QuickStart = () => {
  return (
    <main>
      <section className={styles.section}>
        <Card
          path="/billing"
          emoji="💸"
          title="Billing"
          body="Upgrade to Pro to enjoy additional benefits!"
        />
        <Card
          path="/organization"
          emoji="🗂️"
          title="Organization"
          body="Learn how to create multiple organizations."
        />
        <Card
          path="/static/deployment/logs"
          emoji="⚡"
          title="Static App"
          body="Deploy static apps from Github, Gitlab, or Bitbucket."
        />
      </section>
    </main>
  );
};

export default QuickStart;
