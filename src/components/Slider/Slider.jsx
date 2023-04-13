import { useEffect, useState, useRef } from "react";
import "./slider.css";
import Card from "../Card/Card";
import { SliderBtn } from "../Buttons";

function getWidthSlider(countCard) {
  const widthCard = 361;
  const gap = 93;
  return widthCard * countCard + gap * (countCard - 1);
}

function Slider({ data = [], openModal }) {
  const [countCard, setCountCard] = useState(0);

  const widthSlider = getWidthSlider(countCard);

  const slider = useRef(null);

  useEffect(() => {
    setCountCard(data.length);
  }, [data]);

  function scrollBack() {
    slider.current.scrollLeft -= 361 + 93;
  }
  function scrollNext() {
    slider.current.scrollLeft += 361 + 93;
  }

  return (
    <div className="slider_overlay">
      <SliderBtn onClick={scrollBack} direction="left" />
      <div ref={slider} className="slider_wrapper">
        <div className="slider" style={{ width: widthSlider + "px" }}>
          {data
            ? data.map((item, index) => {
                return (
                  <Card
                    key={index}
                    data={item}
                    openModal={openModal}
                    className="slider__card"
                  />
                );
              })
            : null}
        </div>
      </div>
      <SliderBtn onClick={scrollNext} />
    </div>
  );
}

export default Slider;
