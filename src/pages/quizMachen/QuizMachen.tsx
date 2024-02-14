import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// redux
import { useAppDispatch } from "../../redux/hooks";
import { getQuizByIdThunk } from "../../redux/updateOptions/operations";
import { useSelector } from "react-redux";
import { selectGetQuiz, selectIsError, selectIsLoading } from "../../redux/quizMachen/selectors";
import { selectGetUser } from "../../redux/user/selectors";
// import { Quiz } from "../../redux/quizMachen/slice";


const QuizMachen = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  // auth selectors
  const user = useSelector(selectGetUser);
  
  // states
  const [Name, SetName] = useState(user ? user.name : '');
  const [Index, SetIndex] = useState(-1);
  const [AnswersArray, SetAnswersArray] = useState([]);
  const [Timer, SetTimer] = useState('');
  const [Answer, SetAnswer] = useState('');
  const [ValidAnswer, SetValidAnswer] = useState('');
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  
  // quiz selectors
  const quiz = useSelector(selectGetQuiz);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  
  // destructurization
  const {
    background,
    theme,
    // _id,
    questions
  } = quiz
  
  
  useEffect(() => {
    if (!id) {
      return
    }
    if (user) {
      SetName(user.name)
    }
    dispatch(getQuizByIdThunk(id));
  }, [dispatch, id, user]);
  
  useEffect(() => {
    if (quiz && Index < 0) {
      const array = questions?.map(() => {
        return { answer: false }
      })
      SetAnswersArray(array)
    }
  }, [Index, questions, quiz]);

  
  useEffect(() => {
    if (Index >= 0 && Index < questions.length) {
      startTimer(questions[Index].time, () => SetIndex(Index + 1))
    }
  }, [Index, questions]);

  useEffect(() => {
    return () => {
      clearInterval(timerId);
    };
  }, [timerId])
  
  // functional functions
  
  const helloFormSubmitHandler = (e?: FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault()
    }
    SetIndex(Index + 1)
  };
  
  const validAnswers = () => {
    let count = 0
    for (const i of AnswersArray) {
      if (i.answer === true) {
        count += 1
      }
    }

    return count
  };

  const startTimer = (timeString: string, callback: () => void) => {
    const [minutes, seconds] = timeString.split(":").map(Number);
    let totalTime = minutes * 60 + seconds;

    const timerId = setInterval(() => {
      totalTime--;

      const remainingMinutes = Math.floor(totalTime / 60);
      const remainingSeconds = totalTime % 60;

      const formattedMinutes = String(remainingMinutes).padStart(2, "0");
      const formattedSeconds = String(remainingSeconds).padStart(2, "0");

      SetTimer(`${formattedMinutes}:${formattedSeconds}`)
      
      if (totalTime <= 0) {
        clearInterval(timerId);
        callback();
      }
    }, 1000);

    setTimerId(timerId)
  };

  const validateAnswer = (_id: string) => {
    console.log(_id);
    console.log(AnswersArray);
    
    SetAnswersArray(prevAnswersArray => {
      return prevAnswersArray.map((el, index) => {
        if (index === Index) {
          if (_id === questions[Index].validAnswer) {
            return {answer: true}
          } else {
            return el
          }
        } 
        return el
      });
    })
  };

  // rendering functions

  const renderHelloForm = () => <>
    <h1>Log in to take the quiz</h1>
    <p>{theme}</p>
    <form onSubmit={helloFormSubmitHandler}>
      <input type="text"
        value={Name}
        onChange={e => SetName(e.target.value)}
        placeholder="Name"
      // disabled
      ></input>
      <button type="submit" disabled={!Name}>Start</button>
    </form>
  </>;


  const answersType = () => {
    if (!questions || !questions[Index]) {
      throw new Error;
    }

    const answersArray = questions[Index].answers.map((el) => {
      return (
        <button id={el._id} key={el._id} onClick={() => validateAnswer(el._id)}>
          {el.descr}
        </button >
      )
    })

    return (
      <>
        {answersArray}
        ZRADA TOTALNIA
      </>
    )
  };


  const renderQuestionInterface = () => {
    if (!questions || !questions[Index]) {
      throw new Error;
    }

    return (
      <div>
        <>
          {questions[Index].imageUrl ?
            <>
              <img src={`https://res.cloudinary.com/dddrrdx7a/image/upload/v1707757640/${questions[Index].imageUrl}`}></img>
              <div>
                <p>Time: {Timer}</p>
                <p>{questions[Index].descr}</p>
              </div>
            </>
            : <>
              <p>Time: {Timer}</p>
              <p>{questions[Index].descr}</p>
            </>
          }
          <div>
            {answersType()}
          </div>
          <div>
            <button type='button' onClick={() => {
              SetIndex(Index + 1)
              clearInterval(timerId)
            }}>
              {Index + 1 === questions.length ? "Finish" : "Next"}
            </button>
            {Index > 0 ? <button type='button' onClick={() => {
              validAnswers
              SetIndex(Index - 1)
              clearInterval(timerId)
            }}>Back</button> : <></>}
            <p>{`${Index + 1}/${questions.length}`}</p>
          </div>
        </>
      </div>
    )
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
        <button type="button" onClick={() => "Отправь юзера ****!"}>Write a review</button>
      </div>
    )
  }


  // main component return
  return (
    // add error toast
    <div style={{ backgroundColor: background ?? 'transparent' }}>
      {isLoading && 'Place for loader'}
      {!isLoading && Index === -1 && renderHelloForm()}
      {Index >= 0 && Index + 1 <= questions?.length && renderQuestionInterface()}
      {Index === questions?.length && renderResultInterface()}
    </div>
  )
};


export default QuizMachen;