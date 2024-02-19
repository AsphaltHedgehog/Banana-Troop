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
  StyledLastUl,
} from "./UserHomePage.styled";
import CreateQuizLink from "../../shared/createquiz/CreateQuizLink";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectGetUser, selectUserIsLoading } from "../../redux/user/selectors";

import { useEffect } from "react";
import { setToken } from "../../redux/auth/operations";
import { getUserThunk } from "../../redux/user/operations";
import { getPassedQuizzesThunk } from "../../redux/quiz/operations";
import { selectUserToken } from "../../redux/auth/selectors";
import {
  getQuizIsLoading,
  getQuizListCategory,
} from "../../redux/quiz/selectors";
import QuizListItem from "../../shared/quizlistitem/QuizListItem";
import Loader from "../../shared/loader-spinner/Loader";

// const cloudinaryURL =
//   "https://res.cloudinary.com/dddrrdx7a/image/upload/v1707757640/";

const UserHomePage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectGetUser);
  const { avatar } = useAppSelector(selectGetUser);
  const userToken = useAppSelector(selectUserToken);
  const quizes = useAppSelector(getQuizListCategory);
  const quizIsLoading = useAppSelector(getQuizIsLoading);
  const userIsLoading = useAppSelector(selectUserIsLoading);

  useEffect(() => {
    setToken(userToken);
    dispatch(getUserThunk())
      .unwrap()
      .then(() => {
        dispatch(getPassedQuizzesThunk());
      });
  }, [dispatch, userToken]);

  return (
    <StyledBox>
      <StyledContainer>
        <StyledH2>Home</StyledH2>
        <CreateQuizLink />
      </StyledContainer>
      {userIsLoading ? (
        <Loader />
      ) : (
        <StyledContainer2>
          <StyledUserWrapper>
            <StyledUserAvatar
              src={
                avatar.includes("gravatar.com/avatar/")
                  ? `https:${avatar}`
                  : avatar
              }
              alt="User Avatar"
            />
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
              <StyledNavLink to="/lastPassedQuizzes">See all</StyledNavLink>
            </StyledLastWrapper>
            <StyledLastUl>
              {quizIsLoading ? (
                <Loader />
              ) : (
                quizes?.map((quiz, index) => {
                  if (index < 3) {
                    return (
                      <QuizListItem
                        key={quiz._id}
                        id={quiz._id}
                        theme={quiz.theme}
                        rating={quiz.rating}
                        ageGroup={quiz.ageGroup}
                        finished={quiz.finished}
                        owner={quiz.owner}
                      />
                    );
                  }
                })
              )}
            </StyledLastUl>
          </StyledSideWrapper>
        </StyledContainer2>
      )}
    </StyledBox>
  );
};

export default UserHomePage;
