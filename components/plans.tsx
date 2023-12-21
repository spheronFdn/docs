import PlansCard from "./plans-card";
import styles from "../styles/quick.module.css";

export interface IPlans {
  title: string;
  amount: string;
  dailyAmount: string;
  hourlyAmount: string;
  specs: number[];
  akashImageId: string;
}

const CPU_PLANS_LIST = [
  {
    title: "Ventus Nano",
    amount: "1.16",
    dailyAmount: "0.04",
    hourlyAmount: "0.0016",
    specs: [0.5, 1],
    akashImageId: "6331ecb770dbf4bd413e73ab",
  },
  {
    title: "Ventus Micro",
    amount: "1.54",
    dailyAmount: "0.05",
    hourlyAmount: "0.0020",
    specs: [1, 1],
    akashImageId: "6331ecb770dbf4bd413e73ac",
  },
  {
    title: "Ventus Small",
    amount: "2.29",
    dailyAmount: "0.08",
    hourlyAmount: "0.0033",
    specs: [2, 1],
    akashImageId: "6331ecb770dbf4bd413e73ad",
  },
  {
    title: "Ventus Medium",
    amount: "4.58",
    dailyAmount: "0.15",
    hourlyAmount: "0.0062",
    specs: [4, 2],
    akashImageId: "6331ecb770dbf4bd413e73ae",
  },
  {
    title: "Ventus 2x Medium",
    amount: "4.58",
    dailyAmount: "0.15",
    hourlyAmount: "0.0062",
    specs: [4, 2],
    akashImageId: "639c80014e08002a4ec35d17",
  },
  {
    title: "Ventus Large",
    amount: "7.60",
    dailyAmount: "0.25",
    hourlyAmount: "0.0104",
    specs: [8, 2],
    akashImageId: "6331ecb770dbf4bd413e73af",
  },
  {
    title: "Ventus 2x Large",
    amount: "9.16",
    dailyAmount: "0.31",
    hourlyAmount: "0.0129",
    specs: [8, 4],
    akashImageId: "63cf12817c130a7f29faf57d",
  },
  {
    title: "Ventus X-Large",
    amount: "15.19",
    dailyAmount: "0.51",
    hourlyAmount: "0.0212",
    specs: [16, 4],
    akashImageId: "6331ecb770dbf4bd413e73b0",
  },
  {
    title: "Glacies Nano",
    amount: "1.94",
    dailyAmount: "0.06",
    hourlyAmount: "0.0025",
    specs: [0.5, 2],
    akashImageId: "6331ecb770dbf4bd413e73b1",
  },
  {
    title: "Glacies Micro",
    amount: "2.32",
    dailyAmount: "0.08",
    hourlyAmount: "0.0033",
    specs: [1, 2],
    akashImageId: "6331ecb770dbf4bd413e73b2",
  },
  {
    title: "Glacies Small",
    amount: "3.07",
    dailyAmount: "0.10",
    hourlyAmount: "0.0041",
    specs: [2, 2],
    akashImageId: "6331ecb770dbf4bd413e73b3",
  },
  {
    title: "Terra Nano",
    amount: "2.32",
    dailyAmount: "0.08",
    hourlyAmount: "0.0033",
    specs: [1, 2],
    akashImageId: "6331ecb770dbf4bd413e73b7",
  },
  {
    title: "Terra Small",
    amount: "6.15",
    dailyAmount: "0.20",
    hourlyAmount: "0.0083",
    specs: [4, 4],
    akashImageId: "6331ecb770dbf4bd413e73b9",
  },
  {
    title: "Terra Small 1Ti",
    amount: "6.15",
    dailyAmount: "0.20",
    hourlyAmount: "0.0083",
    specs: [4, 4],
    akashImageId: "63ebbab0977150f1f37d4999",
  },
  {
    title: "Terra Medium",
    amount: "9.16",
    dailyAmount: "0.31",
    hourlyAmount: "0.0129",
    specs: [8, 4],
    akashImageId: "6331ecb770dbf4bd413e73ba",
  },
  {
    title: "Terra Large",
    amount: "18.33",
    dailyAmount: "0.61",
    hourlyAmount: "0.0254",
    specs: [16, 8],
    akashImageId: "6331ecb770dbf4bd413e73bb",
  },
  {
    title: "Terra Large 1Ti",
    amount: "18.33",
    dailyAmount: "0.61",
    hourlyAmount: "0.0254",
    specs: [16, 8],
    akashImageId: "641b62dea2a8cbc1653df42e",
  },
  {
    title: "Terra 2x Large",
    amount: "30.39",
    dailyAmount: "1.01",
    hourlyAmount: "0.0420",
    specs: [32, 8],
    akashImageId: "6331ecb770dbf4bd413e73bc",
  },
  {
    title: "Terra 3x Large",
    amount: "31.95",
    dailyAmount: "1.07",
    hourlyAmount: "0.0445",
    specs: [32, 10],
    akashImageId: "63b6dff9cf305be3ff687f16",
  },
  {
    title: "Ignis Large",
    amount: "30.39",
    dailyAmount: "1.01",
    hourlyAmount: "0.0420",
    specs: [32, 8],
    akashImageId: "6331ecb770dbf4bd413e73c1",
  },
  {
    title: "Ignis 2x Large",
    amount: "60.77",
    dailyAmount: "2.03",
    hourlyAmount: "0.0845",
    specs: [64, 16],
    akashImageId: "6331ecb770dbf4bd413e73c2",
  },
];

const GPU_PLANS_LIST = [
  {
    title: "Nvidia 3080",
    amount: "305.53",
    dailyAmount: "10.18",
    hourlyAmount: "0.42",
    specs: [16, 8],
    akashImageId: "654cfafc57fb55af4e4c3a58",
  },
  {
    title: "Nvidia 3090",
    amount: "374.61",
    dailyAmount: "12.49",
    hourlyAmount: "0.52",
    specs: [16, 8],
    akashImageId: "654cfafc57fb55af4e4c3a57",
  },
  {
    title: "Nvidia Tesla T4",
    amount: "336.93",
    dailyAmount: "11.23",
    hourlyAmount: "0.46",
    specs: [16, 8],
    akashImageId: "654cfafc57fb55af4e4c3a56",
  },
  {
    title: "Nvidia A4000",
    amount: "349.49",
    dailyAmount: "11.65",
    hourlyAmount: "0.48",
    specs: [16, 8],
    akashImageId: "654cfafc57fb55af4e4c3a59",
  },
  {
    title: "Nvidia A100",
    amount: "548.25",
    dailyAmount: "18.28",
    hourlyAmount: "0.76",
    specs: [32, 16],
    akashImageId: "65412e415b8bd0a39081ca5f",
  },
  {
    title: "Nvidia V100",
    amount: "704.01",
    dailyAmount: "23.52",
    hourlyAmount: "0.98",
    specs: [64, 16],
    akashImageId: "65412e4b5b8bd0a39081ca61",
  },
];

const Plans = ({ isGPU }) => {
  return (
    <main>
      <section className={styles.section}>
        {(isGPU ? GPU_PLANS_LIST : CPU_PLANS_LIST).map(
          (item: IPlans, index) => (
            <PlansCard
              key={index}
              title={item.title}
              amount={item.amount}
              dailyAmount={item.dailyAmount}
              hourlyAmount={item.hourlyAmount}
              specs={item.specs}
              akashImageId={item.akashImageId || ""}
              isGPU={isGPU}
            />
          )
        )}
      </section>
    </main>
  );
};

export default Plans;
