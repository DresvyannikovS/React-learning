import { useEffect } from "react";
import { useState } from "react";
import api from "../api";
import { getGoods } from "./goods";
import { useCounterContext } from "../context/CounterContext";

export const Calculation = ({ id }) => {
  const { updateCounter } = useCounterContext();

  const [isOnBasket, setIsOnBasket] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [inputCalcValue, setInputCalcValue] = useState(0);

  const checkGoods = async (e) => {
    let basketGoods = await getGoods();

    if (basketGoods) {
      let array = basketGoods.filter((product) => id === product.id);
      if (array.length > 0) {
        isOnBasket ? "" : setIsOnBasket(true);
        setInputValue(array[0].count);
        setInputCalcValue(array[0].count);
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
          product_id: id,
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
      let routeString = `/plus_one?product_id=${id}`;

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
      let routeString = `/minus_one?product_id=${id}`;

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
        route: `/dell_to_basket?product_id=${id}`,
      });

      if (response) {
        checkGoods();
      }
    }
  };

  const SendChangeInput = async (e) => {
    const response = await api({
      route: `/upd_basket_count?product_id=${id}&quantity=${inputValue}`,
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
    <>
      {!isOnBasket ? (
        <button
          data-id={id}
          onClick={handleAddToBasket}
          className="products__button products__decoratedtext red-button"
        >
          В КОРЗИНУ
        </button>
      ) : (
        <div data-id={id} className="basket__calc">
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
    </>
  );
};
