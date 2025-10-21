import "./WindowImage.css";
import testImg from '../../assets/test.jpg';
const WindowImage = (props) => {
    //const src = props;
    return (
        <div className="window-image">
            <img className="window-image-img" src={testImg} alt="test"/>
        </div>
    );
};

export default WindowImage;