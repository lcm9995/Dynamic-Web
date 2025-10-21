import "./WindowBody.css";

const WindowBody = (props) => {
    const { children } = props;
    return <div className="window-body">{children}</div>;
};
export default WindowBody;