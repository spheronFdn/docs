import styles from "@/styles/player.module.css";
import { FC } from "react";
interface IVideoPlayer {
  embedId: string;
}

const VideoPlayer: FC<IVideoPlayer> = ({ embedId }) => {
  return (
    <div>
      <iframe
        className={styles.frame}
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default VideoPlayer;
