import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// redux
import { useAppDispatch } from "../../redux/hooks";
import { getQuizByIdThunk } from "../../redux/updateOptions/operations";
import { useSelector } from "react-redux";
import {
  selectGetQuiz,
  selectIsLoading,
} from "../../redux/quizMachen/selectors";
import { selectGetUser } from "../../redux/user/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors.tsx";
import { Quiz } from "../../redux/quizMachen/slice";

// render components
import RenderHelloForm from "../../components/quizMachen/render/HelloForm.tsx";
import RenderResultInterface from "../../components/quizMachen/render/ResultInterface.tsx";
import WriteReview from "../../components/reviewsModal/WriteReview.tsx";
import ThanYou from "../../components/reviewsModal/ThanYou.tsx";
import RenderQuestionInterface from "../../components/quizMachen/render/QuestionInterface.tsx";

// functional components
import validAnswers from "../../components/quizMachen/functional/validAnswers.tsx";
import parsTimer from "../../components/quizMachen/functional/parsTimer.tsx";
import Box from "../../components/box/Box.tsx";
import {
  StyledWrapQuizMachen,
  WrapBtn,
  WrapImg,
  WrapImgDiv,
} from "../../components/quizMachen/render/QuizMachen.styled.tsx";
import { StyledBtnBack } from "../../components/quizMachen/render/QuestionInterface.styled.tsx";
import Svg from "../../shared/svg/Svg.tsx";
import sprite from "../../images/icons/sprite.svg";
import ImageBAck from "../../images/block-component/splash.png";

const QuizMachen = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  // auth selectors
  const user = useSelector(selectGetUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // states
  const [Name, SetName] = useState<string>("");
  
  const [Index, SetIndex] = useState<number>(-1);
  const [AnswersArray, SetAnswersArray] = useState<{ answer: boolean | null }[]>([]);
  const [TimersArray, SetTimersArray] = useState<{ time: string }[]>([]);
  const [timerId, setTimerId] = useState<number | null>(null);

  // reviews
  const [reviews, setReviews] = useState<boolean>(false);
  const [isReviewSend, setIsReviewSend] = useState<boolean>(false);

  // quiz selectors
  const quiz: Quiz = useSelector(selectGetQuiz);
  const isLoading: boolean = useSelector(selectIsLoading);

  // TODO: Add Toast
  // const isError = useSelector(selectIsError);

  const { background, theme, questions } = quiz;

  useEffect(() => {
    if (!user || !user.name) {
      return;
    }
    SetName(user.name)
  }, [user])

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(getQuizByIdThunk(id));
  }, [dispatch, id, user]);

  useEffect(() => {
    if (quiz && Index < 0) {
      // creating answers array
      const answersArray = questions?.map(() => {
        return { answer: null };
      });
      // creating timers array
      const timersArray = questions?.map((el) => {
        return { time: el.time };
      });
      SetAnswersArray(answersArray);
      SetTimersArray(timersArray);
    }
  }, [Index, questions, quiz]);

  useEffect(() => {
    return () => {
      if (!timerId) {
        return;
      }
      clearInterval(timerId);
    };
  }, [timerId]);

  const startTimer = useCallback(() => {
    const [minutes, seconds] = TimersArray[Index].time.split(":").map(Number);
    let totalTime = minutes * 60 + seconds;

    const timerId = setInterval(() => {
      totalTime--;

      const remainingMinutes = Math.floor(totalTime / 60);
      const remainingSeconds = totalTime % 60;

      const formattedMinutes = String(remainingMinutes).padStart(2, "0");
      const formattedSeconds = String(remainingSeconds).padStart(2, "0");
      
      switch (AnswersArray[Index].answer) {
        case false:
          clearInterval(timerId);
          setTimerId(null);
          return;
        case true: 
          clearInterval(timerId);
          setTimerId(null);
          return;
        case null:
          break;
      }

      if (TimersArray[Index].time === "00:00") {
        clearInterval(timerId);
        setTimerId(null);
        return;
      }

      SetTimersArray((prevTimersArray) => {
        return prevTimersArray.map((el, index) => {
          if (index === Index) {
            return { time: `${formattedMinutes}:${formattedSeconds}` };
          }
          return el;
        });
      });
    }, 1000);

    setTimerId(timerId);
  }, [TimersArray, Index, AnswersArray]);

  useEffect(() => {
    if (Index >= 0 && Index < questions.length) {
      startTimer();
    }
  }, [Index, questions, startTimer]);

  const validateAnswer = (_id: string) => {
    SetAnswersArray((prevAnswersArray) => {
      return prevAnswersArray.map((el, index) => {
        if (index === Index) {
          if (_id === questions[Index].validAnswer) {
            return { answer: true };
          } else {
            return { answer: false };
          }
        }
        return el;
      });
    });
  };

  return (
    // add error toast
    <Box>
      <StyledWrapQuizMachen>
        {Index !== -1 && (
          <WrapBtn>
            <StyledBtnBack onClick={() => navigate(-1)}>
              <Svg
                sprite={sprite}
                id={"icon-arrow"}
                width={24}
                height={24}
                style={{
                  fill: "#f4f4f4",
                }}
              />
              Back
            </StyledBtnBack>
          </WrapBtn>
        )}
        {isLoading && "Place for loader"}
        {!isLoading && Index === -1 && !reviews && (
          <RenderHelloForm
            theme={theme}
            name={Name}
            isLoggedIn={isLoggedIn}
            setName={SetName}
            index={Index}
            setIndex={SetIndex}
          />
        )}
        {Index >= 0 && Index + 1 <= questions?.length && !reviews && (
          <RenderQuestionInterface
            questions={questions}
            index={Index}
            timersArray={TimersArray}
            parsTimer={parsTimer}
            validateAnswer={validateAnswer}
            setIndex={SetIndex}
            timerId={timerId}
            validAnswers={validAnswers}
            answersArray={AnswersArray}
            backgroundColor={background}
          />
        )}
        {Index === questions?.length && !reviews && (
          <RenderResultInterface
            questions={questions}
            AnswersArray={AnswersArray}
            validAnswers={validAnswers}
            setReviews={setReviews}
          />
        )}
        {reviews && !isReviewSend && (
          <WriteReview setIsReviewSend={setIsReviewSend} />
        )}
        {reviews && isReviewSend && <ThanYou />}
        <WrapImgDiv>
          <WrapImg src={ImageBAck} alt="rere" />
        </WrapImgDiv>
      </StyledWrapQuizMachen>
    </Box>
  );
};

export default QuizMachen;
