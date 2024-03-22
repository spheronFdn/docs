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
import MassBitIcon from "../assets/massbit.svg";
import ArbitrumIcon from "../assets/arbitrum.svg";
import FilecoinIcon from "../assets/filecoin.svg";
import JupyterIcon from "../assets/jupyter.svg";
import VSCodeIcon from "../assets/vscode.svg";
import MinecraftIcon from "../assets/minecraft.svg";
import AvailIcon from "../assets/avail.png";
import TensorFlowIcon from "../assets/tensorflow.svg";
import ShardeumIcon from "../assets/shardeum.svg";
import CelestiaIcon from "../assets/celestia.svg";
import ElixirIcon from "../assets/elixir.png";
import FuelIcon from "../assets/fuel.png";
import LavaIcon from "../assets/lava.png";
import BabylonIcon from "../assets/babylon.png";
import PryzmIcon from "../assets/pryzm.svg";
import SubspaceIcon from "../assets/subspace.svg";
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
    path: "/marketplace-guide/mantle-dtl",
    logo: MantleIcon,
    alt: "mantle-dtl",
    title: "Deploy Mantle DTL",
  },
  {
    path: "/marketplace-guide/mantle-verifier",
    logo: MantleIcon,
    alt: "mantle-verifier",
    title: "Deploy Mantle Verifier",
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
    path: "/marketplace-guide/massbit-gateway",
    logo: MassBitIcon,
    alt: "massbit-gateway",
    title: "Deploy MassBit Gateway",
  },
  {
    path: "/marketplace-guide/arbitrum-one",
    logo: ArbitrumIcon,
    alt: "arbitrum-one",
    title: "Deploy Arbitrum One",
  },
  {
    path: "/marketplace-guide/filecoin",
    logo: FilecoinIcon,
    alt: "filecoin",
    title: "Deploy Filecoin Mainnet",
  },
  {
    path: "/marketplace-guide/jupyter",
    logo: JupyterIcon,
    alt: "jupyter",
    title: "Deploy Jupyter Notebook",
  },
  {
    path: "/marketplace-guide/vscode",
    logo: VSCodeIcon,
    alt: "vscode",
    title: "Deploy VSCode Server",
  },
  {
    path: "/marketplace-guide/minecraft",
    logo: MinecraftIcon,
    alt: "minecraft",
    title: "Deploy Minecraft Server",
  },
  {
    path: "/marketplace-guide/avail-full",
    logo: AvailIcon,
    alt: "avail",
    title: "Deploy Avail Full Node",
  },
  {
    path: "/marketplace-guide/avail",
    logo: AvailIcon,
    alt: "avail",
    title: "Deploy Avail Validator Node",
  },
  {
    path: "/marketplace-guide/avail-light",
    logo: AvailIcon,
    alt: "avail",
    title: "Deploy Avail Light Client",
  },
  {
    path: "/marketplace-guide/tensorflow",
    logo: TensorFlowIcon,
    alt: "tensorflow",
    title: "Deploy TensorFlow GPU",
  },
  {
    path: "/marketplace-guide/shardeum",
    logo: ShardeumIcon,
    alt: "shardeum",
    title: "Deploy Shardeum Node",
  },
  {
    path: "/marketplace-guide/celestia-light",
    logo: CelestiaIcon,
    alt: "celestia",
    title: "Deploy Celestia Light Node",
  },
  {
    path: "/marketplace-guide/elixir",
    logo: ElixirIcon,
    alt: "elixir",
    title: "Deploy Elixir Validator Node",
  },
  {
    path: "/marketplace-guide/fuel",
    logo: FuelIcon,
    alt: "fuel",
    title: "Deploy Fuel Node",
  },
  {
    path: "/marketplace-guide/lava",
    logo: LavaIcon,
    alt: "lava",
    title: "Deploy Lava Validator Testnet",
  },
  {
    path: "/marketplace-guide/babylon",
    logo: BabylonIcon,
    alt: "babylon",
    title: "Deploy Babylon Validator Testnet",
  },
  {
    path: "/marketplace-guide/pryzm",
    logo: PryzmIcon,
    alt: "pryzm",
    title: "Deploy Pryzm Validator Testnet",
  },
  {
    path: "/marketplace-guide/subspace",
    logo: SubspaceIcon,
    alt: "subspace",
    title: "Deploy Subspace Node",
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
