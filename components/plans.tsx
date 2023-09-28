import PlansCard, { IPlansCard } from "./plans-card";
import styles from "../styles/quick.module.css";

const PLANS_LIST = [
  {
    title: "Ventus Nano",
    amount: "1.16",
    dailyAmount: "0.04",
    specs: [0.5, 1],
  },
  {
    title: "Ventus Micro",
    amount: "1.54",
    dailyAmount: "0.05",
    specs: [1, 1],
  },
  {
    title: "Ventus Small",
    amount: "2.29",
    dailyAmount: "0.08",
    specs: [2, 1],
  },
  {
    title: "Ventus Medium",
    amount: "4.58",
    dailyAmount: "0.15",
    specs: [4, 2],
  },
  {
    title: "Ventus 2x Medium",
    amount: "4.58",
    dailyAmount: "0.15",
    specs: [4, 2],
  },
  {
    title: "Ventus Large",
    amount: "7.60",
    dailyAmount: "0.25",
    specs: [8, 2],
  },
  {
    title: "Ventus 2x Large",
    amount: "9.16",
    dailyAmount: "0.31",
    specs: [8, 4],
  },
  {
    title: "Ventus X-Large",
    amount: "15.19",
    dailyAmount: "0.51",
    specs: [16, 4],
  },
  {
    title: "Glacies Nano",
    amount: "1.94",
    dailyAmount: "0.06",
    specs: [0.5, 2],
  },
  {
    title: "Glacies Micro",
    amount: "2.32",
    dailyAmount: "0.08",
    specs: [1, 2],
  },
  {
    title: "Glacies Small",
    amount: "3.07",
    dailyAmount: "0.10",
    specs: [2, 2],
  },
  {
    title: "Terra Nano",
    amount: "2.32",
    dailyAmount: "0.08",
    specs: [1, 2],
  },
  {
    title: "Terra Small",
    amount: "6.15",
    dailyAmount: "0.20",
    specs: [4, 4],
  },
  {
    title: "Terra Small 1Ti",
    amount: "6.15",
    dailyAmount: "0.20",
    specs: [4, 4],
  },
  {
    title: "Terra Medium",
    amount: "9.16",
    dailyAmount: "0.31",
    specs: [8, 4],
  },
  {
    title: "Terra Large",
    amount: "18.33",
    dailyAmount: "0.61",
    specs: [16, 8],
  },
  {
    title: "Terra Large 1Ti",
    amount: "18.33",
    dailyAmount: "0.61",
    specs: [16, 8],
  },
  {
    title: "Terra 2x Large",
    amount: "30.39",
    dailyAmount: "1.01",
    specs: [32, 8],
  },
  {
    title: "Terra 3x Large",
    amount: "31.95",
    dailyAmount: "1.07",
    specs: [32, 10],
  },
  {
    title: "Ignis Large",
    amount: "30.39",
    dailyAmount: "1.01",
    specs: [32, 8],
  },
  {
    title: "Ignis 2x Large",
    amount: "60.77",
    dailyAmount: "2.03",
    specs: [64, 16],
  },
];

const Plans = () => {
  return (
    <main>
      <section className={styles.section}>
        {PLANS_LIST.map((item: IPlansCard, index) => (
          <PlansCard
            key={index}
            title={item.title}
            amount={item.amount}
            dailyAmount={item.dailyAmount}
            specs={item.specs}
          />
        ))}
      </section>
    </main>
  );
};

export default Plans;
