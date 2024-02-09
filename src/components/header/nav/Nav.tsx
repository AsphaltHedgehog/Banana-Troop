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

const Nav: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.tagName === "A" || target.tagName === "H2") {
      closeModal();
    }
  };

  return (
    <>
      <NavWrapper onClick={handleClick}>
        <StyledH2 onClick={handleGoHome}>QuizMaster</StyledH2>
        <CategoriesWrapper>
          <NavLink to="/forAdults" onClick={closeModal}>
            For adults
          </NavLink>
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
