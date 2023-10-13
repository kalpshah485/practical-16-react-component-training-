import { images } from "../../config/images";
import "./SeeMoreBtn.scss";

const SeeMoreBtn = ({
  style,
  invert,
}: {
  style?: React.CSSProperties;
  invert?: boolean;
}) => {
  return (
    <button className="see_more" style={style}>
      <div className="see_more_text">See more</div>
      <img
        style={invert ? { filter: "invert(1)" } : {}}
        src={images.rightArrow}
        alt="Right Arrow"
      />
    </button>
  );
};

export default SeeMoreBtn;
