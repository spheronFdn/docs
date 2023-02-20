import Link from "next/link";
import styles from "./quick.module.css";

function Card() {
  return (
    <main>
      <section className={styles.section}>
        <Link href="/billing" className={styles.card}>
          <div>
            <div className={styles.emoji}>💸</div>
            <h3 className={styles.heading}>Billing</h3>
            <p className={styles.paragraph}>
              Upgrade to Pro to enjoy additional benefits!
            </p>
          </div>
        </Link>
        <Link href="/organization" className={styles.card}>
          <div>
            <div className={styles.emoji}>🗂️</div>
            <h3 className={styles.heading}>Organization</h3>
            <p className={styles.paragraph}>
              Learn how to create multiple organizations.
            </p>
          </div>
        </Link>
        <Link href="/static/deployment/logs" className={styles.card}>
          <div>
            <div className={styles.emoji}>⚡</div>
            <h3 className={styles.heading}>Static App</h3>
            <p className={styles.paragraph}>
              Deploy static apps from Github, Gitlab, or Bitbucket.
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
}

export default function QuickStart() {
  return <Card />;
}
