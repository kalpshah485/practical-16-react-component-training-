import './StoryCard.scss'

const StoryCard = ({ src }: { src?: string }) => {
  return (
    <div className="story_card">
      <img className="story_card_avatar" src={src} alt="Story Card" />
    </div>
  );
};

export default StoryCard;
