export const Card = ({ item }) => {
  return (
    <div className="products__item">
      <img src={item.photo} alt="" className="products__img" />
      <p className="products__text">{item.name}</p>

      <div className="products__info">
        <p className="products__price products__decoratedtext">
          <strong>{item.price}</strong>
        </p>
        <div className="products__more">
          <a
            href="goods_profile.html"
            className="products__decoratedtext products__textmore"
          >
            ПОДРОБНЕЕ
          </a>
          <svg
            className="products__arrow"
            width="31.003906"
            height="13.322266"
            viewBox="0 0 31.0039 13.3223"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              id="Arrow 1"
              d="M27.58 5.66L23.63 1.71C23.24 1.31 23.24 0.69 23.63 0.29C24.03 -0.1 24.65 -0.1 25.05 0.29L30.7 5.95C31.1 6.34 31.1 6.97 30.7 7.36L25.05 13.02C24.65 13.42 24.03 13.42 23.63 13.02C23.24 12.62 23.24 12 23.63 11.61L27.58 7.66L0 7.66L0 5.66L27.58 5.66Z"
              fill="CurrentColor"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div data-id={item.id} className="products__button-container">
        <button
          data-id={item.id}
          className="products__button products__decoratedtext red-button"
        >
          В КОРЗИНУ
        </button>
      </div>
    </div>
  );
};
