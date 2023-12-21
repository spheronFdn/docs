import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const STORAGE_TYPE_LIST = [
  {
    path: "/storage/upload",
    emoji: "📤",
    title: "Upload Files",
    body: "Upload data to decentralized storage.",
  },
  {
    path: "/sdk/storage-v2",
    emoji: "⛓️",
    title: "Storage SDK V2",
    body: "For Node.js based environments",
  },
  {
    path: "/sdk/storage-v2/#ipns-records",
    emoji: "💮",
    title: "IPNS SDK",
    body: "Gain precise control over IPNS records.",
  },
  {
    path: "/storage/encryption",
    emoji: "🔐",
    title: "Encryption",
    body: "Encrypt/Decrypt data for security and privacy.",
  },
  {
    path: "/storage/rate-limits",
    emoji: "⚠️",
    title: "Rate Limits",
    body: "Rate limits for system stability.",
  },
  {
    path: "/gateways/dedicated",
    emoji: "⛩️",
    title: "Gateways",
    body: "Quick access to pinned content across network.",
  },
];

const Storage = () => {
  return (
    <main>
      <section className={styles.section}>
        {STORAGE_TYPE_LIST.map((item: IQuickStartCard, index) => (
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

export default Storage;
