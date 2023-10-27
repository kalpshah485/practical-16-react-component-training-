import ClockSvg from "../../components/ClockSvg/ClockSvg";
import DollarSvg from "../../components/DollarSvg/DollarSvg";
import LeftArrow from "../../components/LeftArrow/LeftArrow";
import LeftIndicator from "../../components/LeftIndicator/LeftIndicator";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import MapSvg from "../../components/MapSvg/MapSvg";
import ProfileNotification from "../../components/ProfileNotification/ProfileNotification";
import RightPanel from "../../components/RightPanel/RightPanel";
import Tag from "../../components/Tag/Tag";
import TickSvg from "../../components/TickSvg/TickSvg";
import Title from "../../components/Title/Title";
import { images } from "../../config/images";
import "./Event.scss";

const Event = () => {
  const friends = [...images.friends, ...images.friends];
  return (
    <div className="home_layout bg_blue">
      <LeftSidebar />
      <LeftIndicator />
      <div className="main_panel">
        <button className="back_btn">
          <div className="back_btn_content">
            <LeftArrow />
            <div className="back_btn_content_text">Back</div>
          </div>
        </button>
        <div className="user_options">
          <div className="user_wrapper">
            <img
              className="profile_pic"
              src={images.profilePhoto}
              alt="Profile Photo"
            />
            <div className="username_time">
              <div className="username">Gunther Ackner</div>
              <div className="time">3 days ago</div>
            </div>
          </div>
          <div className="options">
            <div className="share_btn">
              <img src={images.shareLogo} alt="Share Logo" />
              <div className="share_text">Share</div>
            </div>
            <div className="interested_btn">
              <TickSvg />
              <div className="interested">interested</div>
            </div>
            <div className="three_dots">
              <img src={images.optionsLogo} alt="Three Dot" />
            </div>
          </div>
        </div>
        <img
          className="event_photo"
          src={images.eventPhoto}
          alt="Event Photo"
        />
        <div className="flex2_container">
          <div className="flex_container">
            <div className="svg_container">
              <ClockSvg />
            </div>
            <div className="text_container">
              <div className="primary_text">12 December, 2019 </div>
              <div className="secondary_text">From 9:00am to 6:00pm</div>
            </div>
          </div>
          <div className="flex_container">
            <div className="svg_container">
              <DollarSvg />
            </div>
            <div className="text_container">
              <div className="primary_text">$60 - $90</div>
              <div className="secondary_text">+30% Taxes</div>
            </div>
          </div>
        </div>
        <div className="event_name">2019 DUB Show at Los Angeles Auto Show</div>
        <div className="event_desc_title">Event Description</div>
        <div className="event_description">
          For evidence of the double standard, we need look no farther than
          Arlington, Oregon, where Mayor Carmen Kontur-Gronquist was recalled in
          a 142-139 vote after the town’s denizens discovered that the mayor’s
          MySpace page featured photos of her in lingerie. Although
          Kontur-Gronquist is alleging election fraud and challenging the
          returns, and even though the mayoral position was unpaid, no one is
          arguing that her MySpace page did her in.{" "}
        </div>
        <div className="tags">
          <Tag label="Car" />
          <Tag label="Los Angeles" />
          <Tag label="Exhibition" />
          <Tag label="Auto" />
          <Tag label="DUB" />
          <Tag label="Show" />
        </div>
      </div>
      <div className="white_right_panel">
        <RightPanel>
          <ProfileNotification />
          <div className="address_location">
            <Title label="Address" />
            <img
              className="address_map"
              src={images.mapImage}
              alt="Map Image"
            />
            <div className="address_bottom">
              <div className="map_icon">
                <MapSvg />
              </div>
              <div className="address">
                <div className="first">Los Angeles, CA</div>
                <div className="second">189 The Grove Dr</div>
              </div>
              <button className="direction_btn">Directions</button>
            </div>
          </div>
          <div className="friends">
            <div className="title">Friends Interested</div>
            <div className="users">
              {friends.map((val, index) => {
                return (
                  <div className="user" key={index}>
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
    </div>
  );
};

export default Event;
