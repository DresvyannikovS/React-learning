import { useNavigate } from "react-router-dom";

export const CallBack = () => {
  let navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  }
  
  return (
    <div className="blur modal">
      <div className="modal-content">
        <button onClick={handleClose} className="close-button blur__close-button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs />

            <line
              id="Line 12"
              x1="7.424316"
              y1="6.718750"
              x2="21.566406"
              y2="20.861328"
              stroke="currentColor"
              stroke-opacity="1.000000"
              stroke-width="1.000000"
            />

            <line
              id="Line 13"
              x1="6.717285"
              y1="20.859375"
              x2="20.859375"
              y2="6.716797"
              stroke="currentColor"
              stroke-opacity="1.000000"
              stroke-width="1.000000"
            />
          </svg>
        </button>

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
      </div>
    </div>
  );
};
