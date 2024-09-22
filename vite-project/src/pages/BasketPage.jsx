import { Basket } from "../components/Basket";
import { EmptyBasket } from "../components/EmptyBasket";
import { useGoodsContext } from "../context/GoodsContext";

export const BasketPage = () => {
  const { goods } = useGoodsContext();

  return <>{goods.length > 0 ? <Basket /> : <EmptyBasket />}</>;
};
