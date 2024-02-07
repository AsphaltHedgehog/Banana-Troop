import { FC } from "react";
import { HeaderWrapper, StyledH2, SvgBurgerMenu } from "./Header.styled";
import sprite from "../../images/icons/sprite.svg";

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <StyledH2>QuizMaster</StyledH2>
      <SvgBurgerMenu>
        <use xlinkHref={`${sprite}#icon-align-justify`}></use>
      </SvgBurgerMenu>
    </HeaderWrapper>
  );
};

export default Header;
