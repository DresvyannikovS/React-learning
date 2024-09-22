import { useState } from "react";

export const useToggler = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = (newState) => {
    setIsOpen((prev) => {
      return typeof newState === "boolean" ? newState : !prev;
    });
  };

  return {
    isOpen,
    toggle,
  };
};
