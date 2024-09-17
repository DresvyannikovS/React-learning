import { useNavigate } from "react-router-dom";
import { HidePasswordIcon } from "./Icons/HidePasswordIcon";
import { ShowPasswordIcon } from "./Icons/ShowPasswordIcon";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import api from "../api";
import { setUserToken } from "../Storage";

export const Registration = () => {
  const formFields = {
    email: "",
    password: "",
    password_two: "",
    phone_number: "",
    first_name: "",
    last_name: "",
  };

  let navigate = useNavigate();
  const [formData, setFormData] = useState(formFields);
  const { updateToken } = useUserContext();
  const [isOpenPass, setIsOpenPass] = useState(false);
  const [isOpenPass2, setIsOpenPass2] = useState(false);

  const handleShowPassword = () => {
    setIsOpenPass(!isOpenPass);
  };

  const handleShowPassword2 = () => {
    setIsOpenPass2(!isOpenPass2);
  };

  const handleClose = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Проверим имя
    if (formData.first_name === null || formData.first_name === "") {
      alert(`Не заполнено поле Имя`);
      return;
    }

    //Проверим фамилию
    if (formData.last_name === null || formData.last_name === "") {
      alert(`Не заполнено поле Фамилия`);
      return;
    }

    //Проверим телефон
    if (formData.phone_number === null || formData.phone_number === "") {
      alert(`Не заполнен телефон`);
      return;
    }

    //Проверим почту
    if (formData.email === null || formData.email === "") {
      alert(`Не заполнена почта`);
      return;
    }

    //Проверим совпадение паролей
    if (formData.password !== formData.password_two) {
      alert("Пароли не совпадают");
      return;
    }

    const response = await api({
      route: "/register/",

      body: formData,

      onError: (errorMessage) => {
        alert(errorMessage);
      },
    });

    if (response.message === "Вы успешно зарегистрированы!") {
      let authFormData = {
        email: formData.email,
        password: formData.password,
      };

      const response = await api({
        route: "/login/",

        body: authFormData,

        onError: (errorMessage) => {
          alert(errorMessage);
        },
      });

      if (response?.access_token) {
        setUserToken(response.access_token);
        updateToken(response.access_token);
        navigate("/");
      }
    }
  };

  return (
    <div className="blur modal">
      <div className="modal-content">
        <button
          onClick={handleClose}
          className="close-button blur__close-button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
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
          <form onSubmit={handleSubmit} className="form" action="">
            <div id="regForm" className="blur__content blur__reg">
              <h1 className="blur__title">Регистрация</h1>

              <p className="blur__text">Ваши данные</p>
              <div className="blur__input-container">
                <input
                  onChange={handleInputChange}
                  name="first_name"
                  type="text"
                  className="blur__input blur__input_gap"
                  placeholder="Имя"
                />
              </div>
              <div className="blur__input-container">
                <input
                  onChange={handleInputChange}
                  name="last_name"
                  type="text"
                  className="blur__input blur__input_gap"
                  placeholder="Фамилия"
                />
              </div>
              <div className="blur__input-container">
                <input
                  onChange={handleInputChange}
                  name="phone_number"
                  type="tel"
                  className="blur__input blur__input_gap"
                  placeholder="Телефон"
                />
              </div>
              <div className="blur__input-container">
                <input
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                  className="blur__input blur__input_gap"
                  placeholder="e-mail"
                />
              </div>

              <div className="blur__input-container">
                <div onClick={handleShowPassword} className="visiblePassword">
                  {isOpenPass ? <HidePasswordIcon /> : <ShowPasswordIcon />}
                </div>
                <input
                  onChange={handleInputChange}
                  name="password"
                  type={isOpenPass ? "text" : "password"}
                  className="blur__input blur__input_gap inputPassword"
                  placeholder="пароль"
                />
              </div>

              <div className="blur__input-container">
                <div onClick={handleShowPassword2} className="visiblePassword">
                  {isOpenPass2 ? <HidePasswordIcon /> : <ShowPasswordIcon />}
                </div>
                <input
                  onChange={handleInputChange}
                  name="password_two"
                  type={isOpenPass2 ? "text" : "password"}
                  className="blur__input blur__input_gap inputPassword"
                  placeholder="повторите пароль"
                />
              </div>

              <button type="submit" className="blur__button red-button">
                Зарегистрироваться
              </button>
            </div>
          </form>

          <p className="blur__privacy">
            Нажимая на кнопку вы автоматически соглашаетесь с правилами
            обработки персональных данных
          </p>
        </div>
      </div>
    </div>
  );
};
