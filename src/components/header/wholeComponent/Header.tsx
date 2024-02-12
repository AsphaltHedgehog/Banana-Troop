import { FC } from "react";
import { HeaderWrapper, StyledH2 } from "./Header.styled";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { useNavigate } from "react-router";
import Box from "../../box/Box";

const Header: FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box>
      <HeaderWrapper>
        <StyledH2 onClick={handleGoHome}>QuizMaster</StyledH2>
        <BurgerMenu />
      </HeaderWrapper>
    </Box>
  );
};

export default Header;
