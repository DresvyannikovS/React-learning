import { Basket } from "../components/Basket";
import { EmptyBasket } from "../components/EmptyBasket";
import { useCounterContext } from "../context/CounterContext";

export const BasketPage = () => {
  const { isFullBasket } = useCounterContext();

  return <>{isFullBasket ? <Basket /> : <EmptyBasket />}</>;
};
