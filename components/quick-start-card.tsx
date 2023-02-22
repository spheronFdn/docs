import { FC } from "react";
import Link from "next/link";
import styles from "./quick.module.css";

export interface IQuickStartCard {
  path: string;
  emoji: string;
  title: string;
  body: string;
}

const QuickStartCard: FC<IQuickStartCard> = ({ path, emoji, title, body }) => {
  return (
    <Link href={`${path}`} className={styles.card}>
      <div>
        <div className={styles.emoji}>{emoji}</div>
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles.paragraph}>{body}</p>
      </div>
    </Link>
  );
};

export default QuickStartCard;
