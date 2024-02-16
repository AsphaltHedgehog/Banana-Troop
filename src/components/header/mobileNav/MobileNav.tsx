// import React, { useState } from "react";
import {
  AuthWrapper,
  CategoriesWrapper,
  NavLinkLogOut,
  NavLinkLogin,
  NavLinkRegister,
  NavLinkSettings,
  NavWrapper,
} from "./MobileNav.styled";
import { StyledH2 } from "../wholeComponent/Header.styled";
import { NavLink, NavigateFunction, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";

import sprite from "../../../images/icons/sprite.svg";
// import { useAppDispatch } from "../../../redux/hooks";

interface NavProps {
  handleCloseBurger: () => void;
}

const Nav: React.FC<NavProps> = ({ handleCloseBurger }) => {
  const navigate: NavigateFunction = useNavigate();
  // const dispatch = useAppDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

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
          <NavLink to="/randomQuiz?adults">For adults</NavLink>
          <NavLink to="/randomQuiz?children">For children</NavLink>
        </CategoriesWrapper>
        <AuthWrapper>
          {isLoggedIn ? (
            <>
              <NavLinkSettings to="/settings">
                <svg onClick={handleCloseBurger}>
                  <use xlinkHref={`${sprite}#icon-settings`}></use>
                </svg>
                Settings
              </NavLinkSettings>
              <NavLinkLogOut to="/auth/logout">
                <svg onClick={handleCloseBurger}>
                  <use xlinkHref={`${sprite}#icon-log-out`}></use>
                </svg>
                Log out
              </NavLinkLogOut>
            </>
          ) : (
            <>
              <NavLinkRegister to="/auth/register">Register</NavLinkRegister>
              <NavLinkLogin to="/auth/login"> Login</NavLinkLogin>
            </>
          )}
        </AuthWrapper>
      </NavWrapper>
    </>
  );
};

export default Nav;
