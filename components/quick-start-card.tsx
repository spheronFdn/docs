import { FC } from "react";
import styles from "../styles/quick.module.css";
import { Link } from "nextra-theme-docs";

export interface IQuickStartCard {
  path: string;
  emoji: string;
  title: string;
  body: string;
  style?: string;
}

const QuickStartCard: FC<IQuickStartCard> = ({ path, emoji, title, body, style }) => {
  return (
    <Link href={`${path}`} className={`${styles.card} no-underline ${style}`}>
      <div>
        <h3 className={`${styles.heading} flex items-center`}>
          <span className={styles.emoji}>{emoji}</span>
          {title}
        </h3>
        <p className={styles.paragraph}>{body}</p>
      </div>
    </Link>
  );
};

export default QuickStartCard;
