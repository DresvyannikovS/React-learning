import api from "../api";

export const getGoods = async () => {
  const response = await api({
    route: "/get_all_basket",
    onError: (response) => {
      if (response.status === 401) {
        alert("Пользователь не авторизован");
      }
      if (response.status === 422) {
        alert("Ошибка валидации");
      }
    },
  });

  return response.products;
};
