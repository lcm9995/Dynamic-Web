import {useState, useRef} from "react";
import './Window.css';
import WindowTopBar from "./WindowTopBar";
import WindowBody from "./WindowBody";
import WindowImage  from "./WindowImage";
import WindowMessage from "./WindowMessage";
import MediaPlayer from "./MediaPlayer/MediaPlayer";
import Draggable from 'react-draggable'; 
const Window = (props) => {
    const {title="New Window", type, messageText, mediaSrc, mediaType="video", onClose} = props;
    //const [isVisible, setIsVisable] = useState(true);
    const nodeRef = useRef(null); // from https://www.windmill.dev/blog/react-draggable-component
    const handleClose = () => {
        if (onClose) onClose();
    }
    //const displayTitle = type ==="media" ? "Media Player" : title;
    let displayTitle = title;
    let mediaTitle = "";
    if (type==="media"){
        displayTitle = "Media Player";
        mediaTitle = title;
    }/*else if (type==="image"){
        //const img_path_split = imageSrc.split("/");
        //displayTitle = img_path_split[img_path_split.length-1];
        displayTitle = "Image Viewer"
    } else if (type == "message"){
        displayTitle = "New Window";
    }*/

    return (
        <Draggable nodeRef={nodeRef}> 
            <div className = "window" ref={nodeRef}>
                {/* ^ SOURCE: from https://www.windmill.dev/blog/react-draggable-component*/}
                <WindowTopBar title = {displayTitle} onClose={handleClose}/>
                <WindowBody>
                    {type==="message" ? <WindowMessage message = {messageText} buttonLabel="OK" onClose={handleClose} />: null}
                    {type==="image" ? <WindowImage src = {mediaSrc}/> : null }
                    {type==="media" ? <MediaPlayer mediaType={mediaType} mediaTitle={mediaTitle} src={mediaSrc}/> : null}
                </WindowBody>
            </div>
        </Draggable>
    );
};
export default Window;