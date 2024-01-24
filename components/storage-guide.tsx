import styles from "../styles/topup.module.css";
import IPFSIcon from "../assets/ipfs.svg";
import StorageGuideCard, { IStorageGuideCard } from "./storage-guide-card";

const STORAGE_LIST = [
  {
    path: "/billing/storage/storage-plan/",
    logo: IPFSIcon,
    alt: "Manage Storage Plan Subscription",
    title: "Manage Storage Plan Subscription",
  },
  {
    path: "/billing/storage/storage-plan-details/",
    logo: IPFSIcon,
    alt: "Available Storage Plan Subscriptions",
    title: "Available Storage Plan Subscriptions",
  },
];

const StorageGuide = () => {
  return (
    <div>
      <section className={styles.section}>
        {STORAGE_LIST.map((item: IStorageGuideCard, index: number) => (
          <StorageGuideCard
            key={index}
            path={item.path}
            logo={item.logo}
            alt={item.alt}
            title={item.title}
          />
        ))}
      </section>
    </div>
  );
};

export default StorageGuide;
