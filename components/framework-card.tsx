import { FC } from "react";
import Link from "next/link";
import styles from "../styles/framework.module.css";

export interface IFrameworkCard {
  path: string;
  title: string;
}

const FrameworkCard: FC<IFrameworkCard> = ({ path, title }) => {
  return (
    <Link href={`${path}`} className={styles.card}>
      <div>
        <h3 className={styles.heading}>{title}</h3>
      </div>
    </Link>
  );
};

export default FrameworkCard;
