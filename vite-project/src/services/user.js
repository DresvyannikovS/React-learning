import api from "../utils/api";
import { login, logout } from "../utils/user";

export const userLogin = async ({ body, onLogin }) => {
  const response = await api({
    route: "/login/",
    body,
    onSuccess: (response) =>
      login({ token: response.access_token, callback: onLogin }),
    onError: (errorMessage) => {
      alert(errorMessage);
    },
  });

  return response;
};

export const userLogout = async ({ onLogout }) => {
  const response = await api({
    route: "/logout/",
    onSuccess: () => {
      logout({ callback: onLogout });
    },
    onError: (errorMessage) => {
      alert(errorMessage);
    },
  });

  return response;
};
