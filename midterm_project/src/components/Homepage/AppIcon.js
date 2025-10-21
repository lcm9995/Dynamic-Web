import "./AppIcon.css";
import {useState, useRef} from "react";
//import Draggable from "react-draggable";
const AppIcon = (props) => {
    const {label = "", iconSrc, reactIcon, href, onDoubleClick } = props;
    //const nodeRef = useRef(null);  // source from https://www.windmill.dev/blog/react-draggable-component
    let icon;

    if (reactIcon){
        icon = <div className = "app-icon-image">{reactIcon}</div>
    } else if (iconSrc){
        icon = <img className="app-icon-image" src = {iconSrc} alt = {label} />;
    } else {
        icon = null;
    }
    if (href) {     
        return (
                <a className = "app-icon-link" href = {href} target = "_blank" >
                    <div className = "app-icon">
                        {icon} 
                        < div className="app-icon-label">
                            {label}
                        </div>
                    </div>
                </a> 
        );
     } else {
        return(
                <div onDoubleClick={onDoubleClick}>
                    <div className = "app-icon">
                        {icon}
                        < div className="app-icon-label">
                            {label}
                        </div>
                    </div>
                </div>
        );
    ;}
};
export default AppIcon;