import { createContext, useContext } from "react";

export const GoodsContext = createContext({
  goods: [],
  totalSums: 0,
  updateGoods: () => {},
  getTotalProductPrice: () => {},
  getProductCount: () => {},
  isProductInBasket: () => {},
});

export function useGoodsContext() {
  const goods = useContext(GoodsContext);

  return goods;
}
