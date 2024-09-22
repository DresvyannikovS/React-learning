import { createContext, useContext } from "react";

export const UserContext = createContext({
  updateToken: () => {},
});

export function useUserContext() {
  const user = useContext(UserContext);

  return user;
}
