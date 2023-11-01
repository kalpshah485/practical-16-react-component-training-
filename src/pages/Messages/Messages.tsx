import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import MessageSvg from "../../components/MessageSvg/MessageSvg";
import NoMessage from "../../components/NoMessage/NoMessage";
import ProfileNotification from "../../components/ProfileNotification/ProfileNotification";
import RightPanel from "../../components/RightPanel/RightPanel";
import { images } from "../../config/images";
import "./Messages.scss";

const Messages = () => {
  return (
    <div className="message_layout">
      <LeftSidebar />
      <div className="message_main">
        <div className="header">
          <div className="search_bar">
            <img
              src={images.searchLogo}
              className="search_logo"
              alt="Search Logo"
            />
            <input
              type="text"
              className="search_bar_input"
              placeholder="Search in social…"
            />
          </div>
          <div className="message_icon">
            <MessageSvg />
          </div>
        </div>
        <div className="message_title_box">
          <div className="inbox_title">Inbox</div>
          <div className="navtab">
            <div className="nav_item active">
              <div className="nav_text">Direct Messages</div>
              <div className="dot"></div>
            </div>
            <div className="nav_item">
              <div className="nav_text">Group Chat</div>
              <div className="dot"></div>
            </div>
            <div className="nav_item">
              <div className="nav_text">Archived</div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <div className="messages_container">
          <div className="message_container">
            <div className="left">
              <div className="profile">
                <img src={images.profilePhoto} alt="Profile Photo" />
                <div className="dot"></div>
              </div>
              <div className="name_message">
                <div className="name">Billy Green</div>
                <div className="message">Thank you for sharing</div>
              </div>
            </div>
            <div className="right">
              <div className="time">3:03pm</div>
              <div className="pending_messages">1</div>
            </div>
          </div>
          <div className="message_container">
            <div className="left">
              <div className="profile">
                <img src={images.profilePhoto} alt="Profile Photo" />
                <div className="dot"></div>
              </div>
              <div className="name_message">
                <div className="name">Billy Green</div>
                <div className="message">Thank you for sharing</div>
              </div>
            </div>
            <div className="right">
              <div className="time">3:03pm</div>
              <div className="pending_messages">1</div>
            </div>
          </div>
          <div className="message_container">
            <div className="left">
              <div className="profile">
                <img src={images.profilePhoto} alt="Profile Photo" />
                <div className="dot"></div>
              </div>
              <div className="name_message">
                <div className="name">Billy Green</div>
                <div className="message">Thank you for sharing</div>
              </div>
            </div>
            <div className="right">
              <div className="time">3:03pm</div>
              <div className="pending_messages">1</div>
            </div>
          </div>
          <div className="message_container">
            <div className="left">
              <div className="profile">
                <img src={images.profilePhoto} alt="Profile Photo" />
                <div className="dot"></div>
              </div>
              <div className="name_message">
                <div className="name">Billy Green</div>
                <div className="message">Thank you for sharing</div>
              </div>
            </div>
            <div className="right">
              <div className="time">3:03pm</div>
              <div className="pending_messages">1</div>
            </div>
          </div>
          <div className="message_container">
            <div className="left">
              <div className="profile">
                <img src={images.profilePhoto} alt="Profile Photo" />
                <div className="dot"></div>
              </div>
              <div className="name_message">
                <div className="name">Billy Green</div>
                <div className="message">Thank you for sharing</div>
              </div>
            </div>
            <div className="right">
              <div className="time">3:03pm</div>
              <div className="pending_messages">1</div>
            </div>
          </div>
          <div className="message_container">
            <div className="left">
              <div className="profile">
                <img src={images.profilePhoto} alt="Profile Photo" />
                <div className="dot"></div>
              </div>
              <div className="name_message">
                <div className="name">Billy Green</div>
                <div className="message">Thank you for sharing</div>
              </div>
            </div>
            <div className="right">
              <div className="time">3:03pm</div>
              <div className="pending_messages">1</div>
            </div>
          </div>
          <div className="message_container">
            <div className="left">
              <div className="profile">
                <img src={images.profilePhoto} alt="Profile Photo" />
                <div className="dot"></div>
              </div>
              <div className="name_message">
                <div className="name">Billy Green</div>
                <div className="message">Thank you for sharing</div>
              </div>
            </div>
            <div className="right">
              <div className="time">3:03pm</div>
              <div className="pending_messages">1</div>
            </div>
          </div>
          <div className="message_container">
            <div className="left">
              <div className="profile">
                <img src={images.profilePhoto} alt="Profile Photo" />
                <div className="dot"></div>
              </div>
              <div className="name_message">
                <div className="name">Billy Green</div>
                <div className="message">Thank you for sharing</div>
              </div>
            </div>
            <div className="right">
              <div className="time">3:03pm</div>
              <div className="pending_messages">1</div>
            </div>
          </div>
        </div>
      </div>
      <RightPanel>
        <ProfileNotification />
        <NoMessage />
      </RightPanel>
    </div>
  );
};

export default Messages;
