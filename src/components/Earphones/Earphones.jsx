import { useEffect, useState } from "react";
import GET_headphons from "../../service/http/GET_headphons";

import "./earphones.css";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import Slider from "../Slider/Slider";

function Earphones() {
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
      <h2 className="sellers__title sellers__title-margin-bt">
        Trending Earphones
      </h2>
      <div className="tab sellers_tab_container ">
        <div className="tab__btn-wrapper">
          <TabButton
            curentTab={curentTab}
            setCurentTab={setCurentTab}
            textContent={"Wired"}
          />
          <TabButton
            curentTab={curentTab}
            setCurentTab={setCurentTab}
            textContent={"Wiredless"}
          />
        </div>
        {curentTab === "Wired" ? (
          <Tabs list={headphonsList} openModal={openModal} />
        ) : null}
        {curentTab === "Wiredless" ? (
          <Slider data={headphonsList} openModal={openModal} />
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
const TabButton = ({ curentTab, setCurentTab, textContent }) => {
  return (
    <button
      onClick={() => setCurentTab(textContent)}
      className={
        curentTab === textContent
          ? "button-oval button-oval_active"
          : "button-oval"
      }
    >
      {textContent}
    </button>
  );
};

export default Earphones;
