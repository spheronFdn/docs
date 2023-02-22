import { FC } from "react";
import Link from "next/link";
import styles from "./quick.module.css";

interface Card {
  path: string;
  emoji: string;
  title: string;
  body: string;
}

const Card: FC<Card> = ({ path, emoji, title, body }) => {
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

export default Card;
