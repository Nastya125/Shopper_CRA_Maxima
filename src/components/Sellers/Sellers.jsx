import { useState } from "react";
import Card from "../Card/Card";
import "./sellers.css";
function Sellers() {
  const [curentTab, setCurentTab] = useState(0);
  return (
    <section className="sellers">
      <h2 className="sellers__title sellers__title-margin-bt">Top Sellers</h2>
      <div className="tab container">
        <div className="tab__btn-wrapper">
          <button
            onClick={() => setCurentTab(0)}
            className={
              curentTab === 0 ? "button-oval button-oval_active" : "button-oval"
            }
          >
            0
          </button>
          <button
            onClick={() => setCurentTab(1)}
            className={
              curentTab === 1 ? "button-oval button-oval_active" : "button-oval"
            }
          >
            1
          </button>
        </div>
        {curentTab === 0 ? (
          <div className="tab__card-wrapper">
            <Card discount={60} title="Boat Rockerz 333" price={20} />
            <Card color="blue" title="Boat kerz 234" price={40} />
            <Card
              color="purp"
              discount={40}
              title="Boat Rockerz 323"
              price={30}
            />
          </div>
        ) : null}
        {curentTab === 1 ? (
          <div className="tab__card-wrapper">
            <Card
              color="purp"
              discount={40}
              title="Boat Rockerz 323"
              price={30}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Sellers;
