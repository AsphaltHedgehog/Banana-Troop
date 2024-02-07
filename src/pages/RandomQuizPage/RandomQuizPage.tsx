import { useLocation } from "react-router-dom";
import {
  StyledH2,
  StyledP,
  StyledUl,
  StyledBox,
} from "./RandomQuizPage.styled";
// import QuizListItem from "../../shared/quizlistitem/QuizListItem";
import CreateQuizCard from "../../shared/createquizcard/CreateQuizCard";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchCategoriesThunk } from "../../redux/quiz/operations";
import { getQuizListCategory } from "../../redux/quiz/selectors";
import QuizListItem from "../../shared/quizlistitem/QuizListItem";

const RandomQuizPage = () => {
  const quizes = useAppSelector(getQuizListCategory);
  const location = useLocation();
  const param = location.search.substring(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const query = { ageGroup: param, page: 1, pageSize: 8 };

    dispatch(fetchCategoriesThunk(query));
  }, [dispatch, param]);

  return (
    <StyledBox>
      <StyledH2>{param === "adults" ? "For Adults" : "For Children"}</StyledH2>
      <StyledP>
        {param === "adults"
          ? "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          : "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}
      </StyledP>
      <StyledUl>
        <CreateQuizCard />
        {quizes.map((quiz) => (
          <QuizListItem
            theme={quiz.theme}
            rating={quiz.rating}
            ageGroup={quiz.ageGroup}
            finished={quiz.finished}
          />
        ))}
      </StyledUl>
    </StyledBox>
  );
};

export default RandomQuizPage;
