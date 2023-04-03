import "./card.css";
import {
  red__star,
  card__headphons__2,
  card__headphons__3,
  card__headphons__4,
  card__headphons__5,
} from "./img";

function Card(props) {
  const {
    color,
    discount,
    price = 20,
    rating = 5,
    title = " Card Text",
  } = props;
  return (
    <div className="tab__card card">
      <div className={color ? "card__product " + color : "card__product green"}>
        <img
          className="card__img"
          src={card__headphons__3}
          alt="card__headphons"
        />
        <div className="card__descr">
          <h4 className="card__text">{title}</h4>
          <div className="card__rating">
            <img src={red__star} alt="rating" />
            <img src={red__star} alt="rating" />
            <img src={red__star} alt="rating" />
            <img src={red__star} alt="rating" />
            <img src={red__star} alt="rating" />
            <p className="card__rating-count">75 Reviews</p>
          </div>

          <p className="card__price">${price}</p>
        </div>
      </div>
      <button className="card__btn button-card">Add to cart</button>
      {discount ? (
        <div
          className={
            color ? `card__discount card__discount_${color}` : "card__discount"
          }
        >
          <p>Save {discount}%</p>
        </div>
      ) : null}
    </div>
  );
}
export default Card;
