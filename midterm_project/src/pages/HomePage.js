import "./HomePage.css";
import TaskBar from "../components/Homepage/TaskBar";
import AppIcon from "../components/Homepage/AppIcon";
import {FaClapperboard, FaMusic} from "react-icons/fa6";
import {FaInfo} from "react-icons/fa";
import Window from "../components/Window/Window";
import testImg from "../assets/test.jpg";
import testVid from "../assets/paradise_cut.mp4";
import PageFrame from "../components/Homepage/PageFrame";
import galleryIcon from "../assets/icons/gallery.png";
import musicIcon from "../assets/icons/music.png";
import vlcIcon from "../assets/icons/vlc.png";
import emailIcon from "../assets/icons/gmail.png";
import sound from "../assets/caroline.mp3";
import {useState} from "react";

const HomePage = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [showAudio, setShowAudio] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showMsg, setShowMsg] = useState(true);
    
    const openVideo = () => setShowVideo(true);
    const openAudio = () => setShowAudio(true);
    const openImage = () => setShowImage(true);
    const openMsg = () =>setShowMsg(true);

    const closeVideo = () => setShowVideo(false);
    const closeAudio = () => setShowAudio(false);
    const closeImage = () => setShowImage(false);
    const closeMsg = () => setShowMsg(false);

    return (
            <div className="home-pg">
                <div className="window-spot" style={{ top: 40, left: 32 }}>
                    <Window type="message" messageText="Welcome to Portfolio Website." onClose={closeMsg}/>
                </div>
                {showImage && (<div className="window-spot" style={{ top: 50, right: 400 }}>
                    <Window type="image" mediaSrc={testImg} onClose = {closeImage} />
                </div>)}
                {showVideo && (<div className="window-spot" style={{ top: 320, left: 120 }}>
                    <Window type="media" mediaType="video" mediaSrc={testVid} title = "Paradise.mp4" onClose={closeVideo}/>
                </div>)}
                 {showAudio && (<div className="window-spot" style={{ bottom: 60, right: 100}}>
                    <Window type="media" mediaType="audio" mediaSrc={sound} title="song.mp3"  onClose={closeAudio}/>
                </div>)}

            {/*} <FaInfo size={64} color="white" />
                <AppIcon label="Music" iconElement={<FaMusic size={48} color="#fff" />}/>
                <AppIcon label="Video Player" reactIcon={<FaClapperboard size={48} color="#fff" />}/>
                <AppIcon label="Info" reactIcon={<FaInfo size={48} color="#fff" />}/>
            */}
                <div className="app-icons-container">
                    <AppIcon label="Music" iconSrc={musicIcon} onDoubleClick={openAudio} />
                    <AppIcon label="Video Player" iconSrc={vlcIcon} onDoubleClick = {openVideo} />
                    <AppIcon label="Gallery" iconSrc={galleryIcon} onDoubleClick={openImage} />
                    {/*<AppIcon label="Contact" iconSrc={emailIcon} />*/}
                </div>
                <TaskBar/>
            </div>
    )
}
export default HomePage;