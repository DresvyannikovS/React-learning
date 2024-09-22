import logo from "../img/logo.svg";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header logo />

      <main>
        <Outlet />
      </main>

      <Footer logo={logo} />
    </>
  );
};
