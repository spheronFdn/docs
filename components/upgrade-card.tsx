import { FC, ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/upgrade.module.css";

export interface IUpgradeCard {
  path: string;
  logo: any;
  alt: string;
  title: string;
}

const UpgradeCard: FC<IUpgradeCard> = ({ path, logo, alt, title }) => {
  return (
    <Link href={`${path}`} className={styles.card}>
      <div>
        <Image
          src={logo}
          alt={alt}
          width={24}
          height={24}
          className={styles.logo}
        />
        <h3 className={styles.heading}>{title}</h3>
      </div>
    </Link>
  );
};

export default UpgradeCard;
