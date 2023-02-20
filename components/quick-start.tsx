import Link from "next/link";
import styles from "./quick.module.css";

function Card() {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.card}>
          <Link href="/billing">
            <div className={styles.emoji}>💸</div>
            <h3 className={styles.heading}>Billing</h3>
            <p className={styles.paragraph}>
              Upgrade to Pro to enjoy additional benefits!
            </p>
          </Link>
        </div>
        <div className={styles.card}>
          <div className={styles.emoji}>🗂️</div>
          <Link href="/organization">
            <h3 className={styles.heading}>Organization</h3>
            <p className={styles.paragraph}>
              Learn how to create multiple organizations.
            </p>
          </Link>
        </div>
        <div className={styles.card}>
          <div className={styles.emoji}>⚡</div>
          <Link href="/deployment/logs">
            <h3 className={styles.heading}>Static App</h3>
            <p className={styles.paragraph}>
              Deploy static apps from Github, Gitlab, or Bitbucket.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function QuickStart() {
  return <Card />;
}
