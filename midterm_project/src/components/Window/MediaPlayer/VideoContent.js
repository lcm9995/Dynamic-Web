import "./VideoContent.css";

const VideoContent = (props) => {
    const {mediaRef, src} = props;
    return (
        <div className="video-content">
            <div className="video-frame">
                <video
                    ref={mediaRef}
                    src={src}
                    className="video-frame"
                    preload="metadata"
                    controls
                />
            </div>
        </div>
    );
};

export default VideoContent;