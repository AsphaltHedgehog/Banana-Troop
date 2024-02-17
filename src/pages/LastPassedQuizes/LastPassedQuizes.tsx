import React from 'react'
import Box from '../../components/box/Box'
import CreateQuizLink from '../../shared/createquiz/CreateQuizLink'
import { StyledEmptyText, StyledLoadMore, StyledUlCards } from '../Discover/DiscoverPage.styled'
import QuizListItem from '../../shared/quizlistitem/QuizListItem'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { patchPassedQuiz, retakePassedQuiz } from '../../redux/user/operations'

interface Quiz {
  _id: string;
  theme: string;
  rating: number;
  finished: number;
  owner: string;
  correctAnswers: number; 
  totalQuestions: number; 
}

interface Props {
  quizes: Quiz[];
}

const LastPassedQuizzes: React.FC<Props> = ({ quizes }) => {
  const dispatch = useAppDispatch();

  const totalListCategory = useAppSelector((state) => state.quizes.listCategory.data.total);

  const handlePatchPassedQuiz = (quizId: string, correctAnswers: number, totalQuestions: number) => {
    dispatch(patchPassedQuiz({ quizId, correctAnswers, totalQuestions, quantityQuestions: 0, rating: 0 }))
  };

  const handleRetakePassedQuiz = (quizId: string, correctAnswers: number, totalQuestions: number) => {
    dispatch(retakePassedQuiz({ quizId, correctAnswers, totalQuestions, quantityQuestions: 0, rating: 0 }))
  };

  const handleLoadMore = () => { 
    // Логіка загрузки більше тут
  };

  return (
    <Box>
      <div>
        <h2>Last passed quizzes</h2>
        <CreateQuizLink/>
      </div>
      <div>
        <StyledUlCards>
          {quizes.length > 0 ? (
            quizes.map((quiz) => (
              <QuizListItem 
                key={quiz._id}
                id={quiz._id}
                theme={quiz.theme}
                rating={quiz.rating}
                finished={quiz.finished}
                owner={quiz.owner}
                correctAnswers={quiz.correctAnswers}
                totalQuestions={quiz.totalQuestions}
                onPatchPassedQuiz={handlePatchPassedQuiz}
                onRetakePassedQuiz={handleRetakePassedQuiz}
                ageGroup={""} 
              />
            ))
          ) : (
            <StyledEmptyText>No quizzes found</StyledEmptyText>
          )}
        </StyledUlCards>
      </div>
      <div>
        {quizes.length < totalListCategory[0]?.total && quizes.length && (
          <StyledLoadMore onClick={handleLoadMore}>Load More</StyledLoadMore>
        )}
      </div>
    </Box>
  )
}

export default LastPassedQuizzes
