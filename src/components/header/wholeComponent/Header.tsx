import { FC } from "react";
import { HeaderWrapper, StyledH2 } from "./Header.styled";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { useNavigate } from "react-router";

const Header: FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <StyledH2 onClick={handleGoHome}>QuizMaster</StyledH2>
      <BurgerMenu />
    </HeaderWrapper>
  );
};

export default Header;
