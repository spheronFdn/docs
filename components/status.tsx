import { useEffect, useState } from "react";

interface IStatus {
  indicator: string;
  description: string;
}

const Status = () => {
  const [status, setStatus] = useState<IStatus>({
    indicator: "none",
    description: "All Systems Operational",
  });
  const [colorCode, setColorCode] = useState("#00FF00");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://status.spheron.network/api/v2/status.json"
        );
        if (!response.ok) throw new Error("Network response was not ok");

        const colorMapping = {
          none: "#36B37E",
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
    <a
      href="https://status.spheron.network/"
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: "6px",
        marginBottom: "4px",
      }}
    >
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: colorCode,
          borderRadius: "100%",
          marginRight: "6px",
        }}
      >
        {" "}
      </div>
      <div style={{ fontSize: "12px", color: colorCode }}>
        {status.description}
      </div>
    </a>
  );
};

export default Status;
