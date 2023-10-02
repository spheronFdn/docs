import UpgradeCard, { IUpgradeCard } from "./upgrade-card";
import CreditCardIcon from "../assets/credit-card.svg";
import PolygonIcon from "../assets/polygon.svg";
import OptimismIcon from "../assets/optimism.svg";
import BscIcon from "../assets/bsc.svg";
import GnosisIcon from "../assets/gnosis.svg";
import ArbitrumIcon from "../assets/arbitrum.svg";
import AvalancheIcon from "../assets/avalanche.svg";
import FilecoinIcon from "../assets/filecoin.svg";
import MantleIcon from "../assets/mantle.svg";
import BaseIcon from "../assets/base.svg";
import LineaIcon from "../assets/linea.svg";
import SolanaIcon from "../assets/solana.svg";
import styles from "../styles/upgrade.module.css";

const UPGRADE_LIST = [
  {
    path: "/billing/upgrade/credit-card",
    logo: CreditCardIcon,
    alt: "credit-card",
    title: "Upgrade to Pro with Credit Card",
  },
  {
    path: "/billing/upgrade/polygon",
    logo: PolygonIcon,
    alt: "polygon",
    title: "Upgrade to Pro with Polygon",
  },
  {
    path: "/billing/upgrade/optimism",
    logo: OptimismIcon,
    alt: "optimism",
    title: "Upgrade to Pro with Optimism",
  },
  {
    path: "/billing/upgrade/bsc",
    logo: BscIcon,
    alt: "bsc",
    title: "Upgrade to Pro with BSC",
  },
  {
    path: "/billing/upgrade/gnosis",
    logo: GnosisIcon,
    alt: "gnosis",
    title: "Upgrade to Pro with Gnosis",
  },
  {
    path: "/billing/upgrade/arbitrum",
    logo: ArbitrumIcon,
    alt: "arbitrum",
    title: "Upgrade to Pro with Arbitrum",
  },
  {
    path: "/billing/upgrade/avalanche",
    logo: AvalancheIcon,
    alt: "avalanche",
    title: "Upgrade to Pro with Avalanche",
  },
  {
    path: "/billing/upgrade/filecoin",
    logo: FilecoinIcon,
    alt: "filecoin",
    title: "Upgrade to Pro with Filecoin",
  },
  {
    path: "/billing/upgrade/mantle",
    logo: MantleIcon,
    alt: "mantle",
    title: "Upgrade to Pro with Mantle",
  },
  {
    path: "/billing/upgrade/base",
    logo: BaseIcon,
    alt: "base",
    title: "Upgrade to Pro with Base",
  },
  {
    path: "/billing/upgrade/linea",
    logo: LineaIcon,
    alt: "linea",
    title: "Upgrade to Pro with Linea",
  },
  {
    path: "/billing/upgrade/solana",
    logo: SolanaIcon,
    alt: "solana",
    title: "Upgrade to Pro with Solana",
  },
];

const Upgrade = () => {
  return (
    <main>
      <section className={styles.section}>
        {UPGRADE_LIST.map((item: IUpgradeCard) => (
          <UpgradeCard
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

export default Upgrade;
