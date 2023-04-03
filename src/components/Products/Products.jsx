import { headphones__1, headphones__2, headphones__3 } from "./img";
function Products() {
  return (
    <section className="products">
      <div className="images ">
        <h2 className="images__title">Apple wireless Airpod</h2>
        <div className="images__container images__container_products">
          <img
            className="images__container_1"
            src={headphones__1}
            alt="headphones"
          />
          <img
            className="images__container_2"
            src={headphones__2}
            alt="headphones"
          />
          <img
            className="images__container_3"
            src={headphones__3}
            alt="headphones"
          />
        </div>
        <div className="price price_products">
          <p className="price__text">Price :</p>
          <p className="price__number">$45.99</p>
        </div>
      </div>

      <div className="product-descr product-descr-normal">
        <div className="product-descr__title">Our Featured Products</div>
        <div className="product-descr__description">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a product
        </div>
        <button className="button-card button-card_product-descr">
          Add to cart
        </button>
        <button className="button-outline button-outline_product-descr">
          View more
        </button>
      </div>
    </section>
  );
}

export default Products;
