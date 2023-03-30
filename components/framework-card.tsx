import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/framework.module.css";

export interface IFrameworkCard {
  path: string;
  logo?: any;
  alt?: string;
  title: string;
}

const FrameworkCard: FC<IFrameworkCard> = ({ path, logo, alt, title }) => {
  return (
    <Link href={`${path}`} className={styles.card}>
      <div>
        {logo && (
          <Image
            src={logo}
            alt={alt}
            width={24}
            height={24}
            className={styles.logo}
          />
        )}
        <h3 className={styles.heading}>{title}</h3>
      </div>
    </Link>
  );
};

export default FrameworkCard;
