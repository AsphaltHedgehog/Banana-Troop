import { FC } from "react";
import { HeaderWrapper, StyledH2 } from "./Header.styled";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { useNavigate } from "react-router";

// import UserDropout from "../userDropout/userDropout";

const Header: FC = () => {
  const navigate = useNavigate();
  // const [endAnimation, setEndAnimation] = useState<boolean>(false);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <HeaderWrapper>
      {/* <UserDropout /> */}
      <StyledH2 onClick={handleGoHome}>QuizMaster</StyledH2>
      <BurgerMenu
      // endAnimation={endAnimation}
      // setEndAnimation={setEndAnimation}
      />
    </HeaderWrapper>
  );
};

export default Header;
