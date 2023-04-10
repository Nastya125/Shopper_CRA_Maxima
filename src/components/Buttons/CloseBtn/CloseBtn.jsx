import "./closeBtn.css";

function CloseBtn({ close }) {
  return (
    <button onClick={close} className="close">
      x
    </button>
  );
}

export default CloseBtn;
