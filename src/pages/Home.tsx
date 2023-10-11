import "./Home.scss";
import { images } from "../config/images";

const Home = () => {
  return (
    <div className="home_layout">
      <div className="right_sidebar">
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
      <div></div>
      <div></div>
    </div>
  );
};

export default Home;
