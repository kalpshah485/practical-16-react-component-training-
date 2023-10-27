import "./Home.scss";
import { images } from "../../config/images";
import StoryCard from "../../components/StoryCard/StoryCard";
import SeeMoreBtn from "../../components/SeeMoreBtn/SeeMoreBtn";
import Oval from "../../components/Oval/Oval";
import RightArrow from "../../components/RightArrow/RightArrow";
import AddFrdSvg from "../../components/AddFrdSvg/AddFrdSvg";
import TickSvg from "../../components/TickSvg/TickSvg";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightPanel from "../../components/RightPanel/RightPanel";
import ProfileNotification from "../../components/ProfileNotification/ProfileNotification";
import Title from "../../components/Title/Title";

const Home = () => {
  const users = [
    {
      name: "Cammy Hedling",
      address: "Los Angeles, CA",
      profileImage: images.profilePhoto,
    },
    {
      name: "Cammy Hedling",
      address: "Los Angeles, CA",
      profileImage: images.profilePhoto,
    },
    {
      name: "Cammy Hedling",
      address: "Los Angeles, CA",
      profileImage: images.profilePhoto,
    },
  ];
  return (
    <div className="home_layout">
      <LeftSidebar />
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
        <div className="featured_stories card mb-3">
          <div className="featured_stories_head">
            <div className="featured_stories_label">Featured Stories</div>
            <SeeMoreBtn />
          </div>
          <div className="featured_stories_bar">
            <div className="plus_icon">
              <img src={images.plusIcon} alt="Plus Icon" />
            </div>
            {Object.values(images.storyUsers).map((src, index) => {
              return <StoryCard watched={index === 2} src={src} key={index} />;
            })}
            <StoryCard src={images.storyUsers.user8} key={99} />
            <StoryCard src={images.storyUsers.user8} key={100} />
            <StoryCard src={images.storyUsers.user8} key={101} />
            <StoryCard src={images.storyUsers.user8} key={102} />
            <StoryCard src={images.storyUsers.user8} key={103} />
            <StoryCard src={images.storyUsers.user8} key={104} />
          </div>
        </div>
        <div className="new_post card mb-3">
          <div className="user_wrapper">
            <div className="user_profile_wrapper">
              <img
                className="user_profile_photo"
                src={images.profilePhoto}
                alt="Profile Photo"
              />
              <input
                className="post_input"
                type="text"
                placeholder="What are you thinking? "
              />
            </div>
            <div className="three_dots">
              <img src={images.optionsLogo} alt="Three Dot" />
            </div>
          </div>
          <div className="bottom_panel">
            <div className="icons">
              <div className="icon">
                <img src={images.cameraLogo} alt="" />
              </div>
              <div className="icon">
                <img src={images.videoLogo} alt="" />
              </div>
              <div className="icon">
                <img src={images.plusGray} alt="" />
              </div>
            </div>
            <button className="share_btn">Share</button>
          </div>
        </div>
        <div className="feed_post card">
          <div className="top">
            <div className="top_profile_wrapper">
              <img
                className="post_profile_img"
                src={images.postProfileImage}
                alt="Profile Image"
              />
              <div className="username_time">
                <div className="username">Dustin Houston</div>
                <div className="time">5min ago</div>
              </div>
            </div>
            <div className="three_dots">
              <img src={images.optionsLogo} alt="Three Dot" />
            </div>
          </div>
          <div className="post_description">
            Whether its a driving tour, a cruise or a bus, leaf viewing is a
            great way to spend a fall vacation 😂
          </div>
          <div className="photos">
            {Object.values(images.postImages).map((val, index) => {
              return (
                <img
                  className={`post_image${index + 1} img`}
                  key={index}
                  src={val}
                  alt="Post Photos"
                />
              );
            })}
            <div className="more_posts">
              <img
                className="camera_logo"
                src={images.cameraBlackLogo}
                alt="Camera Logo"
              />
              <div className="remaining_posts">15</div>
            </div>
          </div>
          <div className="bottom">
            <div className="like_comment_wrapper">
              <div className="wrapper">
                <img
                  className="wrapper_logo"
                  src={images.likeLogo}
                  alt="Like"
                />
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
              <img
                src={images.shareLogo}
                alt="Share Logo"
                className="share_logo"
              />
            </div>
          </div>
        </div>
      </div>
      <RightPanel>
        <ProfileNotification />
        <div className="premium_card">
          <div className="premium_card_wrapper">
            <div className="premium_text">Go Premium!</div>
            <div className="premium_desc">
              Try premium membership and enjoy a full experience of our
              community.
            </div>
            <SeeMoreBtn
              style={{
                backgroundColor: "rgba(30, 31, 32, 0.20)",
                color: "#fff",
              }}
              invert
            />
          </div>
          <div className="red_oval">
            <Oval
              style={{ height: "1.9rem", width: "1.9rem" }}
              radius="0.95rem"
              fill="rgba(30, 31, 32, 0.20)"
            />
          </div>
          <div className="green_oval">
            <Oval
              style={{
                height: "8.7rem",
                width: "8.7rem",
              }}
              radius="4.35rem"
              fill="#53D769"
            />
          </div>
          <div className="blue_oval">
            <Oval
              style={{
                height: "27.7rem",
                width: "27.7rem",
              }}
              radius="13.85rem"
              fill="#79D0F1"
            />
          </div>
        </div>
        <div className="who_to_follow">
          <Title label="Who to Follow" />
          <div className="recommend_follow">
            {users.map(({ address, name, profileImage }) => {
              return (
                <div className="user">
                  <img
                    className="profile_pic"
                    src={profileImage}
                    alt="profile pic"
                  />
                  <div className="name_address">
                    <div className="name">{name}</div>
                    <div className="address">{address}</div>
                  </div>
                  <div className="add_frd_btn">
                    <AddFrdSvg />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="see_more">
            <div className="see_more_text">SEE MORE</div>
            <RightArrow />
          </div>
        </div>
        <div className="friends">
          <Title label="Friends" />
          <div className="users">
            {images.friends.map((val) => {
              return (
                <div className="user">
                  <img className="profile_pic" src={val} alt="profile pic" />
                  <div className="name">MadeInAmerica</div>
                  <div className="tick_btn">
                    <TickSvg />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RightPanel>
    </div>
  );
};

export default Home;
