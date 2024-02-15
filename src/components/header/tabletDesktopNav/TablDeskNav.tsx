import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  NavLinkHeader,
  NavLinkHeaderWrapper,
  OpenedUserWidget,
  SVGChevronDown,
  UserWidgetWrapper,
} from "./TablDeskNav.styled";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import {
  NavLinkLogOut,
  NavLinkLogin,
  NavLinkRegister,
  NavLinkSettings,
} from "../mobileNav/MobileNav.styled";
import { selectGetUser } from "../../../redux/user/selectors";
import sprite from "../../../images/icons/sprite.svg";

const cloudinaryURL =
  "https://res.cloudinary.com/dddrrdx7a/image/upload/v1707757640/";
const gravatarBaseURL = "http://www.gravatar.com/avatar/";

const TablDeskNav = () => {
  const { name } = useSelector(selectGetUser);
  const { gravatarURL } = useSelector(selectGetUser);
  const { avatar } = useSelector(selectGetUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const widgetRef = useRef<HTMLDivElement>(null);

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
                avatar
                  ? `${cloudinaryURL}${avatar}`
                  : `${gravatarBaseURL}${gravatarURL}`
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
          <NavLinkRegister to="/auth/register">Register</NavLinkRegister>
          <NavLinkLogin to="/auth/login"> Login</NavLinkLogin>
        </>
      )}
    </>
  );
};

export default TablDeskNav;
