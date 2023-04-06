import "./modal.css";
import red__star from "../Card/img/red__star.svg";
import skeleton from "../Card/img/card__headphons__2.png";
function Modal(props) {
  const {
    color,
    discount,
    price = 20,
    rating = 5,
    title = " Card Text",
    image = { src: skeleton, alt: "headphons" },
  } = props;

  return (
    <div className="modal">
      <button onClick={() => props.close(false)} className="close">
        x
      </button>
      <div className="tab__card card modal">
        <div
          className={
            color ? "card__product_modal " + color : "card__product_modal green"
          }
        >
          <img
            className="card__img card__img_modal-size"
            src={image.src}
            alt={image.alt}
          />
          <div className="card__descr card__descr_modal">
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
            <p className="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, repudiandae fuga. Earum officia cumque accusamus
              accusantium maxime? Soluta laudantium facilis debitis sequi,
              placeat dignissimos neque nam eius numquam id sunt rem porro
              maiores.
            </p>
          </div>
        </div>
        <button className="card__btn button-card modal-btn">Add to cart</button>
        {discount ? (
          <div
            className={
              color
                ? `card__discount card__discount_${color}`
                : "card__discount"
            }
          >
            <p>Save {discount}%</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Modal;
