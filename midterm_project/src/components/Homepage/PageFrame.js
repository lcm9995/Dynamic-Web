import "./PageFrame.css";
import TopBar from "./TopBar";
const PageFrame = (props) => {
    const {title, menuItems, children} = props;
    return (
        <div className = "pg-frame">
            <TopBar title = {title} menuItems = {menuItems} />
            <div className = "pg-frame-content">
                {children}
            </div>
        </div>
    );
};
export default PageFrame;