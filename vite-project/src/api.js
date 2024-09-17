import { getUserToken } from "./Storage.js";

const BASE_URL = "https://ros-kolbasa.ru/api";

export const getApiError = (response) => {
  if (typeof response.detail === "string") {
    return response.detail;
  }

  return response.detail?.[0]?.msg || "Что-то пошло не так";
};

export const api = async ({ route, body, onError }) => {
  const token = getUserToken()

  return await fetch(`${BASE_URL}${route}`, {
    headers: { Authentication: `${token}`, Accept: "application/json", "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(body),
  }).then(async (response) => {
    const responseToJson = await response.json();

    if (response.status === 200) {
      return responseToJson;
    } else {
      const errorMessage = getApiError(responseToJson);

      onError?.(errorMessage);

      throw new Error(errorMessage);
    }
  });
};

export default api;

