import { createContext, useContext } from "react";

export const CounterContext = createContext(null);

export function useCounterContext() {
  const counter = useContext(CounterContext);

  return counter;
}