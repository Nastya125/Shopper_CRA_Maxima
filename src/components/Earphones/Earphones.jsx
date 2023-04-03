function Earphones() {
  return (
    <section className="earphones">
      <h2 className="sellers__title sellers__title-margin-bt">
        Trending Earphones
      </h2>
      <div className="tab container">
        <div className="tab__btn-wrapper">
          <button className="button-oval">Earbuds</button>
          <button className="button-oval">Wireless</button>
          <button className="button-oval">Wired</button>
        </div>
        <div className="tab__card-wrapper">
          <div className="tab__card card">
            <div className="card__product">
              <img
                className="card__img"
                src="./img/card__headphons__4.png"
                alt="card__headphons"
              />
              <div className="card__descr">
                <h4 className="card__text">Boat Rockerz 333</h4>
                <div className="card__rating">
                  <img src="./img/red__star.svg" alt="rating" />
                  <img src="./img/red__star.svg" alt="rating" />
                  <img src="./img/red__star.svg" alt="rating" />
                  <img src="./img/red__star.svg" alt="rating" />
                  <img src="./img/red__star.svg" alt="rating" />
                  <p className="card__rating-count">75 Reviews</p>
                </div>

                <p className="card__price">$20</p>
              </div>
            </div>
            <button className="card__btn button-card">Add to cart</button>
            <div className="card__discount">
              <p>Save 60%</p>
            </div>
          </div>

          <div className="tab__card card">
            <div className="card__product card__product_blue">
              <img
                className="card__img"
                src="./img/card__headphons__2.png"
                alt="card__headphons"
              />
              <div className="card__descr">
                <h4 className="card__text">Boat kerz 234</h4>
                <div className="card__rating">
                  <img src="./img/red__star.svg" alt="rating" />
                  <img src="./img/red__star.svg" alt="rating" />
                  <img src="./img/red__star.svg" alt="rating" />
                  <img src="./img/red__star.svg" alt="rating" />
                  <img src="./img/red__star.svg" alt="rating" />
                  <p className="card__rating-count">75 Reviews</p>
                </div>

                <p className="card__price">$40</p>
              </div>
            </div>
            <button className="card__btn button-card">Add to cart</button>
          </div>

          <div className="tab__card card">
            <div className="card__product card__product_purp">
              <img
                className="card__img"
                src="./img/card__headphons__5.png"
                alt="card__headphons"
              />
              <div className="card__descr">
                <h4 className="card__text">Boat Rockerz 323</h4>
                <div className="card__rating">
                  <img src="./img/red__star.svg" alt="rating" />
                  <img src="./img/red__star.svg" alt="rating" />
                  <img src="./img/red__star.svg" alt="rating" />
                  <img src="./img/red__star.svg" alt="rating" />
                  <img src="./img/red__star.svg" alt="rating" />
                  <p className="card__rating-count">75 Reviews</p>
                </div>

                <p className="card__price">$30</p>
              </div>
            </div>
            <button className="card__btn button-card">Add to cart</button>
            <div className="card__discount card__discount_purp">
              <p>Save 40%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Earphones;
