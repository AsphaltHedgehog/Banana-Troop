// LastPassedQuizzes.tsx
import React, { useEffect, useState } from "react";
import Box from "../../components/box/Box";
import CreateQuizLink from "../../shared/createquiz/CreateQuizLink";
import {
  StyledEmptyText,
  StyledLoadMore,
  StyledUlCards,
} from "../Discover/DiscoverPage.styled";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserThunk } from "../../redux/user/operations";
import { getPassedQuizzesThunk } from "../../redux/quiz/operations";
import QuizListItem from "../../shared/quizlistitem/QuizListItem";
import { setToken } from "../../redux/auth/operations";
import { selectUserToken } from "../../redux/auth/selectors";
import { getQuizListCategory } from "../../redux/quiz/selectors";
import { StyledLastHeader, StyledTitle } from "./LastPassedQuizes.styled";

const LastPassedQuizzes: React.FC = () => {
  const dispatch = useAppDispatch();
  const [pageSize, setPageSize] = useState<number>(8);
  const userToken = useAppSelector(selectUserToken);
  const passedQuizzes = useAppSelector(getQuizListCategory);

  useEffect(() => {
    setToken(userToken);
    dispatch(getUserThunk())
      .unwrap()
      .then(() => {
        dispatch(getPassedQuizzesThunk());
      });
  }, [dispatch, userToken]);

  const handleLoadMore = () => {
    setPageSize((prev) => prev + 8);
  };

  return (
    <Box>
      <StyledLastHeader>
        <StyledTitle>Last passed quizzes</StyledTitle>
        <CreateQuizLink />
      </StyledLastHeader>
      <div>
        <StyledUlCards>
          {passedQuizzes !== undefined && passedQuizzes.length > 0 ? (
            passedQuizzes.map((quiz) => (
              <QuizListItem
                key={quiz._id}
                id={quiz._id}
                theme={quiz.theme}
                rating={quiz.rating}
                finished={quiz.finished}
                owner={quiz.owner}
                ageGroup={quiz.ageGroup}
              />
            ))
          ) : (
            <StyledEmptyText>No quizzes found</StyledEmptyText>
          )}
        </StyledUlCards>
      </div>
      <div>
        {passedQuizzes !== undefined && passedQuizzes.length > pageSize ? (
          <StyledLoadMore type="button" onClick={handleLoadMore}>
            Load More
          </StyledLoadMore>
        ) : (
          <></>
        )}
      </div>
    </Box>
  );
};

export default LastPassedQuizzes;
