import { BasketElement } from "./BasketElement";
import { useGoodsContext } from "../context/GoodsContext";
import { formatPrice } from "../utils/basket";

export const Basket = () => {
  const { totalSumm, goods } = useGoodsContext();

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
                Итого: <span id="summ">{formatPrice(totalSumm)}</span>
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
