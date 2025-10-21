import "./ControlButton.css";

const ControlButton = (props) => {
    const {buttonType="play", onClick} = props;
    const icons = {
        play: "▶",
        pause: "⏸",
        ff: "⏭",
        restart: "⏮",
        volume: "🔊"
    };
    const label = icons[buttonType];
    return (
        <div className = "control-button" onClick={onClick}>
            {label}
        </div>
    );
};
export default ControlButton;