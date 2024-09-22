import { useState } from "react";
import { useGoodsContext } from "../context/GoodsContext";
import {
  addToBasket,
  dellToBasket,
  minusOne,
  plusOne,
  updateBasketCount,
} from "../services/goods";

export const Calculation = ({ id }) => {
  const { updateGoods, isProductInBasket, getProductCount } = useGoodsContext();

  const [inputValue, setInputValue] = useState(0);

  //Редактирование количества в блоке калькуляции
  const handleAddToBasket = async () => {
    if (inputValue === 0) {
      await addToBasket({
        body: { product_id: id, count: 1 },
        onSuccess: updateGoods,
      });
    } else {
      await plusOne({ id, onSuccess: updateGoods });
    }
  };

  const handleRemoveFromBasket = async () => {
    if (inputValue > 1) {
      await minusOne({ id, onSuccess: updateGoods });
    } else {
      await dellToBasket({ id, onSuccess: updateGoods });
    }
  };

  const SendChangeInput = async () => {
    await updateBasketCount({
      id,
      quantity: inputValue,
      onSuccess: updateGoods,
    });
  };

  const handleUpdateInput = (e) => {
    if (Boolean(e.target.value)) {
      setInputValue(e.target.value);
      SendChangeInput();
    } else {
      setInputValue(getProductCount(id));
    }
  };

  return (
    <>
      {!isProductInBasket ? (
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
