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
          <span className={styles.amountValue}>${amount}</span>{" "}
          <span className={styles.paragraph}>Avg monthly</span>
        </p>
        {isGPU ? (
          <p className={styles.dailyAmount}>${hourlyAmount} avg hourly cost</p>
        ) : (
          <p className={styles.dailyAmount}>${dailyAmount} avg daily cost</p>
        )}
        <ul>
          <li>
            {"\u2022"} {specs[0]}Gi RAM
          </li>
          <li>
            {"\u2022"} {specs[1]} CPU
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PlansCard;
