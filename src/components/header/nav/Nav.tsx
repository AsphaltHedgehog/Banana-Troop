import React from "react";
import {
  AuthWrapper,
  CategoriesWrapper,
  NavLinkLogin,
  NavLinkRegister,
  NavWrapper,
} from "./Nav.styled";
import { StyledH2 } from "../wholeComponent/Header.styled";
import { NavLink, useNavigate } from "react-router-dom";

interface NavProps {
  handleCloseBurger: () => void;
}

const Nav: React.FC<NavProps> = ({ handleCloseBurger }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    handleCloseBurger();
    navigate("/");
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.tagName === "A" || target.tagName === "H2") {
      handleCloseBurger();
    }
  };

  return (
    <>
      <NavWrapper onClick={handleClick}>
        <StyledH2 onClick={handleGoHome}>QuizMaster</StyledH2>
        <CategoriesWrapper>
          <NavLink to="/forAdults">For adults</NavLink>
          <NavLink to="/forChildren">For children</NavLink>
        </CategoriesWrapper>
        <AuthWrapper>
          <NavLinkRegister to="/register">Register</NavLinkRegister>
          <NavLinkLogin to="/login"> Login</NavLinkLogin>
        </AuthWrapper>
      </NavWrapper>
    </>
  );
};

export default Nav;
