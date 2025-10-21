import "./MediaPlayer.css";
const AudioContent = ({ mediaRef, src }) => {
  return (
    <div className="audio-content">
      <audio ref={mediaRef} src={src} />
    </div>
  );
};
export default AudioContent;