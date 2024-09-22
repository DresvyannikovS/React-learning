import api from "../utils/api";

export const getGoods = async ({ onSuccess }) => {
  const response = await api({
    route: "/get_all_basket",
    onSuccess,
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

export const dellToBasket = async ({ id, onSuccess }) => {
  const response = await api({
    route: `/dell_to_basket?product_id=${id}`,
    onSuccess,
  });

  return response.products;
};

export const addToBasket = async ({ body, onSuccess }) => {
  const response = await api({
    route: "/add_to_basket",
    body,
    onSuccess,
    onError: (response) => {
      if (response.status === 400) {
        alert("Товар уже в корзине");
      }
    },
  });

  return response;
};

export const plusOne = async ({ id, onSuccess }) => {
  const response = await api({
    route: `/plus_one?product_id=${id}`,
    onSuccess,
    onError: (response) => {
      if (response.status === 422) {
        alert("ошибка");
      }
    },
  });

  return response;
};

export const minusOne = async ({ id, onSuccess }) => {
  const response = await api({
    route: `/minus_one?product_id=${id}`,
    onSuccess,
    onError: (response) => {
      if (response.status === 422) {
        alert("ошибка");
      }
    },
  });

  return response;
};

export const updateBasketCount = async ({ id, quantity, onSuccess }) => {
  const response = await api({
    route: `/upd_basket_count?product_id=${id}&quantity=${quantity}`,
    onSuccess,
    onError: (response) => {
      if (response.status === 422) {
        alert("ошибка");
      }
    },
  });

  return response;
};
