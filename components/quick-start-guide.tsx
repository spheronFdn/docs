import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const QUICK_START_LIST = [
  {
    path: "/guides/jupyter-gpu",
    emoji: "🛠️",
    title: "Lease Jupyter Notebook",
    body: "Deploy your own Jupyter Notebook with GPU acceleration.",
  },
  {
    path: "/guides/ollama-server",
    emoji: "✈️",
    title: "Deploy Ollama Server",
    body: "Deploy an Ollama server instance with any ollama model support.",
  },
  {
    path: "/guides/vscode-gpu",
    emoji: "🏆",
    title: "Lease VS Code Server",
    body: "Deploy a browser-accessible VS Code with GPU capabilities.",
  }
];

const QuickStartGuide = () => {
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
            style={styles.card_bigger}
          />
        ))}
      </section>
    </main>
  );
};

export default QuickStartGuide;
