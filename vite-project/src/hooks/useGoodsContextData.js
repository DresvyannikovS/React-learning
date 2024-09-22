import { useCallback, useMemo, useState } from "react";
import { getGoods } from "../services/goods";

export const useGoodsContextData = () => {
  const [goods, setGoods] = useState([]);

  const updateGoods = () => {
    getGoods({ onSuccess: (goods) => setGoods(goods) });
  };

  const getTotalProductPrice = useCallback(
    (id) => {
      const product = goods.find((item) => item.id === id);

      return product.price * product.count;
    },
    [goods]
  );

  const getProductCount = useCallback(
    (id) => {
      const product = goods.find((item) => item.id === id);

      return product.count;
    },
    [goods]
  );

  const totalSumm = useMemo(() => {
    return goods.reduce((acc, item) => acc + item.price * item.count, 0);
  }, [goods]);

  const isProductInBasket = useCallback(
    (id) => {
      return Boolean(goods.find((item) => item.id === id));
    },
    [goods]
  );

  return {
    goods,
    totalSumm,
    getTotalProductPrice,
    getProductCount,
    isProductInBasket,
    updateGoods,
  };
};
