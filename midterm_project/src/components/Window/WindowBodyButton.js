import "./WindowBodyButton.css";

const WindowBodyButton = (props) => {
    const {label = "OK", onClick} = props;
    return (
        <div className = "window-content-button" onClick={onClick}>
            {label}
        </div>
    );
};

export default WindowBodyButton;