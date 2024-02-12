// import React, { useState } from "react";
import {
  AuthWrapper,
  CategoriesWrapper,
  LogOutButton,
  NavLinkLogin,
  NavLinkRegister,
  NavLinkSettings,
  NavWrapper,
} from "./Nav.styled";
import { StyledH2 } from "../wholeComponent/Header.styled";
import { NavLink, NavigateFunction, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
// import { logoutThunk } from "../../../redux/auth/operations";
// import { toast } from "react-toastify";
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

  // const handleLogOut = () => {
  //   dispatch(logoutThunk())
  //     .unwrap()
  //     .then(() => {
  //       handleCloseBurger();
  //       navigate("/login");
  //     })
  //     .catch(() => {
  //       toast.warning("Oops, something went wrong! Try again, please!");
  //     });
  // };

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

              <LogOutButton>
                <svg onClick={handleCloseBurger}>
                  <use xlinkHref={`${sprite}#icon-log-out`}></use>
                </svg>
                Log out
              </LogOutButton>
            </>
          ) : (
            <>
              <NavLinkRegister to="/register">Register</NavLinkRegister>
              <NavLinkLogin to="/login"> Login</NavLinkLogin>
            </>
          )}
        </AuthWrapper>
      </NavWrapper>
    </>
  );
};

export default Nav;
