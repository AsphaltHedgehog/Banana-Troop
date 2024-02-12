import { useLocation } from "react-router-dom";
import {
  StyledH2,
  StyledP,
  StyledUl,
  StyledBox,
  StyledSection,
  StyledButton,
} from "./RandomQuizPage.styled";
import CreateQuizCard from "../../shared/createquizcard/CreateQuizCard";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchCategoriesThunk } from "../../redux/quiz/operations";
import QuizListItem from "../../shared/quizlistitem/QuizListItem";
import { useState } from "react";
import { QuizBody } from "../../redux/quiz/slice";
import {
  getQuizCategoryTotal,
  getQuizIsLoading,
} from "../../redux/quiz/selectors";
import Loader from "../../shared/loader-spinner/Loader";

const RandomQuizPage = () => {
  const location = useLocation();
  const param = location.search.substring(1);
  const dispatch = useAppDispatch();
  const total = useAppSelector(getQuizCategoryTotal);
  const isLoading = useAppSelector(getQuizIsLoading);

  const [pageSize, setPageSize] = useState(7);
  const [quizes, setQuizes] = useState<QuizBody[]>([]);

  useEffect(() => {
    const query = { ageGroup: param, pageSize: pageSize };

    dispatch(fetchCategoriesThunk(query))
      .unwrap()
      .then((data) => {
        console.log(data);
        return setQuizes(() => {
          return [...data.data.result];
        });
      });
  }, [dispatch, pageSize, param]);

  const handleLoadMore = () => {
    setPageSize((prev) => prev + 8);
  };

  return (
    <StyledBox>
      <StyledSection>
        <StyledH2>
          {param === "adults" ? "For Adults" : "For Children"}
        </StyledH2>
        <StyledP>
          {param === "adults"
            ? "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            : "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}
        </StyledP>
        <StyledUl>
          <CreateQuizCard />
          {quizes.map((quiz) => (
            <QuizListItem
              key={quiz._id}
              id={quiz._id}
              theme={quiz.theme}
              rating={quiz.rating}
              ageGroup={quiz.ageGroup}
              finished={quiz.finished}
            />
          ))}
        </StyledUl>
        {isLoading ? <Loader /> : <></>}
        {quizes.length < total[0]?.count && !isLoading ? (
          <StyledButton type="button" onClick={handleLoadMore}>
            Load More
          </StyledButton>
        ) : (
          <></>
        )}
      </StyledSection>
    </StyledBox>
  );
};

export default RandomQuizPage;
