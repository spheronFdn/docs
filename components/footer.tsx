import Spheron from "@/components/icons/spheron-icon";
import styles from "@/styles/footer.module.css";
import { Footer } from "nextra-theme-docs";

const CustomFooter = () => {

  return (
    <Footer>
      <section className={styles.footer}>
        <div
          className="flex items-center gap-2 mb-1"
        >
          Apache 2.0 {new Date().getFullYear()} <span className="ml-1">©</span>
          <a
            href="https://spheron.network"
            target="_blank"
            className={styles.website}
          >
            <span className="mx-2 flex items-center">
              {Spheron}
            </span>
            Spheron
          </a>
          |
          <a
            href="https://spheron.network/Spheron_Website_Terms_of_Use.pdf"
            target="_blank"
            className={styles.tos}
          >
            TOS
          </a>
        </div>
      </section>
    </Footer>
  );
};

export default CustomFooter;
