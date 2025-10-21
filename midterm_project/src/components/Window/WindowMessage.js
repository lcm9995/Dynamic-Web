import "./WindowMessage.css";
import WindowBodyButton from "./WindowBodyButton"

const WindowMessage = (props) => {
    const {message, buttonLabel = "OK", onClose} = props;
    return (
        <>
            <div className="window-message">
            <div className = "window-message-text">{message}</div>
            </div>
            <div className="window-message__actions">
                <WindowBodyButton label={buttonLabel} onClick={onClose} />
            </div>
        </>
    );
};
export default WindowMessage;