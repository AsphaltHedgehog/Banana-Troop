import { FC, useState } from "react";
import { HeaderWrapper, StyledH2 } from "./Header.styled";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import UserDropout from "../userDropout/userDropout";

const Header: FC = () => {
  const [endAnimation, setEndAnimation] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      <UserDropout/>
      <StyledH2>QuizMaster</StyledH2>
      <BurgerMenu
        endAnimation={endAnimation}
        setEndAnimation={setEndAnimation}
      />
    </HeaderWrapper>
  );
};

export default Header;
