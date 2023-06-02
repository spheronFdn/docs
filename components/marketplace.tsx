import FrameworkCard, { IFrameworkCard } from "./framework-card";
import MongoDBIcon from "../assets/mongodb.svg";
import RedisIcon from "../assets/redis.svg";
import PostgreSQLIcon from "../assets/postgresql.svg";
import MySQLIcon from "../assets/mysql.svg";
import GrafanaIcon from "../assets/grafana.svg";
import VaultIcon from "../assets/vault.svg";
import IPFSIcon from "../assets/ipfs.svg";
import SubstrateIcon from "../assets/substrate.svg";
import StrideIcon from "../assets/stride.svg";
import HypersignIcon from "../assets/hypersign.svg";
import KyveIcon from "../assets/kyve.svg";
import ReefIcon from "../assets/reef.svg";
import SuiIcon from "../assets/sui.svg";
import MantleIcon from "../assets/mantle.svg";
import DrupalIcon from "../assets/drupal.svg";
import DesoIcon from "../assets/deso.svg";
import ArbitrumIcon from "../assets/arbitrum.svg";
import FilecoinIcon from "../assets/filecoin.svg";
import styles from "../styles/framework.module.css";

const MARKETPLACE_APP_LIST = [
  {
    path: "/marketplace-guide/mongodb",
    logo: MongoDBIcon,
    alt: "mongodb",
    title: "Deploy MongoDB",
  },
  {
    path: "/marketplace-guide/redis",
    logo: RedisIcon,
    alt: "redis",
    title: "Deploy Redis",
  },
  {
    path: "/marketplace-guide/postgresql",
    logo: PostgreSQLIcon,
    alt: "postgresql",
    title: "Deploy PostgreSQL",
  },
  {
    path: "/marketplace-guide/mysql",
    logo: MySQLIcon,
    alt: "mysql",
    title: "Deploy MySQL",
  },
  {
    path: "/marketplace-guide/grafana",
    logo: GrafanaIcon,
    alt: "grafana",
    title: "Deploy Grafana",
  },
  {
    path: "/marketplace-guide/vault",
    logo: VaultIcon,
    alt: "vault",
    title: "Deploy Vault",
  },
  {
    path: "/marketplace-guide/ipfs",
    logo: IPFSIcon,
    alt: "ipfs",
    title: "Deploy IPFS Node",
  },
  {
    path: "/marketplace-guide/substrate",
    logo: SubstrateIcon,
    alt: "substrate",
    title: "Deploy Substrate Node",
  },
  {
    path: "/marketplace-guide/stride",
    logo: StrideIcon,
    alt: "stride",
    title: "Deploy Stride Node",
  },
  {
    path: "/marketplace-guide/hypersign",
    logo: HypersignIcon,
    alt: "hypersign",
    title: "Deploy Hypersign Node",
  },
  {
    path: "/marketplace-guide/kyve",
    logo: KyveIcon,
    alt: "kyve",
    title: "Deploy Kyve Node",
  },
  {
    path: "/marketplace-guide/reef",
    logo: ReefIcon,
    alt: "reef",
    title: "Deploy Reef Node",
  },
  {
    path: "/marketplace-guide/sui",
    logo: SuiIcon,
    alt: "sui",
    title: "Deploy Sui Node",
  },
  {
    path: "/marketplace-guide/dtl",
    logo: MantleIcon,
    alt: "dtl",
    title: "Deploy Mantle DTL Node",
  },
  {
    path: "/marketplace-guide/verifier",
    logo: MantleIcon,
    alt: "verifier",
    title: "Deploy Mantle Verifier Node",
  },
  {
    path: "/marketplace-guide/drupal",
    logo: DrupalIcon,
    alt: "drupal",
    title: "Deploy Drupal",
  },
  {
    path: "/marketplace-guide/deso",
    logo: DesoIcon,
    alt: "deso",
    title: "Deploy Deso Node",
  },
  {
    path: "/marketplace-guide/one",
    logo: ArbitrumIcon,
    alt: "one",
    title: "Deploy Arbitrum One Node",
  },
  {
    path: "/marketplace-guide/hyperspace",
    logo: FilecoinIcon,
    alt: "hyperspace",
    title: "Deploy Filecoin Hyperspace Node",
  },
];

const Marketplace = () => {
  return (
    <main>
      <section className={styles.section}>
        {MARKETPLACE_APP_LIST.map((item: IFrameworkCard, i) => (
          <FrameworkCard
            key={i}
            path={item.path}
            logo={item.logo}
            alt={item.alt}
            title={item.title}
          />
        ))}
      </section>
    </main>
  );
};

export default Marketplace;
