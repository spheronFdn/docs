import styles from "../styles/topup.module.css";
import CreditCardIcon from "../assets/credit-card.svg";
import TopupGuideCard, {ITopupGuideCard} from "./topup-guide-card";
import MetamaskIcon from "../assets/metamask.svg";

const TOPUP_LIST = [
    {
        path: "/billing/compute/topup-compute-funds-web3/",
        logo: MetamaskIcon,
        alt: "Top Up Compute Funds with a Web3 Wallet",
        title: "Top Up Compute Funds with a Web3 Wallet",
    },
    {
        path: "/billing/compute/topup-compute-funds-creditcard/",
        logo: CreditCardIcon,
        alt: "Top Up Compute Funds with a Credit/Debit Card",
        title: "Top Up Compute Funds with a Credit/Debit Card",
    },
];

const TopupGuide = () => {
    return (
        <div>
            <section className={styles.section}>
                {TOPUP_LIST.map((item: ITopupGuideCard, index: number) => (
                    <TopupGuideCard
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

export default TopupGuide;
