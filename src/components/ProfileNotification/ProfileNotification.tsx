import { images } from "../../config/images";
import "./ProfileNotification.scss";

const ProfileNotification = () => {
  return (
    <div className="profile_notifications">
      <div className="notification">1</div>
      <img className="profile_pic" src={images.profilePic} alt="Profile Pic" />
    </div>
  );
};

export default ProfileNotification;
