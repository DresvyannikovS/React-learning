export const EmptyBasket = () => {
  return (
    <>
      <section className="empty" id="emptyBasket">
        <div className="center">
          <div className="empty__item">
            <img
              className="empty__img"
              src="/public/img/empty_basket.png"
              alt="empty-basket"
            />
            <h2 className="empty__title">Ваша корзина пока пуста</h2>
            <a href="/catalog">
              <button className="empty__button red-button">За покупками</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
