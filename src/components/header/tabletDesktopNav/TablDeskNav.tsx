import { useSelector } from "react-redux";
import {
  NavLinkHeader,
  NavLinkHeaderWrapper,
  UserWidgetWrapper,
} from "./TablDeskNav.styled";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { NavLinkLogin, NavLinkRegister } from "../mobileNav/MobileNav.styled";
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
          <UserWidgetWrapper>
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
