function Launches() {
  return (
    <section className="launches">
      <h2 className="launches__title launches__title-margin-bt">
        New Launches
      </h2>
      <div className="launches__wrapper bg-primary-products">
        <div className="launches__images">
          <img src="./img/headphones__1.png" alt="headphones" />
          <img
            className="down"
            src="./img/headphones__2.png"
            alt="headphones"
          />
        </div>

        <div className="launches-descr launches-descr-normal">
          <div className="launches-descr__title">Airdrop 500 Anc</div>
          <div className="launches-descr__description">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a launches ... Read More
          </div>
          <div className="price price_launchess">
            <p className="price__text">Price :</p>
            <p className="price__number">$45.99</p>
          </div>
          <div className="launches__colors">
            <div className="color black"></div>
            <div className="color yellow"></div>
            <div className="color blue"></div>
          </div>
          <div className="launches__button-container">
            <button className="button-card  ">Add to cart</button>
            <button className="button-outline  ">Explore More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Launches;
