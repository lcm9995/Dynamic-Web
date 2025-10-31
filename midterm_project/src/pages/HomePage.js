import "./HomePage.css";
import TaskBar from "../components/Homepage/TaskBar";
import AppIcon from "../components/Homepage/AppIcon";
import Window from "../components/Window/Window";
import testImg from "../assets/test.jpg";
import PageFrame from "../components/Homepage/PageFrame";
import galleryIcon from "../assets/icons/gallery.png";
import musicIcon from "../assets/icons/music.png";
import vlcIcon from "../assets/icons/vlc.png";
import emailIcon from "../assets/icons/gmail.png";
import sound from "../assets/caroline.mp3";
import {useState} from "react";
import img1 from "../assets/gallery/joey.jpg";
import img2 from "../assets/gallery/balloons_pic.jpg";
import img3 from "../assets/gallery/cards_pic.jpg";
import img4 from "../assets/gallery/disks_pic.jpg";
import img5 from "../assets/gallery/jeans_pic.jpg";
import testVid from "../assets/videos/short.mp4";
import edHardy from "../assets/videos/EdHardy.mp4";

const HomePage = () => {

    const galleryFiles = [
        {id: 1, name: "one.jpg", src: img1},
        {id: 2, name: "two.jpg", src: img2},
        {id: 3, name: "three.jpg", src: img3},
        {id: 4, name: "four.jpg", src: img4},
        {id: 5, name: "five.jpg", src: img5},
    ];

    const videoFiles = [
        {id: 1, name: "Bad News.mp4", src: testVid},
        {id: 2, name: "Ed Hardy Man.mp4", src: edHardy},
    ];

    const [showVideo, setShowVideo] = useState(false);
    const [showAudio, setShowAudio] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showMsg, setShowMsg] = useState(true);
    const [showImageBrowser, setShowImageBrowser] = useState(false);
    const [showVideoBrowser, setShowVideoBrowser] = useState(false);

    const [currentImageSrc, setCurrentImageSrc] = useState(null);
    const [currentVideoSrc, setCurrentVideoSrc] = useState(null);
    
    const openImageBrowser = () => setShowImageBrowser(true);
    const openVideoBrowser = () => setShowVideoBrowser(true);
    const openVideo = () => setShowVideo(true);
    const openAudio = () => setShowAudio(true);
    const openImage = () => setShowImage(true);
    const openMsg = () =>setShowMsg(true);

    const closeImageBrowser = () => setShowImageBrowser(false);
    const closeVideoBrowser = () => setShowVideoBrowser(false);
    const closeVideo = () => setShowVideo(false);
    const closeAudio = () => setShowAudio(false);
    const closeImage = () => setShowImage(false);
    const closeMsg = () => setShowMsg(false);

    const handleOpenImageFromBrowser = (item) => {
        setCurrentImageSrc(item.src);
        setShowImage(true);
        setShowImageBrowser(false);
    };

    const handleOpenVideoFromBrowser = (item) => {
        setCurrentVideoSrc(item.src);
        setShowVideo(true);
        setShowVideoBrowser(false);
    }

    return (
            <div className="home-pg">
                <div className="window-spot" style={{ top: 40, left: 32 }}>
                    <Window type="message" messageText="Welcome to Portfolio Website." onClose={closeMsg}/>
                </div>
                {showImage && (<div className="window-spot" style={{ top: 50, right: 400 }}>
                    <Window type="image" mediaSrc={currentImageSrc} onClose = {closeImage} />
                </div>)}
                {showVideo && (<div className="window-spot" style={{ top: 320, left: 120 }}>
                    <Window type="media" mediaType="video" mediaSrc={currentVideoSrc} title = "Paradise.mp4" onClose={closeVideo}/>
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
                    <AppIcon label="Video Player" iconSrc={vlcIcon} onDoubleClick = {openVideoBrowser} />
                    <AppIcon label="Gallery" iconSrc={galleryIcon} onDoubleClick={openImageBrowser} />
                    {/*<AppIcon label="Contact" iconSrc={emailIcon} />*/}
                </div>
                 {showImageBrowser && (<div className="window-spot" style={{ top: 80, left: 240 }}>
                    <Window type="browser"
                        title="Gallery"
                        browserType="images"
                        browserItems={galleryFiles}
                        onOpen={handleOpenImageFromBrowser}
                        onClose={closeImageBrowser}/>
                </div>)}
                {showVideoBrowser && (
                    <div className="window-spot" style={{ top: 180, left: 300 }}>
                        <Window
                        type="browser"
                        title="Video Library"
                        browserType="videos"
                        browserItems={videoFiles}
                        onOpen={handleOpenVideoFromBrowser}
                        onClose={closeVideoBrowser}
                        />
                    </div>)}
                <TaskBar/>
                </div>
    )
}
export default HomePage;