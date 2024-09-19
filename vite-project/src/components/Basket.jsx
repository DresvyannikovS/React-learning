import { useState } from "react";
import { BasketElement } from "./BasketElement";
import { useEffect } from "react";
import { getGoods } from "./goods";

export const Basket = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    setGoods(getGoods());
  }, []);

  return (
    <>
      <div id="fullBasket" class="center basket">
        <section class="basket__container">
          <h1 class="basket__title">Товары к оформлению</h1>
          <div id="basketContent" class="basket__items">
            {goods.map((item) => (
              <BasketElement item={item} />
            ))}
          </div>

          <div class="basket__summ">
            <p class="basket__price basket__price_right">
              Итого: <span id="summ">{{ total_summ }} ₽</span>
            </p>
          </div>

          <button id="sendButton" class="basket__button red-button">
            Оформить заказ
          </button>
        </section>
      </div>
    </>
  );
};
