import React, {
  // useEffect,
  useState
} from 'react'
import Box from '../../components/box/Box'
import CreateQuizLink from '../../shared/createquiz/CreateQuizLink'
import { StyledEmptyText, StyledLoadMore, StyledUlCards } from '../Discover/DiscoverPage.styled'
import QuizListItem from '../../shared/quizlistitem/QuizListItem'
import { useAppSelector } from '../../redux/hooks'
// import { useAppDispatch } from '../../redux/hooks'

interface Quiz {
  _id: string;
  theme: string;
  rating: number;
  finished: number;
  owner: string;
}

interface Props {
  quizes: Quiz[];
}

const LastPassedQuizzes: React.FC<Props> = ({ quizes }) => {
  // const dispatch = useAppDispatch();
  // const [passedQuizzes, setPassedQuizzes] = useState([]);
  const [sizeParam, setSizeParam] = useState<number>(8);

  const total = useAppSelector((state) => state.quizes.listCategory.data.total);
  const total = useAppSelector(getQuizCategoryTotal);
  
  const handleLoadMore = () => {
    setSizeParam((prev) => prev + 8);
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
            />
          ))
        ) : (
          <StyledEmptyText>No quizzes found</StyledEmptyText>
        )}
      </StyledUlCards>
      </div>
      <div>
        {quizes.length < total[0]?.count && quizes.length > 7 && (
          <StyledLoadMore onClick={handleLoadMore}>Load More</StyledLoadMore>
        )}
      </div>
    </Box>
  )
}

export default LastPassedQuizzes