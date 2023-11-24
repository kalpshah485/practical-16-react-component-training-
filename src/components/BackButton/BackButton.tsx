import LeftArrow from "../LeftArrow/LeftArrow";
import './BackButton.scss'

const BackButton = () => {
  return (
    <button className="back_btn">
      <div className="back_btn_content">
        <LeftArrow />
        <div className="back_btn_content_text">Back</div>
      </div>
    </button>
  );
};

export default BackButton;
