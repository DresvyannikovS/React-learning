// import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Layout } from "./pages/LayoutPage";

import { Catalog } from "./pages/CatalogPage";
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

function App() {
  const [token, setToken] = useState(null);

  const updateToken = () => {
    setToken(getUserToken);
  };

  useEffect(() => {
    updateToken();
  }, []);

  return (
    <>
      <AllGlobal />
      <UserContext.Provider value={{ token, updateToken }}>
        <Routes>
          <Route path="/"         element={<Layout />}>
            <Route index          element={<MainPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="empty"   element={<EmptyPage />} />
            <Route path="auth"    element={<LoginPage />} />
            <Route path="reg"     element={<RegPage />} />
            <Route path="logout"  element={<LogoutPage />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
