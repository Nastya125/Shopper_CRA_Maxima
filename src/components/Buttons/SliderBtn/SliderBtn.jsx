import "./sliderBtn.css";
import arrow from "./img/arrow.svg";

const SliderButton = ({
  direction = "right",
  className,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`slider-btn ${className} ${
        direction === "left" ? "slider-btn_left" : "slider-btn_right"
      }`}
    >
      <img src={arrow} />
    </button>
  );
};
export default SliderButton;
