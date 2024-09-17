import { Main } from "../components/Main";
import { MainGlobalStyle } from "../components/Style/Main.styled";
import { SlickGlobalStyle } from "../components/Style/Slick.styled";

export const MainPage = () => {
  return (
    <>
      < MainGlobalStyle />
      < SlickGlobalStyle />
      < Main />
    </>
  );
};
