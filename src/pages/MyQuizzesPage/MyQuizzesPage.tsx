import { ChangeEvent, useEffect, useState } from "react";
import CreateQuizLink from "../../shared/createquiz/CreateQuizLink";
import {
  StyledContainer,
  StyledContainer2,
  StyledH2,
  StyledUl,
  StyledButton,
  StyledInputSearch,
  StyledBox,
  StyledSvg,
} from "./MyQuizzesPage.styled";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getOwnQuizes } from "../../redux/quiz/operations";
import { getQuizListCategory } from "../../redux/quiz/selectors";
import QuizListItem from "../../shared/quizlistitem/QuizListItem";
import sprite from "../../images/icons/sprite.svg";
import { getQuizIsLoading } from "../../redux/quiz/selectors";
import Loader from "../../shared/loader-spinner/Loader";
import { getUserThunk } from "../../redux/user/operations";
import { setToken } from "../../redux/auth/operations";
import { selectUserToken } from "../../redux/auth/selectors";

const MyQuizzesPage = () => {
  const dispatch = useAppDispatch();
  const quizes = useAppSelector(getQuizListCategory);
  const isLoading = useAppSelector(getQuizIsLoading);
  const [pageSize, setPageSize] = useState<number>(8);
  const [search, setSearch] = useState<string>("");
  const userToken = useAppSelector(selectUserToken);

  const filteredQuizes = quizes.filter((quiz) => {
    return quiz.theme.toLowerCase().includes(search);
  });

  useEffect(() => {
    setToken(userToken);
    dispatch(getUserThunk())
      .unwrap()
      .then(() => {
        dispatch(getOwnQuizes());
      });
  }, [dispatch]);

  const handleLoadMore = () => {
    setPageSize((prev) => prev + 8);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <StyledBox>
      <StyledContainer>
        <StyledH2>My quize</StyledH2>
        <CreateQuizLink />
      </StyledContainer>
      <StyledContainer2>
        <StyledSvg sprite={sprite} id={"icon-search"} width={14} height={14} />
        <StyledInputSearch
          value={search}
          onChange={handleSearchChange}
          placeholder="Search"
        />
      </StyledContainer2>
      <StyledUl>
        {filteredQuizes?.map((quiz, index) => {
          if (index < pageSize) {
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
        })}
      </StyledUl>
      {isLoading ? <Loader /> : <></>}
      {quizes.length > pageSize ? (
        <StyledButton type="button" onClick={handleLoadMore}>
          Load More
        </StyledButton>
      ) : (
        <></>
      )}
    </StyledBox>
  );
};

export default MyQuizzesPage;
