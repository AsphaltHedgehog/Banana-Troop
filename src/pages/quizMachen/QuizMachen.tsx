import { FormEvent, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// redux
import { useAppDispatch } from "../../redux/hooks";
import { getQuizByIdThunk } from "../../redux/updateOptions/operations";
import { useSelector } from "react-redux";
import {
  selectGetQuiz,
  // TODO: add toast
  // selectIsError,
  selectIsLoading,
} from "../../redux/quizMachen/selectors";
import { selectGetUser } from "../../redux/user/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors.tsx";
import { Quiz } from "../../redux/quizMachen/slice";

// components
import RenderHelloForm from "../../components/quizMachen/render/HelloForm.tsx";
import AnswersType from "../../components/quizMachen/render/AnswersType.tsx";
import WriteReviewButton from "../../components/reviewsModal/WriteReviewButton.tsx";
import WriteReview from "../../components/reviewsModal/WriteReview.tsx";

const QuizMachen = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  // auth selectors
  const user = useSelector(selectGetUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // states
  const [Name, SetName] = useState<string>(user.name ? user.name : "");
  const [Index, SetIndex] = useState<number>(-1);
  const [AnswersArray, SetAnswersArray] = useState<{ answer: boolean }[]>([]);
  const [TimersArray, SetTimersArray] = useState<{ time: string }[]>([]);
  const [timerId, setTimerId] = useState<number | null>(null);
  const [reviewes, setReviewes] = useState<boolean>(false);
  // quiz selectors
  const quiz: Quiz = useSelector(selectGetQuiz);
  const isLoading: boolean = useSelector(selectIsLoading);

  // TODO: Add Toast
  // const isError = useSelector(selectIsError);

  const { background, theme, questions } = quiz;

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
        return { answer: false };
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

  // functional functions

  const helloFormSubmitHandler = (e?: FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
    SetIndex(Index + 1);
  };

  const validAnswers = () => {
    let count = 0;
    for (const i of AnswersArray) {
      if (i.answer === true) {
        count += 1;
      }
    }

    return count;
  };

  const startTimer = useCallback(() => {
    const [minutes, seconds] = TimersArray[Index].time.split(":").map(Number);
    let totalTime = minutes * 60 + seconds;

    const timerId = setInterval(() => {
      totalTime--;

      const remainingMinutes = Math.floor(totalTime / 60);
      const remainingSeconds = totalTime % 60;

      const formattedMinutes = String(remainingMinutes).padStart(2, "0");
      const formattedSeconds = String(remainingSeconds).padStart(2, "0");

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
  }, [Index, TimersArray, setTimerId, SetTimersArray]);

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

  const parsTimer = (time: string) => {
    const [hours, minutes] = time.split(":");
    return parseInt(hours, 10) * 3600 + parseInt(minutes, 10) * 60;
  };

  // rendering functions

  const renderQuestionInterface = () => {
    if (!questions || !questions[Index]) {
      throw new Error();
    }

    return (
      <div>
        <>
          {questions[Index].imageUrl ? (
            <>
              <img
                src={`https://res.cloudinary.com/dddrrdx7a/image/upload/v1707757640/${questions[Index].imageUrl}`}
              ></img>
              <div>
                <p>Time: {TimersArray[Index].time}</p>
                <p>{questions[Index].descr}</p>
              </div>
            </>
          ) : (
            <>
              <p>Time: {TimersArray[Index].time}</p>
              <p>{questions[Index].descr}</p>
            </>
          )}
          <div>
            {/* //TODO: */}
            {
              <AnswersType
                questions={questions}
                Index={Index}
                parsTimer={parsTimer}
                TimersArray={TimersArray}
                validateAnswer={validateAnswer}
              />
            }
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                SetIndex(Index + 1);
                if (timerId) {
                  clearInterval(timerId);
                }
              }}
            >
              {Index + 1 === questions.length ? "Finish" : "Next"}
            </button>
            {Index > 0 ? (
              <button
                type="button"
                onClick={() => {
                  validAnswers;
                  SetIndex(Index - 1);
                  if (timerId) {
                    clearInterval(timerId);
                  }
                }}
              >
                Back
              </button>
            ) : (
              <></>
            )}
            <p>{`${Index + 1}/${questions.length}`}</p>
          </div>
        </>
      </div>
    );
  };

  const renderResultInterface = () => {
    return (
      <div>
        <p>The results</p>
        <div>
          <p>Correct answers</p>
          <p>{`${validAnswers()}/${questions?.length}`}</p>
        </div>
        <div>
          <p>Rate the quiz</p>
          <>STARS</>
        </div>
        <button type="button" onClick={() => "Отправь юзера ****!"}>
          Write a review
        </button>
        <WriteReviewButton setReviewes={setReviewes} />
      </div>
    );
  };

  // main component return
  return (
    // add error toast
    <div style={{ backgroundColor: background ?? "transparent" }}>
      {isLoading && "Place for loader"}
      {!isLoading && Index === -1 && (
        <RenderHelloForm
          theme={theme}
          helloFormSubmitHandler={helloFormSubmitHandler}
          name={Name}
          isLoggedIn={isLoggedIn}
          setName={SetName}
        />
      )}
      {Index >= 0 &&
        Index + 1 <= questions?.length &&
        renderQuestionInterface()}
      {Index === questions?.length && renderResultInterface()}
      {reviewes && <WriteReview />}
    </div>
  );
};

export default QuizMachen;

{
  /* <Route path="writeReview" element={<WriteReview />} />
          <Route path="thanYou" element={<ThanYou />} /> */
}
