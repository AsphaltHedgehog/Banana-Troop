import { useSelector } from "react-redux";
import {
  NavLinkHeader,
  NavLinkHeaderWrapper,
  OpenedUserWidget,
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
import { useEffect, useRef, useState } from "react";

const cloudinaryURL =
  "https://res.cloudinary.com/dddrrdx7a/image/upload/v1707757640/";
const gravatarBaseURL = "http://www.gravatar.com/avatar/";

const TablDeskNav = () => {
  const { name } = useSelector(selectGetUser);
  const { gravatarURL } = useSelector(selectGetUser);
  const { avatar } = useSelector(selectGetUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const widgetRef = useRef(null);

  const [openUserWidget, setOpenUserWidget] = useState<boolean>(false);

  const handleOpenUserWidget = () => {
    setOpenUserWidget((prev) => !prev);
  };

  useEffect(() => {
    if (openUserWidget === false) {
      const timer = setTimeout(() => {
        if (widgetRef.current) {
          widgetRef.current.style.opacity = "0";
        }
      }, 480);
      return () => clearTimeout(timer);
    } else {
      if (widgetRef.current) {
        widgetRef.current.style.opacity = "1";
      }
    }
  }, [openUserWidget]);

  const handleLinkClick = () => {
    setOpenUserWidget(false);
    handleOpenUserWidget();
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <NavLinkHeaderWrapper>
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
            <svg>
              <use xlinkHref={`${sprite}#chevron-down`}></use>
            </svg>
            {/* {openUserWidget && ( */}
            <OpenedUserWidget ref={widgetRef} $isOpened={openUserWidget}>
              <NavLinkSettings to="/settings" onClick={handleLinkClick}>
                <svg>
                  <use xlinkHref={`${sprite}#icon-settings`}></use>
                </svg>
                Settings
              </NavLinkSettings>
              <NavLinkLogOut to="/auth/logout" onClick={handleLinkClick}>
                <svg>
                  <use xlinkHref={`${sprite}#icon-log-out`}></use>
                </svg>
                Log out
              </NavLinkLogOut>
            </OpenedUserWidget>
            {/* )} */}
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
