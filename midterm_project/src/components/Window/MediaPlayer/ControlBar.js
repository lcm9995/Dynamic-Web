import "./ControlBar.css";
import ControlButton from "./ControlButton";

const ControlBar = (props) => {
    const {onPlay, onPause} = props;
    return (
        <div className="control-bar">
            <ControlButton buttonType="restart" />
            <ControlButton buttonType="play" onClick={onPlay}/>
            <ControlButton buttonType="pause" onClick={onPause} />
            <ControlButton buttonType="ff"/>
            <ControlButton buttonType="volume"/>
        </div>
    );
};

export default ControlBar;