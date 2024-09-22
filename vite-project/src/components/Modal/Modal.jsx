import { CloseIcon } from "../Icons/CloseIcon";

export const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="blur modal">
      <div className="modal-content">
        <button
          onClick={onClose}
          id="close-button"
          className="close-button blur__close-button"
        >
          <CloseIcon />
        </button>

        {children}
      </div>
    </div>
  );
};
