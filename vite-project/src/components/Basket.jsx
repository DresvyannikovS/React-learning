import { useState } from "react";
import { BasketElement } from "./BasketElement";
import { useEffect } from "react";
import { getGoods } from "./goods";
import { useCounterContext } from "../context/CounterContext";

export const Basket = () => {
  const [goods, setGoods] = useState([]);
  const [totalSumm, setTotalSumm] = useState(0);

  const { counter } = useCounterContext();
  useEffect(() => {updateGoods()}, [counter]);

  const updateGoods = async () => {
    let array = await getGoods();
    setGoods(array);
    setTotalSumm(
      array.reduce((acc, item) => (acc += item.count * item.price), 0)
    );
  };

  useEffect(() => {
    updateGoods();
  }, []);

  return (
    <>
      {goods.length > 0 && (
        <div id="fullBasket" className="center basket">
          <section className="basket__container">
            <h1 className="basket__title">Товары к оформлению</h1>
            <div id="basketContent" className="basket__items">
              {goods.map((item) => {
                return <BasketElement key={item.id} item={item} />;
              })}
            </div>

            <div className="basket__summ">
              <p className="basket__price basket__price_right">
                Итого: <span id="summ">{totalSumm} ₽</span>
              </p>
            </div>

            <button id="sendButton" className="basket__button red-button">
              Оформить заказ
            </button>
          </section>
        </div>
      )}
    </>
  );
};
