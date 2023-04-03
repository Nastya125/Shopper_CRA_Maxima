import {
  search,
  basket,
  human,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  play,
  headphones,
  star,
} from "./img";
function Header() {
  return (
    <section className="header">
      <div className="container ">
        <nav className="navbar navbar_header">
          <div className="controls">
            <h3 className="logo__title">
              Shop<span>per</span>
            </h3>
            <SearchInput />
            <BasketBtn />
            <LoginBtn />
          </div>
          <ul className="links">
            <li className="link">
              {" "}
              <a href="#">Features </a>
            </li>
            <li className="link">
              {" "}
              <a href="#">Products </a>
            </li>
            <li className="link">
              {" "}
              <a href="#">Blog </a>
            </li>
            <li className="link">
              {" "}
              <a href="#">About </a>
            </li>
          </ul>
        </nav>

        <div className="about">
          <div className="about__descr">
            <h1 className="title">Discover Our Latest Products</h1>
            <p className="about__descr_text">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a product
            </p>
            <div className="about__descr__container">
              <button className="about__descr_btn">Buy Now</button>
              <div className="about__reviews">
                <div className="icons">
                  <img className="icon icon_1" src={avatar1} alt="avatar" />
                  <img className="icon icon_2" src={avatar2} alt="avatar" />
                  <img className="icon icon_3" src={avatar3} alt="avatar" />
                  <img className="icon icon_4" src={avatar4} alt="avatar" />
                </div>
                <p className="about__reviews_descr">15k Well Reviews</p>
              </div>
            </div>
          </div>

          <div className="about__interactive">
            <div className="play">
              <div className="play__img">
                <img src={play} alt="play" />
              </div>
              <div className="play__img-round"></div>
              <button className="play__text">Play Video</button>
            </div>
            <div className="about__interactive__title">
              <p className="title__word title__word_R">R</p>
              <p className="title__word title__word_e">e</p>
              <p className="title__word title__word_d">d</p>
              <p className="title__word title__word_B">B</p>
              <p className="title__word title__word_e-e">e</p>
              <p className="title__word title__word_a">a</p>
              <p className="title__word title__word_t">t</p>
              <p className="title__word title__word_s">s</p>
              <p className="title__word title__word_M">M</p>
              <p className="title__word title__word_I">I</p>
              <p className="title__word title__word_9">9</p>
              <p className="title__word title__word_c">c</p>
              <p className="title__word title__word_2">2</p>
              <p className="title__word title__word_z">z</p>
              <p className="title__word title__word_m">m</p>
              <p className="title__word title__word_sl">/</p>
              <p className="title__word title__word_a-a">a</p>
              <img
                className="headphones__img"
                src={headphones}
                alt="headphones"
              />
              <p className="headphones__text">$50</p>
              <img className="star star__first" src={star} alt="star" />
              <img className="star star__second" src={star} alt="star" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SearchInput = (props) => {
  return (
    <label className="search__input__label">
      <button className="search__input__btn">
        <img src={search} alt="search" />
      </button>
      <input className="search__input" type="text" placeholder="Search Items" />
    </label>
  );
};

const BasketBtn = (props) => {
  return (
    <button className="basket rotate-center">
      <img src={basket} alt="basket" />
      <p className="basket__text">0 Items Added</p>
    </button>
  );
};

const LoginBtn = () => {
  return (
    <button className="login">
      <img src={human} alt="login" />
      <p className="login__text">Login or Sign Up</p>
    </button>
  );
};
export default Header;
