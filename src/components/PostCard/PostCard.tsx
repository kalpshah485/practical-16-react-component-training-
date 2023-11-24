import { images } from "../../config/images";
import "./PostCard.scss";

const PostCard = ({
  style,
  img_url,
}: {
  style?: React.CSSProperties;
  img_url: string;
}) => {
  return (
    <div className="post_card" style={style}>
      <div className="top">
        <div className="top_profile_wrapper">
          <img
            className="post_profile_img"
            src={images.friends[0]}
            alt="Profile Image"
          />
          <div className="username_time">
            <div className="username">Katherine Cole</div>
            <div className="time">5min ago</div>
          </div>
        </div>
        <div className="three_dots">
          <img src={images.optionsLogo} alt="Three Dot" />
        </div>
      </div>
      <div className="main">
        <img className="post_image" src={img_url} alt="post image url" />
        <div className="post_title">
          The Best Fashion Instagrams of the Week: Céline Dion, Lizzo, and More
        </div>
        <div className="post_description">
          If you are looking for a break from the cold, take a cue from Lizzo:
          This week, the singer headed to Disneyland in warm and sunny
          California.
        </div>
        <div className="post_read_more">Read More</div>
      </div>
      <div className="bottom">
        <div className="like_comment_wrapper">
          <div className="wrapper">
            <img className="wrapper_logo" src={images.likeLogo} alt="Like" />
            <div className="wrapper_count">326</div>
          </div>
          <div className="wrapper">
            <div className="wrapper_logo">
              <img src={images.commentLogo} alt="Comment" />
            </div>
            <div className="wrapper_count">148</div>
          </div>
        </div>
        <div className="share">
          <div className="share_text">Share</div>
          <img src={images.shareLogo} alt="Share Logo" className="share_logo" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
