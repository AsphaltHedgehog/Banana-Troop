import { FC, useState } from "react";
import { HeaderWrapper, StyledH2 } from "./Header.styled";
import BurgerMenu from "../burgerMenu/BurgerMenu";

const Header: FC = () => {
  const [endAnimation, setEndAnimation] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      <StyledH2>QuizMaster</StyledH2>
      <BurgerMenu
        endAnimation={endAnimation}
        setEndAnimation={setEndAnimation}
      />
    </HeaderWrapper>
  );
};

export default Header;
