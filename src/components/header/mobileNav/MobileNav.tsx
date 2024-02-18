// import React, { useState } from "react";
import {
  AuthWrapper,
  CategoriesWrapper,
  NavLinkLogOut,
  NavLinkLogin,
  NavLinkMobileWrapper,
  NavLinkRegister,
  NavLinkSettings,
  NavWrapper,
} from "./MobileNav.styled";
import { StyledH2 } from "../wholeComponent/Header.styled";
import { NavLink, NavigateFunction, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";

import sprite from "../../../images/icons/sprite.svg";
import { NavLinkHeader } from "../tabletDesktopNav/TablDeskNav.styled";

interface NavProps {
  handleCloseBurger: () => void;
}

const Nav: React.FC<NavProps> = ({ handleCloseBurger }) => {
  const navigate: NavigateFunction = useNavigate();

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

        {!isLoggedIn ? (
          <CategoriesWrapper>
            <NavLink to="/randomQuiz?adults">For adults</NavLink>
            <NavLink to="/randomQuiz?children">For children</NavLink>{" "}
          </CategoriesWrapper>
        ) : (
          <NavLinkMobileWrapper>
            <NavLinkHeader to="/">Home</NavLinkHeader>
            <NavLinkHeader to="/discover">Discover</NavLinkHeader>
            <NavLinkHeader to="/favorites">Favorite quiz</NavLinkHeader>
            <NavLinkHeader to="/myQuiz">My quiz</NavLinkHeader>
          </NavLinkMobileWrapper>
        )}

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
