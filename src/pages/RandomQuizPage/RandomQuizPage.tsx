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
import { getQuizCategoryPageSize } from "../../redux/quiz/selectors";

const RandomQuizPage = () => {
  const location = useLocation();
  const param = location.search.substring(1);
  const dispatch = useAppDispatch();
  const totalPages = useAppSelector(getQuizCategoryPageSize);

  const [page, setPage] = useState(1);
  const [quizes, setQuizes] = useState<QuizBody[]>([]);

  useEffect(() => {
    const query = { ageGroup: param, page: page, pageSize: 7 };

    dispatch(fetchCategoriesThunk(query))
      .unwrap()
      .then((data) => {
        console.log(data);
        return setQuizes((prevQuizes) => {
          if (prevQuizes.length === 0) {
            return [...data.data];
          }
          return [...prevQuizes, ...data.data];
        });
      });
  }, [dispatch, page, param]);

  const handleLoadMore = () => {
    if (page <= totalPages) return setPage(page + 1);
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
              theme={quiz.theme}
              rating={quiz.rating}
              ageGroup={quiz.ageGroup}
              finished={quiz.finished}
            />
          ))}
        </StyledUl>
        {page < totalPages ? (
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
