const Message = ({ img_url }: { img_url: string }) => {
  return (
    <div className="message_container">
      <div className="left">
        <div className="profile">
          <img src={img_url} alt="Profile Photo" />
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
  );
};

export default Message;
