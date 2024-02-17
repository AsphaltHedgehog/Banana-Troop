import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { selectGetUser, selectGetUserFavorite } from '../../redux/user/selectors';
import { StyledButton, StyledContainer, StyledContainer2, StyledContainer3, StyledDotsButton, StyledDotsMenu, StyledDotsMenuButton, StyledEditLink, StyledFavoriteButton, StyledName, StyledNumbers, StyledRatingSvg, StyledUl } from '../../shared/quizlistitem/QuizListItem.styled';
import sprite from '../../images/icons/sprite.svg'
import { retakePassedQuiz, updateFavoriteThunk } from '../../redux/user/operations';
import { addFavorite, deleteFavorite } from '../../redux/user/slice';
import { toast } from 'react-toastify';
import { deleteQuizesThunk } from '../../redux/quiz/operations';
import Svg from "../../shared/svg/Svg";

export interface LastQuizListItemProps {
 id: string;
  theme: string;
  rating: number;
  finished: number | null;
  owner: string;
  correctAnswers: number; 
  totalQuestions: number;
  onPatchPassedQuiz: (quizId: string, correctAnswers: number, totalQuestions: number) => void;
  onRetakePassedQuiz: (quizId: string, correctAnswers: number, totalQuestions: number) => void;
}

const LastQiuzListItem = ({
  id,
  theme,
  rating,
    finished,
    owner,
    correctAnswers,
    totalQuestions
  
}: LastQuizListItemProps) => {
  const dispatch = useAppDispatch();
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dotsRef = useRef<HTMLDivElement>(null);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const userFavorites = useAppSelector(selectGetUserFavorite);
    const user = useAppSelector(selectGetUser);
    
    const handleRetakeQuiz = (quizId: string) => {
    dispatch(retakePassedQuiz({ quizId, correctAnswers, totalQuestions, quantityQuestions: 0 }));
  };

  useEffect(() => {
    // Формування масиву із рейтингу зірочок
    const starsArray: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.ceil(rating)) {
        // Якщо зірка повинна бути заповненою
        starsArray.push(
          <StyledRatingSvg
            key={i}
            sprite={sprite}
            id={`icon-rating`}
            width={16}
            height={16}
          />
        );
      } else {
        // Якщо зірка повинна бути порожньою
        starsArray.push(
          <StyledRatingSvg
            key={i}
            sprite={sprite}
            id={`icon-rating`}
            width={16}
            height={16}
            fillOpacity={0.08}
          />
        );
      }
    }
    setStars(starsArray);
  }, [rating]); // Викликаємо зміну масиву зірок, якщо змінюється рейтинг

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!dotsRef.current?.contains(target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFavoriteClick = () => {
    try {
      if (isLoggedIn) {
        dispatch(updateFavoriteThunk({ favorite: id }));
        if (userFavorites.includes(id)) {
          return dispatch(deleteFavorite(id));
        }
        return dispatch(addFavorite(id));
      }
      return toast.error("You have to be logged in to do that!");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleDotsClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteClick = async (id: string) => {
    try {
      await dispatch(deleteQuizesThunk(id));
    } catch (error) {
      toast.error(`Something went wrong!`);
    }
  };
  return (
    <StyledContainer className={isOpen ? `nohover` : ``}>
      <StyledContainer2>
        <StyledContainer3>
          <Svg sprite={sprite} id={`icon-users`} width={20} height={20} />
          <StyledNumbers>{finished}</StyledNumbers>
        </StyledContainer3>
        <div>
          <StyledFavoriteButton
            onClick={() => {
              handleFavoriteClick();
            }}
          >
            {userFavorites.includes(id) ? (
              <Svg
                sprite={sprite}
                id={`icon-heart`}
                width={20}
                height={20}
                fill="#ffffff"
              />
            ) : (
              <Svg sprite={sprite} id={`icon-heart`} width={20} height={20} />
            )}
          </StyledFavoriteButton>
          {user._id === owner ? (
            <StyledDotsButton onClick={handleDotsClick}>
              <Svg sprite={sprite} id={`icon-dots`} width={20} height={20} />
            </StyledDotsButton>
          ) : (
            <></>
          )}
          {isOpen ? (
            <StyledDotsMenu ref={dotsRef}>
              <StyledEditLink to={`/createQuiz?${id}`}>
                <Svg
                  sprite={sprite}
                  id={`icon-quiz-edit`}
                  width={16}
                  height={16}
                />
                Edit
              </StyledEditLink>
              <StyledDotsMenuButton
                type="button"
                onClick={() => {
                  handleDeleteClick(id);
                }}
              >
                <Svg sprite={sprite} id={`trash-bin`} width={16} height={16} />
                Delete
              </StyledDotsMenuButton>
            </StyledDotsMenu>
          ) : (
            <></>
          )}
        </div>
      </StyledContainer2>
      <StyledName>
        {theme.length > 15 ? theme.slice(0, 15) + "..." : theme}
          </StyledName>
           <p>Correct answers: {correctAnswers}/{totalQuestions}</p>
      <StyledUl>
        {stars.map((_star, index) => (
          <li key={index}>{_star}</li>
        ))}
      </StyledUl>
      <StyledButton to="/" onClick={() => handleRetakeQuiz(id)}>Pass again</StyledButton>
    </StyledContainer>
  );
};

export default LastQiuzListItem