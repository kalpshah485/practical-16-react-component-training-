import DownloadSvg from "../DownloadSvg/DownloadSvg";
import EmailSvg from "../EmailSvg/EmailSvg";
import "./NoMessage.scss";

const NoMessage = () => {
  return (
    <div className="empty_message">
      <div className="email_svg_container">
        <EmailSvg />
      </div>
      <div className="top_message">It's nice to chat with someone</div>
      <div className="center_message">
        Pick a person from left menu and start your conversation
      </div>
      <div className="bottom_message">
        <DownloadSvg />
        <div className="avail_for_mac">Social is available for Mac</div>
        <button className="download_btn">Download it now</button>
      </div>
    </div>
  );
};

export default NoMessage;
