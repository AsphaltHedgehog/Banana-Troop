import { FC } from "react";
import { HeaderWrapper, StyledH2, StyledHeaderBox } from "./Header.styled";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import TablDeskNav from "../tabletDesktopNav/TablDeskNav";

const Header: FC = () => {
  const navigate = useNavigate();

  const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <StyledHeaderBox>
      <HeaderWrapper>
        <StyledH2 onClick={handleGoHome}>QuizMaster</StyledH2>
        {isTabletOrDesktop ? <TablDeskNav /> : <BurgerMenu />}
      </HeaderWrapper>
    </StyledHeaderBox>
  );
};

export default Header;
