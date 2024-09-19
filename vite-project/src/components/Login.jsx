import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUserToken } from "../Storage";
import { useUserContext } from "../context/UserContext";
import api from "../api";
import { ShowPasswordIcon } from "./Icons/ShowPasswordIcon";
import { HidePasswordIcon } from "./Icons/HidePasswordIcon";

export const Login = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({ login: "", password: "" });
  const { updateToken } = useUserContext();
  const [ isOpenPass, setIsOpenPass ] = useState(false);

  const handleShowPassword = () => {
    setIsOpenPass(!isOpenPass);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    navigate("/")
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formRequest = {
      [formData.login.includes("@") ? "email" : "phone_number"]: formData.login,
      password: formData.password,
    };

    const response = await api({
      route: "/login/",

      body: formRequest,

      onError: (errorMessage) => {
        alert(errorMessage);
      },
    });

    if (response?.access_token) {
      setUserToken(response.access_token);
      updateToken(response.access_token);
      navigate("/");
    }
  };

  return (
    <div className="blur modal">
      <div className="modal-content">
        <button onClick={handleClose} id="close-button" className="close-button blur__close-button">
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
          <form onSubmit={handleSubmit} className="form" action="">
            <div className="blur__content blur__auth">
              <h1 className="blur__title">Вход в личный кабинет</h1>

              <p className="blur__text">Введите логин и пароль</p>

              <div className="blur__input-container blur__input-container-gap">
                <svg
                  className="blur__input-icon"
                  width="23px"
                  height="23px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -2159.000000)"
                      fill="currentColor"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598"
                          id="profile_round-[#1342]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <input
                  onChange={handleInputChange}
                  name="login"
                  type="text"
                  className="blur__input"
                  placeholder="Введите почту или телефон"
                />
              </div>

              <div className="blur__input-container blur__input-container-gap">
                <div onClick={handleShowPassword} className="visiblePassword">
                  {isOpenPass ? < HidePasswordIcon/> : <ShowPasswordIcon/>}
                </div>
                <input
                  onChange={handleInputChange}
                  name="password"
                  type={isOpenPass ? "text" : "password"}
                  className="blur__input inputPassword"
                  placeholder="Введите пароль"
                />
              </div>

              <button type="submit" className="blur__button red-button">
                Войти
              </button>
            </div>
          </form>
          <h2 className="blur__text blur__text-reg">
            Еще не зарегистрированы?
          </h2>

          <button className="blur__button blur__button-reg red-button">
            <Link style={{ color: "white" }} to={"/reg"}>
              Зарегистрироваться
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
