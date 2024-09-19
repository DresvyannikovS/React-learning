import { useEffect } from "react";
import { useState } from "react";
import api from "../api";
import { getGoods } from "./goods";
import { useCounterContext } from "../context/CounterContext";

export const Card = ({ item }) => {
  const { updateCounter } = useCounterContext();

  const [isOnBasket, setIsOnBasket] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [inputCalcValue, setInputCalcValue] = useState(0);

  const checkGoods = async (e) => {
    let basketGoods = await getGoods();

    if (basketGoods) {
      let array = basketGoods.filter((product) => item.id === product.id);
      if (array.length > 0) {
        isOnBasket ? "" : setIsOnBasket(true);
        setInputValue(array[0].count);
        setInputCalcValue(array[0].count);
        console.log(array[0]);
      } else {
        setIsOnBasket(false);
        setInputValue(0);
      }
      updateCounter();
    }
  };

  useEffect(() => {
    checkGoods();
  }, []);

  //Редактирование количества в блоке калькуляции
  const handleAddToBasket = async () => {
    if (inputValue === 0) {
      const response = await api({
        route: "/add_to_basket",
        body: {
          product_id: item.id,
          count: 1,
        },
        onError: (response) => {
          if (response.status === 400) {
            alert("Товар уже в корзине");
          }
        },
      });

      if (response) {
        checkGoods();
      }
    } else {
      let routeString = `/plus_one?product_id=${item.id}`;

      const response = await api({
        route: routeString,
        onError: (response) => {
          if (response.status === 422) {
            alert("ошибка");
          }
        },
      });

      if (response) {
        checkGoods();
      }
    }
  };

  const handleRemoveFromBasket = async () => {
    if (inputValue > 1) {
      let routeString = `/minus_one?product_id=${item.id}`;

      const response = await api({
        route: routeString,
        onError: (response) => {
          if (response.status === 422) {
            alert("ошибка");
          }
        },
      });

      if (response) {
        checkGoods();
      }
    } else {
      const response = await api({
        route: `/dell_to_basket?product_id=${item.id}`,
      });

      if (response) {
        checkGoods();
      }
    }
  };

  const SendChangeInput = async (e) => {
    const response = await api({
      route: `/upd_basket_count?product_id=${item.id}&quantity=${inputValue}`,
      onError: (response) => {
        if (response.status === 422) {
          alert("ошибка");
        }
      },
    });

    if (response) {
      checkGoods();
    }
  };

  const handleUpdateInput = (e) => {
    if (Boolean(e.target.value)) {
      setInputValue(e.target.value);
      SendChangeInput();
    } else {
      setInputValue(inputCalcValue);
    }
  };

  return (
    <div className="products__item">
      <img
        src={item.photo}
        alt=""
        className="products__img"
      />
      <p className="products__text">{item.title}</p>

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
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              id="Arrow 1"
              d="M27.58 5.66L23.63 1.71C23.24 1.31 23.24 0.69 23.63 0.29C24.03 -0.1 24.65 -0.1 25.05 0.29L30.7 5.95C31.1 6.34 31.1 6.97 30.7 7.36L25.05 13.02C24.65 13.42 24.03 13.42 23.63 13.02C23.24 12.62 23.24 12 23.63 11.61L27.58 7.66L0 7.66L0 5.66L27.58 5.66Z"
              fill="CurrentColor"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div data-id={item.id} className="products__button-container">
        {!isOnBasket ? (
          <button
            data-id={item.id}
            onClick={handleAddToBasket}
            className="products__button products__decoratedtext red-button"
          >
            В КОРЗИНУ
          </button>
        ) : (
          <div data-id={item.id} className="basket__calc">
            <button
              onClick={handleRemoveFromBasket}
              className="basket__button-calc red-button remove"
            >
              <img
                src="/public/img/minus.svg"
                alt=""
                className="basket__img-calc remove"
              />
            </button>
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onBlur={handleUpdateInput}
              type="number"
              className="basket__input"
            />
            <button
              onClick={handleAddToBasket}
              className="basket__button-calc red-button add"
            >
              <img
                src="/public/img/plus.svg"
                alt=""
                className="basket__img-calc add"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
