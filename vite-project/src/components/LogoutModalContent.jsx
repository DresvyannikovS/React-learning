import { useUserContext } from "../context/UserContext";
import { userLogout } from "../services/user";

export const LogoutModalContent = () => {
  const { updateToken } = useUserContext();

  const handleLogout = () => {
    userLogout({ onLogout: updateToken });
  };

  return (
    <div className="modal-content-slot blur__form">
      <div className="blur__content">
        <p className="blur__title blur__title_logout">
          Вы уверены что хотите выйти?
        </p>
        <div className="blur__dialog-button">
          <button
            onClick={handleLogout}
            className="blur__button red-button blur__button_basket logoutButton"
          >
            Да
          </button>
          <button
            onClick={handleClose}
            className="blur__button red-button blur__button_basket cancelButton"
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};
