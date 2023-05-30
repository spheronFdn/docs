import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const QUICK_START_LIST = [
  {
    path: "/billing",
    emoji: "💸",
    title: "Billing",
    body: "Upgrade to Pro to enjoy additional benefits.",
  },
  {
    path: "/organization",
    emoji: "🗂️",
    title: "Organization",
    body: "Learn how to create multiple organizations.",
  },
  {
    path: "/static/deployment/logs",
    emoji: "🚀",
    title: "Static App",
    body: "Deploy static apps from your Git provider.",
  },
  {
    path: "/compute/cluster",
    emoji: "✈️",
    title: "Compute",
    body: "Deploy compute instances with one click.",
  },
  {
    path: "/gateways",
    emoji: "⛩️",
    title: "Gateways",
    body: "Fast & reliable access to pinned content.",
  },
  {
    path: "/framework-guide",
    emoji: "📍",
    title: "Framework Guide",
    body: "Learn how to deploy your framework.",
  },
  {
    path: "/server-guide",
    emoji: "📌",
    title: "Server Guide",
    body: "Learn how to deploy your server.",
  },
  {
    path: "/marketplace-guide",
    emoji: "🏪",
    title: "Marketplace Guide",
    body: "Deploy pre-installed apps and scale fast.",
  },
  {
    path: "/rest-api",
    emoji: "🔌",
    title: "Spheron API",
    body: "Take a look at how the Spheron API works.",
  },
  {
    path: "/sdk",
    emoji: "🧰",
    title: "Spheron SDK",
    body: "Unlock multi-chain storage capabilities.",
  },
  {
    path: "/cli",
    emoji: "💬",
    title: "Spheron CLI",
    body: "Create & deploy dapps right from your terminal.",
  },
  {
    path: "/github-actions",
    emoji: "🌀",
    title: "Github Actions",
    body: "Actions for working with Clusters.",
  },
];

const QuickStart = () => {
  return (
    <main>
      <section className={styles.section}>
        {QUICK_START_LIST.map((item: IQuickStartCard, index) => (
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

export default QuickStart;
