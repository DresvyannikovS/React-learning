import { clearUserToken, setUserToken } from "../Storage";

export const login = ({ token, callback }) => {
  setUserToken();
  callback?.(token);
};

export const logout = ({ callback }) => {
  clearUserToken();
  callback?.();
};
