import { useEffect, useState } from "react";
import GET_headphons from "../../service/http/GET_headphons";
import "./sellers.css";
import "../Modal/modal.css";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

function Sellers() {
  const [curentTab, setCurentTab] = useState("Wiredless");
  const [showModal, setShowModal] = useState(false);
  const [headphonsList, setHeadphonesList] = useState([]);

  useEffect(() => {
    GET_headphons().then((res) => {
      setHeadphonesList(res);
    });
  }, []);

  function openModal() {
    setShowModal(true);
  }
  return (
    <section className="sellers">
      {showModal ? (
        <Modal
          close={setShowModal}
          color={"blue"}
          price={20}
          rating={5}
          title={" Card Text"}
        />
      ) : null}
      <h2 className="sellers__title sellers__title-margin-bt">Top Sellers</h2>
      <div className="tab container">
        <div className="tab__btn-wrapper">
          <button
            onClick={() => setCurentTab("Wired")}
            className={
              curentTab === "Wired"
                ? "button-oval button-oval_active"
                : "button-oval"
            }
          >
            Wired
          </button>
          <button
            onClick={() => setCurentTab("Wiredless")}
            className={
              curentTab === "Wiredless"
                ? "button-oval button-oval_active"
                : "button-oval"
            }
          >
            Wiredless
          </button>
        </div>
        {curentTab === "Wired" ? <Tabs /> : null}
        {curentTab === "Wiredless" ? (
          <div className="tab__card-wrapper">
            <Card
              click={openModal}
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

const Tabs = (list) => {
  console.log(list);
  return (
    <div className="tab__card-wrapper">
      <Card color="purp" discount={40} title="Boat Rockerz 323" price={30} />
      <Card color="purp" discount={40} title="Boat Rockerz 323" price={30} />
      <Card color="purp" discount={40} title="Boat Rockerz 323" price={30} />
    </div>
  );
};

export default Sellers;
