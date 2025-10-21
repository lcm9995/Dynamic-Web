import "./MediaPlayer.css";
import { useRef} from "react";
import VideoContent from "./VideoContent";
import AudioContent from "./AudioContent";
import ControlBar from "./ControlBar";

const MediaPlayer = (props) => {
    const { mediaType = "audio", mediaTitle = "Untitled", src } = props;
    const mediaRef = useRef(null);
    //const [isDragging, setIsDragging] = useState(false);
   // const onStart = () => setIsDragging(true);
    //const [isMuted, setIsMuted] = useState(false);

    const onPlay = () => {
        if (mediaRef.current) mediaRef.current.play();
    };
    const onPause = () => {
        if (mediaRef.current) mediaRef.current.pause();
    };
    /*const onRestart = () => {
        if (videoRef.current){
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    }*/
    /*const onToggleMute = () => {
        if
    }*/
  return (
    <div className="media-player">
      <div className="media-player-title">{mediaTitle}</div>
      {mediaType === "video" ? <VideoContent mediaRef={mediaRef} src={src}/> : <AudioContent mediaRef={mediaRef} src={src} />}
      <ControlBar onPlay={onPlay} onPause = {onPause} />
    </div>
  );
};

export default MediaPlayer;