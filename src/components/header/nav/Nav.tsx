import React from "react";
import { NavWrapper } from "./Nav.styled";
import { StyledH2 } from "../wholeComponent/Header.styled";
import { NavLink, useNavigate } from "react-router-dom";

const Nav: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.tagName === "A") {
      closeModal();
    }
  };

  return (
    <>
      <NavWrapper onClick={handleClick}>
        <StyledH2 onClick={handleGoHome}>QuizMaster</StyledH2>
        <NavLink to="/forAdults" onClick={closeModal}>
          For adults
        </NavLink>
        <NavLink to="/forChildren">For children</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login"> Login</NavLink>
      </NavWrapper>
    </>
  );
};

export default Nav;
