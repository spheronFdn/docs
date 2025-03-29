import QuickStartCard, { IQuickStartCard } from "@/components/quick-start-card";
import styles from "@/styles/quick.module.css";

const FIZZ_TYPE_LIST = [
  {
    path: "https://fizz.spheron.network",
    emoji: "💻",
    title: "Dashboard",
    body: "Checkout your fizz node dashboard.",
  },
  {
    path: "/fizz/hardware-requirements",
    emoji: "🗄️",
    title: "Requirements",
    body: "Software & Hardware Requirement.",
  },
  {
    path: "/fizz/setup-fizz",
    emoji: "🌐",
    title: "Setup Fizz Node",
    body: "Set up a Spheron fizz node.",
  },
  {
    path: "/fizz/reward-details",
    emoji: "💰",
    title: "Reward Details",
    body: "Fizz node FN points reward details.",
  },
  {
    path: "/fizz/fizz-faq",
    emoji: "💬",
    title: "Fizz Node FAQ",
    body: "FAQ about the fizz node issues.",
  },
  {
    path: "/fizz/fizz-phase",
    emoji: "🫧",
    title: "Fizz Node Phase",
    body: "Fizz node's onboarding phase details.",
  },
];

const FizzNode = () => {
  return (
    <main>
      <section className={styles.section}>
        {FIZZ_TYPE_LIST.map((item: IQuickStartCard, index) => (
          <QuickStartCard
            key={index}
            path={item.path}
            emoji={item.emoji}
            title={item.title}
            body={item.body}
          />
        ))}
      </section>
    </main>
  );
};

export default FizzNode;
