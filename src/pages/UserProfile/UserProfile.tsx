import BackButton from "../../components/BackButton/BackButton";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import MessageSvgBlack from "../../components/MessageSvgBlack/MessageSvgBlack";
import NavTabWithDot from "../../components/NavTabWithDot/NavTabWithDot";
import PostCard from "../../components/PostCard/PostCard";
import ProfileNotification from "../../components/ProfileNotification/ProfileNotification";
import RightPanel from "../../components/RightPanel/RightPanel";
import ThreeDotSvg from "../../components/ThreeDotSvg/ThreeDotSvg";
import TickSvg from "../../components/TickSvg/TickSvg";
import constants from "../../config/constants";
import { images } from "../../config/images";
import "./UserProfile.scss";

const UserProfile = () => {
  return (
    <div className="user_profile_layout">
      <LeftSidebar />
      <div className="user_profile_main">
        <BackButton />
        <div className="user_profile_card_wrapper">
          <div className="user_profile_card">
            <img
              className="user_profile_img"
              src={images.profilePhoto}
              alt="User Profile"
            />
            <div className="full_name">Edward Ford</div>
            <div className="user_name">@edwardford</div>
          </div>
          <div className="counter_wrapper">
            <div className="counter">
              <div className="count">518</div>
              <div className="label">Posts</div>
            </div>
            <div className="counter">
              <div className="count">22k</div>
              <div className="label">Friends</div>
            </div>
          </div>
          <div className="buttons_wrapper">
            <button className="frds_btn">
              <TickSvg />
              <div className="label">Friends</div>
            </button>
            <button className="msg_btn">
              <MessageSvgBlack />
            </button>
            <button className="option_btn">
              <ThreeDotSvg />
            </button>
          </div>
          <div className="about_wrapper">
            <div className="label">about</div>
            <div className="description">
              <div>Travel, Adventure & Lifestyle</div>
              <div>Photographer & Digital Influencer</div>
              <div>Nikon Ambassador</div>
              <div>Let's Work: </div>
              <div>ed.ford@mail.com</div>
            </div>
          </div>
          <div className="friends_wrapper">
            <div className="label">Friends</div>
            <div className="frd_grid">
              {images.friends.map((img_url) => (
                <img className="frd_photo" src={img_url} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <RightPanel>
        <div className="right_panel_nav">
          <NavTabWithDot navTabItems={constants.navTabRightPanel} />
          <ProfileNotification />
        </div>
        <div className="posts">
          {images.postCardImages.map((img_url, index) => {
            return (
              <PostCard
                img_url={img_url}
                style={{
                  height: (index + 1) % 2 === 0 ? "56.2rem" : "52.2rem",
                  width: (index + 1) % 2 === 0 ? "33.2rem" : "41.6rem",
                  zIndex: index + 1,
                  top: index > 1 ? (index + 1) % 2 === 0 ? "59.2rem" : "55.2rem" : 0,
                }}
              />
            );
          })}
        </div>
      </RightPanel>
    </div>
  );
};

export default UserProfile;
