import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/LayoutPage";
import { CatalogPage } from "./pages/CatalogPage";
import { MainPage } from "./pages/MainPage";
import { PaymentPage } from "./pages/PaymentPage";
import { EmptyPage } from "./pages/EmptyPage";
import { AllGlobal } from "./components/Style/All.styled";
import { useEffect } from "react";
import { useState } from "react";
import { getUserToken } from "./Storage";
import { UserContext } from "./context/UserContext";
import { AboutPage } from "./pages/AboutPage";
import { BasketPage } from "./pages/BasketPage";
import { GoodsContext } from "./context/GoodsContext";
import { useGoodsContextData } from "./hooks/useGoodsContextData";

function App() {
  const [token, setToken] = useState(null);
  const { goods, updateGoods } = useGoodsContextData();

  const updateToken = () => {
    setToken(getUserToken);
  };

  useEffect(() => {
    updateToken();
  }, []);

  useEffect(() => {
    if (token) {
      updateGoods();
    }
  }, [token]);

  return (
    <>
      <AllGlobal />
      <UserContext.Provider value={{ token, updateToken }}>
        <GoodsContext.Provider value={{ goods, updateGoods }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="basket" element={<BasketPage />} />
              <Route path="payment" element={<PaymentPage />} />
              <Route path="catalog" element={<CatalogPage />} />
              <Route path="empty" element={<EmptyPage />} />
            </Route>
          </Routes>
        </GoodsContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
