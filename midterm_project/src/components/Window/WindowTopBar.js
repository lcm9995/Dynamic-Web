import React from "react";
import "./WindowTopBar.css";
import WindowTopButton from "./WindowTopButton";

const WindowTopBar = (props) => {
    const {title, onClose} = props;
    return (
        <div className = "window-top-bar">
            <div className = "window-top-bar-title">{title}</div>
            <div className = "window-top-bar-buttons">
                <WindowTopButton type ="close" onClick={onClose}/>
            </div>
        </div>
    );
};
export default WindowTopBar;