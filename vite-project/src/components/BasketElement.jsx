import { useGoodsContext } from "../context/GoodsContext";
import { dellToBasket } from "../services/goods";
import { formatPrice } from "../utils/basket";
import { Calculation } from "./Calculation";

export const BasketElement = ({ item }) => {
  const { updateGoods } = useGoodsContext();

  const handleDeleteFromBasket = () => {
    dellToBasket({ id: item.id, onSuccess: updateGoods });
  };

  return (
    <>
      `
      <div className="basket__item">
        <img
          className="basket__img"
          src={`/public/img/${item.photo[0]}`}
          alt={item.title}
        />

        <div className="basket__info-container">
          <p className="basket__name">{item.title}</p>
          <div className="basket__priceblock">
            <Calculation id={item.id} />

            <button
              data-index={item.id}
              onClick={handleDeleteFromBasket}
              className="basket__button-container basket__delete"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 11V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 11V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 7H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className="basket__price">
              {formatPrice(item.price * item.count)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
