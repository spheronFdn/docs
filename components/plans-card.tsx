import { FC } from "react";
import Image from "next/image";
import { IPlans } from "./plans";
import NvidiaIcon from "../assets/nvidia.svg";
import styles from "../styles/plans.module.css";

export interface IPlansCard extends IPlans {
  isGPU: boolean;
}

const PlansCard: FC<IPlansCard> = ({
  title,
  amount,
  dailyAmount,
  hourlyAmount,
  specs,
  isGPU,
  akashImageId,
}) => {
  return (
    <section className={styles.card}>
      <div>
        <div className={styles.gpu}>
          {isGPU && (
            <Image
              src={NvidiaIcon}
              alt="nvidia"
              width={28}
              height={28}
              className={styles.logo}
            />
          )}
          <h3 className={styles.heading}>{title}</h3>
        </div>
        <p className={styles.amount}>
          <span className={styles.amountValue}>${hourlyAmount}</span>{" "}
          <span className={styles.paragraph}>Avg hourly</span>
        </p>
        <p className={styles.dailyAmount}>${amount} avg monthly cost</p>
        <ul>
          <li>
            {"\u2022"} {specs[0]}Gi RAM
          </li>
          <li>
            {"\u2022"} {specs[1]} CPU
          </li>
        </ul>
        <div className={styles.akashImage}>
          Plan ID: <div>{akashImageId}</div>
        </div>
      </div>
    </section>
  );
};

export default PlansCard;
