import { HidePasswordIcon } from "./Icons/HidePasswordIcon";
import { ShowPasswordIcon } from "./Icons/ShowPasswordIcon";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import api from "../utils/api";
import { userLogin } from "../services/user";
import { useToggler } from "../hooks/useToggler";

export const RegistrationModalContent = () => {
  const formFields = {
    email: "",
    password: "",
    password_two: "",
    phone_number: "",
    first_name: "",
    last_name: "",
  };

  const [formData, setFormData] = useState(formFields);
  const { updateToken } = useUserContext();
  const openPassToggler = useToggler();
  const openConfirmPassToggler = useToggler();

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

      await userLogin({ body: authFormData, onLogin: updateToken });
    }
  };

  return (
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
            <div
              onClick={() => openPassToggler.toggle()}
              className="visiblePassword"
            >
              {openPassToggler.isOpen ? (
                <HidePasswordIcon />
              ) : (
                <ShowPasswordIcon />
              )}
            </div>
            <input
              onChange={handleInputChange}
              name="password"
              type={openPassToggler.isOpen ? "text" : "password"}
              className="blur__input blur__input_gap inputPassword"
              placeholder="пароль"
            />
          </div>

          <div className="blur__input-container">
            <div
              onClick={() => openConfirmPassToggler.toggle()}
              className="visiblePassword"
            >
              {openConfirmPassToggler.isOpen ? (
                <HidePasswordIcon />
              ) : (
                <ShowPasswordIcon />
              )}
            </div>
            <input
              onChange={handleInputChange}
              name="password_two"
              type={openConfirmPassToggler.isOpen ? "text" : "password"}
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
        Нажимая на кнопку вы автоматически соглашаетесь с правилами обработки
        персональных данных
      </p>
    </div>
  );
};
