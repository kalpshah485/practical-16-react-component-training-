import "./StoryCard.scss";

const StoryCard = ({ src, watched }: { src?: string; watched?: boolean }) => {
  return (
    <div className={`story_card${watched ? " grey" : ""}`}>
      <img className="story_card_avatar" src={src} alt="Story Card" />
    </div>
  );
};

export default StoryCard;
