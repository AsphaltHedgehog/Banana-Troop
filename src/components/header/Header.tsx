import { FC } from "react";
import { HeaderWrapper, StyledH2 } from "./Header.styled";

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <StyledH2>QuizMaster</StyledH2>
    </HeaderWrapper>
  );
};

export default Header;
