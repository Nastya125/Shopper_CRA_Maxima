import "./ratingLevel.css";
import red__star from "./img/red__star.svg";
function RatingLevel({ rating = 1, reviews, isModal = false }) {
  const level = [];

  for (let i = 0; i < rating; i++) {
    level.push(<img src={red__star} alt="rating" key={i} />);
  }

  return (
    <div className="rating">
      {level}
      <p className={`rating-count ${isModal ? "rating-count_modal " : ""}`}>
        {reviews} Reviews
      </p>
    </div>
  );
}
export default RatingLevel;
