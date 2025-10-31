import "./FileBrowser.css";
import vidImg from "../../../assets/icons/mp4.png";
import imgImg from  "../../../assets/icons/image.png";

const FileBrowserWindow = (props) => {
  const { type = "images", items = [], onOpen } = props;

  const handleOpen = (item) => {
    if (onOpen) onOpen(item);
  };
  let iconSrc = "";
  if (type=="images"){
    iconSrc = imgImg;
  }else{
    iconSrc = vidImg;
  }

  return (
    <div className="fb">
      <div className="fb-grid">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className="fb-item"
            onClick={() => handleOpen(item)}
            title={item.name}
          >
            <img className="fb-icon" src={iconSrc} alt={item.name} />
            <div className="fb-name">{item.name}</div>
          </button>
        ))}

        {items.length === 0 && <div className="fb-empty">No items found.</div>}
      </div>
    </div>
  );
};
export default FileBrowserWindow;
