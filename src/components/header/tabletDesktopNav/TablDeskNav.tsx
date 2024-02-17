import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  CategoriesWrapperTablDesk,
  NavLinkHeader,
  NavLinkHeaderLogin,
  NavLinkHeaderRegister,
  NavLinkHeaderWrapper,
  NavLinksAuthWrapper,
  OpenedUserWidget,
  SVGChevronDown,
  UserWidgetWrapper,
} from "./TablDeskNav.styled";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { NavLinkLogOut, NavLinkSettings } from "../mobileNav/MobileNav.styled";
import { selectGetUser } from "../../../redux/user/selectors";
import sprite from "../../../images/icons/sprite.svg";
import { useLocation } from "react-router-dom";

const cloudinaryURL =
  "https://res.cloudinary.com/dddrrdx7a/image/upload/v1707757640/";

const TablDeskNav = () => {
  const { name } = useSelector(selectGetUser);
  // const { gravatarURL } = useSelector(selectGetUser);
  const { avatar } = useSelector(selectGetUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const widgetRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const [openUserWidget, setOpenUserWidget] = useState<boolean>(false);
  const [linkClicked, setLinkClicked] = useState<boolean>(false);

  const handleOpenUserWidget = () => {
    setOpenUserWidget((prev) => !prev);
  };

  useEffect(() => {
    if (!openUserWidget) {
      const timer = setTimeout(() => {
        if (widgetRef.current) {
          widgetRef.current.style.opacity = "0";
        }
        setLinkClicked(false);
      }, 480);
      return () => clearTimeout(timer);
    }
    if (openUserWidget) {
      if (widgetRef.current) {
        widgetRef.current.style.opacity = "1";
        setLinkClicked(true);
      }
    }
  }, [openUserWidget, linkClicked]);

  const handleHeaderLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.tagName === "A") {
      setOpenUserWidget(false);
    }
  };

  const handleWidgetLinkClick = () => {
    setOpenUserWidget(false);
    handleOpenUserWidget();
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <NavLinkHeaderWrapper onClick={handleHeaderLinkClick}>
            <NavLinkHeader to="/">Home</NavLinkHeader>
            <NavLinkHeader to="/discover">Discover</NavLinkHeader>
            <NavLinkHeader to="/favorites">Favorite quiz</NavLinkHeader>
            <NavLinkHeader to="/myQuiz">My quiz</NavLinkHeader>
          </NavLinkHeaderWrapper>
          <UserWidgetWrapper onClick={handleOpenUserWidget}>
            <img
              src={
                avatar.includes("http://www.gravatar.com/avatar/")
                  ? avatar
                  : `${cloudinaryURL}${avatar}`
              }
              alt="User avatar"
            />
            <p>{name}</p>
            <SVGChevronDown $isOpened={openUserWidget}>
              <use xlinkHref={`${sprite}#chevron-down`}></use>
            </SVGChevronDown>
            <OpenedUserWidget
              ref={widgetRef}
              $isOpened={openUserWidget}
              $linkClicked={linkClicked}
              onClick={handleWidgetLinkClick}
            >
              <NavLinkSettings to="/settings">
                <svg>
                  <use xlinkHref={`${sprite}#icon-settings`}></use>
                </svg>
                Settings
              </NavLinkSettings>
              <NavLinkLogOut to="/auth/logout">
                <svg>
                  <use xlinkHref={`${sprite}#icon-log-out`}></use>
                </svg>
                Log out
              </NavLinkLogOut>
            </OpenedUserWidget>
          </UserWidgetWrapper>
        </>
      ) : (
        <>
          {!location.pathname.includes("quizMachen") && (
            <CategoriesWrapperTablDesk>
              <NavLinkHeader to="/randomQuiz?adults">For adults</NavLinkHeader>
              <NavLinkHeader to="/randomQuiz?children">
                For children
              </NavLinkHeader>
            </CategoriesWrapperTablDesk>
          )}
          <NavLinksAuthWrapper>
            <NavLinkHeaderRegister to="/auth/register">
              Register
            </NavLinkHeaderRegister>
            <NavLinkHeaderLogin to="/auth/login"> Login</NavLinkHeaderLogin>
          </NavLinksAuthWrapper>
        </>
      )}
    </>
  );
};

export default TablDeskNav;
