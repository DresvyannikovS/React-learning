import { Empty } from "../components/Empty";
import { EmptyGlobalStyle } from "../components/Style/Empty.styled";

export const EmptyPage = () => {
  return (
    <>
      <EmptyGlobalStyle />
      <Empty />
    </>
  );
};
