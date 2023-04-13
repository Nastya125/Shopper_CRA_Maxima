import { useEffect, useState } from "react";
import GET_headphons from "../../service/http/GET_headphons";

import "./sellers.css";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

function Sellers() {
  const [curentTab, setCurentTab] = useState("Wiredless");
  const [showModal, setShowModal] = useState(false);
  const [headphonsList, setHeadphonesList] = useState([]);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    GET_headphons().then((res) => {
      setHeadphonesList(res);
    });
  }, []);

  function openModal(data) {
    setModalData(data);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setShowModal(false);
    document.body.style.overflow = "auto";
  }
  return (
    <section className="sellers">
      {showModal ? <Modal data={modalData} closeModal={closeModal} /> : null}
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
        {curentTab === "Wired" ? (
          <Tabs list={headphonsList} openModal={openModal} />
        ) : null}
        {curentTab === "Wiredless" ? (
          <div className="tab__card-wrapper">
            <Card
              openModal={openModal}
              data={headphonsList[0] !== undefined ? headphonsList[0] : {}}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

const Tabs = ({ list, openModal }) => {
  return (
    <div className="tab__card-wrapper">
      {list.map((item) => {
        return <Card key={item.id} data={item} openModal={openModal} />;
      })}
    </div>
  );
};

export default Sellers;
