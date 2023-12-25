import styles from "../styles/player.module.css";

const VideoPlayer = ({ embedId }) => {
  return (
    <div>
      <iframe
        className={styles.frame}
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default VideoPlayer;
