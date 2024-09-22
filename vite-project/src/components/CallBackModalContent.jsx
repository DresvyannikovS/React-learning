export const CallBackModalContent = () => {
  return (
    <div className="modal-content-slot blur__form">
      <form className="form" action="">
        <div className="blur__content blur__call">
          <h1 className="blur__title">Свяжитесь с нами</h1>

          <p className="blur__text">
            Оставьте свои контактные данные и мы вам перезвоним
          </p>

          <input
            name="user_name"
            type="text"
            className="blur__input"
            placeholder="Имя"
          />

          <input
            name="user_phone"
            type="tel"
            className="blur__input"
            placeholder="Телефон"
          />

          <button type="submit" className="blur__button red-button">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};
