// import React, { useState } from "react";
import {
  AuthWrapper,
  CategoriesWrapper,
  LogOutButton,
  // NavLinkLogin,
  // NavLinkRegister,
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
import { useModal } from "../../../hooks/useModal";
import Modal from "../../modal/Modal";
import Register from "../../authPage/register/Register";
import Login from "../../authPage/login/Login";
import Logout from "../../authPage/logout/Logout";

interface NavProps {
  handleCloseBurger: () => void;
}

const Nav: React.FC<NavProps> = ({ handleCloseBurger }) => {
  const {
    isOpen: isOpenRegisterModal,
    openModal: openRegisterModal,
    closeModal: closeRegisterModal,
  } = useModal();
  const {
    isOpen: isOpenLoginModal,
    openModal: openLoginModal,
    closeModal: closeLoginModal,
  } = useModal();
  const {
    isOpen: isOpenLogoutModal,
    openModal: openLogoutModal,
    closeModal: closeLogoutModal,
  } = useModal();

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
              {isOpenLogoutModal && (
                <Modal closeModal={closeLogoutModal}>
                  <Logout />
                </Modal>
              )}
              <LogOutButton onClick={openLogoutModal}>
                <svg onClick={handleCloseBurger}>
                  <use xlinkHref={`${sprite}#icon-log-out`}></use>
                </svg>
                Log out
              </LogOutButton>
            </>
          ) : (
            <>
              {isOpenRegisterModal && (
                <Modal closeModal={closeRegisterModal}>
                  <Register />
                </Modal>
              )}
              <button onClick={openRegisterModal}>Register</button>
              {isOpenLoginModal && (
                <Modal closeModal={closeLoginModal}>
                  <Login />
                </Modal>
              )}
              <button onClick={openLoginModal}>Login</button>
              {/* <NavLinkRegister to="/register">Register</NavLinkRegister>
            <NavLinkLogin to="/login"> Login</NavLinkLogin> */}
            </>
          )}
        </AuthWrapper>
      </NavWrapper>
    </>
  );
};

export default Nav;
