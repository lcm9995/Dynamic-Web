import "./TopBar.css";
const TopBar = (props)=> {
    const {title = "Website Title", menuItems = ["About"]}=props;
    return (
        <div className = "top-bar">
            <div className = "top-bar-menu">
                {menuItems.map((m=>
                    <span key = {m} className = "top-bar-menu-option">{m}</span>
                ))}
            </div>
             <div className = "top-bar-title">{title}</div>
             <div className = "top-bar-right"></div>
        </div>
       

    );
};
export default TopBar;