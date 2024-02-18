import {
  StyledBox,
  StyledContainer,
  StyledH2,
  StyledSpan,
  StyledUserAvatar,
  StyledUserName,
  StyledUserWrapper,
  StyledP,
  StyledUl,
  StyledLi,
  StyledContainer2,
  StyledNavLink,
  StyledH3,
  StyledLastWrapper,
  StyledSideWrapper,
} from "./UserHomePage.styled";
import CreateQuizLink from "../../shared/createquiz/CreateQuizLink";
import { useAppSelector } from "../../redux/hooks";
import { selectGetUser } from "../../redux/user/selectors";

const UserHomePage = () => {
  const user = useAppSelector(selectGetUser);

  return (
    <StyledBox>
      <StyledContainer>
        <StyledH2>Home</StyledH2>
        <CreateQuizLink />
      </StyledContainer>
      <StyledContainer2>
        <StyledUserWrapper>
          <StyledUserAvatar src={user.avatar} alt="User Avatar" />
          <StyledUserName>{user.name}</StyledUserName>
          <StyledUl>
            <StyledLi>
              <StyledP>Passed quizzes</StyledP>
              <StyledSpan>{user.passedQuizzes?.length}</StyledSpan>
            </StyledLi>
            <StyledLi>
              <StyledP>Average success</StyledP>
              <StyledSpan>{user.average}%</StyledSpan>
            </StyledLi>
          </StyledUl>
        </StyledUserWrapper>
        <StyledSideWrapper>
          <StyledLastWrapper>
            <StyledH3>Last passed quizzes</StyledH3>
            <StyledNavLink to="/">See all</StyledNavLink>
          </StyledLastWrapper>
          <div>
            <ul></ul>
          </div>
        </StyledSideWrapper>
      </StyledContainer2>
    </StyledBox>
  );
};

export default UserHomePage;
