import "./modal.css";
import Overlay from "../Overlay/Overlay";
import RatingLevel from "../RatingLevel/RatingLevel";
import { MainBtn, CloseBtn } from "../Buttons";
import skeleton from "../Card/img/card__headphons__2.png";
function Modal({ data, closeModal, setCountItems }) {
  const {
    color = "green",
    price,
    rating,
    title,
    discription,
    reviews,
    image = { src: skeleton, alt: "headphons" },
  } = data;
  return (
    <Overlay close={closeModal}>
      <div className={`${color} modal`}>
        <CloseBtn close={closeModal} />
        <div className="modal__content">
          <img
            src={image.src}
            alt={image.alt}
            className="modal__content__img"
          />
          <div>
            <h2 className="modal__content__title">{title}</h2>
            <p className="modal__content__text">{discription}</p>
            <div className="modal__content__rating">
              <RatingLevel rating={rating} reviews={reviews} isModal={true} />
            </div>
            <div className="modal__content__price"> Price: {price}</div>
            <div className="modal__content__discription"> {discription}</div>
            <div className="modal__content__btn">
              <MainBtn onClick={setCountItems} textContent={"Buy now"} />
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

export default Modal;
