import "./Home.scss";
import { images } from "../config/images";
import StoryCard from "../components/StoryCard/StoryCard";

const Home = () => {
  return (
    <div className="home_layout">
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
      <div className="home_main">
        <div className="search_bar card">
          <img
            src={images.searchLogo}
            className="search_logo"
            alt="Search Logo"
          />
          <input type="text" placeholder="Search in social…" />
          <div className="filters_label">FILTERS</div>
        </div>
        <div className="featured_stories card">
          <div className="featured_stories_head">
            <div className="featured_stories_label">Featured Stories</div>
            <button className="see_more">
              <div className="see_more_text">See more</div>
              <img src={images.rightArrow} alt="Right Arrow" />
            </button>
          </div>
          <div className="featured_stories_bar">
            <div className="plus_icon">
              <img src={images.plusIcon} alt="Plus Icon" />
            </div>
            {Object.values(images.storyUsers).map((src, index) => {
              return <StoryCard src={src} key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className="home_right_panel"></div>
    </div>
  );
};

export default Home;
