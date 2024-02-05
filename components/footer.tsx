import { useEffect, useState } from "react";
import Image from "next/image";
import Spheron from "../assets/spheron.svg";
import styles from "../styles/footer.module.css";

interface IStatus {
  indicator: string;
  description: string;
}

const Footer = () => {
  const [status, setStatus] = useState<IStatus>({
    indicator: "none",
    description: "All Systems Operational",
  });
  const [colorCode, setColorCode] = useState("#0057FF");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://status.spheron.network/api/v2/status.json"
        );
        if (!response.ok) throw new Error("Network response was not ok");

        const colorMapping = {
          none: "#0057FF",
          minor: "#EFBF14",
          major: "#DE0B0B",
          critical: "#DE0B0B",
        };

        const result = await response.json();
        setStatus(result.status);
        setColorCode(colorMapping[result.status.indicator]);
      } catch (error) {
        setStatus({ indicator: "major", description: "Error" });
        setColorCode("#DE0B0B");
      }
    })();
  }, []);

  return (
    <section className={styles.footer}>
      <a href="https://status.spheron.network/" className={styles.link}>
        <div style={{ backgroundColor: colorCode }} className={styles.dot}>
          {" "}
        </div>
        <div style={{ fontSize: "12px", color: colorCode }}>
          {status.description}
        </div>
      </a>
      <div
        className="nx-flex nx-items-center"
        style={{ marginLeft: "8px", marginBottom: "4px" }}
      >
        © Copyright 2023
        <a
          href="https://spheron.network"
          target="_blank"
          className={styles.website}
        >
          <span className="nx-mx-2">
            <Image src={Spheron} alt="Logo" width={20} height={20} />
          </span>
          Spheron
        </a>{" "}
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
  );
};

export default Footer;
