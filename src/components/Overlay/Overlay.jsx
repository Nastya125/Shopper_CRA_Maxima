import "./overlay.css";
function Overlay({ children, close }) {
  const closeOverlay = (e) => {
    if (e.target.classList.contains("overlay")) {
      close();
    }
  };

  return (
    <div onClick={(e) => closeOverlay(e)} className="overlay">
      {children}
    </div>
  );
}

export default Overlay;
