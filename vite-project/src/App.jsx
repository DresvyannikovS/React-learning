// import "./App.css";

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
import { LoginPage } from "./pages/LoginPage";
import { RegPage } from "./pages/RegPage";
import { LogoutPage } from "./pages/LogoutPage";
import { getGoods } from "./components/goods";
import { CounterContext } from "./context/CounterContext";
import { AboutPage } from "./pages/AboutPage";
import { CallBack } from "./components/CallBack";

function App() {
  const [token, setToken] = useState(null);
  const [isFullBasket, setIsFullBasket] = useState(false);
  const [counter, setCounter] = useState(null);

  const updateToken = () => {
    setToken(getUserToken);
  };

  const updateCounter = async () => {
    if (token) {
      let goods = await getGoods();
      if (goods.length > 0) {
        isFullBasket ? "" : setIsFullBasket(true);
        setCounter(goods.reduce((acc, item) => (acc += item.count), 0));
      } else {
        setIsFullBasket(false);
        setCounter(0);
      }
    }
  };

  useEffect(() => {
    updateToken();
  }, []);

  useEffect(() => {
    updateCounter();
  }, [token]);

  return (
    <>
      <AllGlobal />
      <UserContext.Provider value={{ token, updateToken }}>
        <CounterContext.Provider value={{ isFullBasket, counter, updateCounter }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="payment" element={<PaymentPage />} />
              <Route path="catalog" element={<CatalogPage />} />
              <Route path="empty" element={<EmptyPage />} />
              <Route path="auth" element={<LoginPage />} />
              <Route path="reg" element={<RegPage />} />
              <Route path="logout" element={<LogoutPage />} />
              <Route path="сallBack" element={<CallBack />} />
            </Route>
          </Routes>
        </CounterContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
