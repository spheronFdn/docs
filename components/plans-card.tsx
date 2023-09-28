import { FC } from "react";
import styles from "../styles/plans.module.css";

export interface IPlansCard {
  title: string;
  amount: string;
  dailyAmount: string;
  specs: number[];
}

const PlansCard: FC<IPlansCard> = ({ title, amount, dailyAmount, specs }) => {
  return (
    <section className={styles.card}>
      <div>
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles.amount}>
          <span className={styles.amountValue}>${amount}</span>{" "}
          <span className={styles.paragraph}>Avg monthly</span>
        </p>
        <p className={styles.dailyAmount}>${dailyAmount} avg daily cost</p>
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
