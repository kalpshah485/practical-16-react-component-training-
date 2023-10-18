import { images } from "../../config/images";
import "./LeftSidebar.scss";

const LeftSidebar = () => {
  return (
    <div className="left_sidebar">
      <div className="logo">
        <img src={images.logo} alt="Logo" />
      </div>
      <div className="navigation">
        <div className="navigation_logo_wrapper active">
          <img
            className="nav_logo"
            src={images.navigation.home}
            alt="Home Logo"
          />
        </div>
        <div className="navigation_logo_wrapper">
          <img
            className="nav_logo"
            src={images.navigation.calender}
            alt="Calender Logo"
          />
        </div>
        <div className="navigation_logo_wrapper">
          <img
            className="nav_logo"
            src={images.navigation.message}
            alt="Message Logo"
          />
        </div>
        <div className="navigation_logo_wrapper">
          <img
            className="nav_logo"
            src={images.navigation.user}
            alt="User Logo"
          />
        </div>
        <div className="navigation_logo_wrapper">
          <img
            className="nav_logo"
            src={images.navigation.settings}
            alt="Settings Logo"
          />
        </div>
      </div>
      <div className="logout_wrapper">
        <div className="navigation_logo_wrapper logout">
          <img src={images.logout} alt="Logout Logo" />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;