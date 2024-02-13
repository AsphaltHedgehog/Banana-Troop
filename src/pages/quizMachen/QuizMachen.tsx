import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// redux
import { useAppDispatch } from "../../redux/hooks";
import { getQuizByIdThunk } from "../../redux/updateOptions/operations";
import { useSelector } from "react-redux";
import { selectGetQuiz, selectIsError, selectIsLoading } from "../../redux/quizMachen/selectors";
import { selectGetUser } from "../../redux/user/selectors";
import { Quiz } from "../../redux/quizMachen/slice";


const QuizMachen = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  // auth selectors
  const user = useSelector(selectGetUser);
  
  // states
  const [Name, SetName] = useState('');
  const [Index, SetIndex] = useState(-1)
  const [AnswersArray, setAnswersArray] = useState([])

  // quiz selectors
  const quiz = useSelector(selectGetQuiz);
  const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);

  // destructurization
  const {
    // background,
    theme,
    // _id,
    questions
  } = quiz


  useEffect(() => {
    if (!id) {
      return
    }
    if (user) {
      console.log('USER');
      
      SetName(user.name)
    }

    dispatch(getQuizByIdThunk(id));
  }, [dispatch, id, user]);

  // functional functions

  const HelloFormSubmitHandler = (e?: FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault()
    }
    SetIndex(Index + 1)
  };
  

  // rendering functions


  const answersType = () => {
    if (!questions || !questions[Index]) {
      throw new Error;
    }

    const answersArray = questions[Index].answers.map((el, index) => {
      console.log(
        "Вопрос", Index, '<br/>',
        "Ответы", index, '<br/>',
        '-----------------',
        el
      );

      return (
        <button id={el._id}>
          {el.descr}
        </button >
      )
    })

    console.log(answersArray);
    

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
        {questions[Index].imageUrl ?
          <>
            <img src={`https://res.cloudinary.com/dddrrdx7a/image/upload/v1707757640/${questions[Index].imageUrl}`}></img>
            <div>
              <p>Time: {questions[Index].time}</p>
              <p>{questions[Index].descr}</p>
            </div>
            <div>
              {answersType()}
            </div>
          </>
          : <>
            <p>Time: {questions[Index].time}</p>
            <p>{questions[Index].descr}</p>
            <div>
              {answersType()}
            </div>
          </>
        }
      </div>
    )
  };
  // component return

  return (
    // add error toast
    <>
      {
        isLoading ? 'Place for loader' :
          Index >= 0 ? renderQuestionInterface() :
            // user.name ? HelloFormSubmitHandler() :
            <>
              <>
                <h1>Log in to take the quiz</h1>
                <p>{theme}</p>
                <form onSubmit={HelloFormSubmitHandler}>
                  <input type="text"
                    value={Name}
                    onChange={e => SetName(e.target.value)}
                    placeholder="Name"
                    disabled={user}
                  ></input>
                  <button type="submit" disabled={!Name}>Start</button>
                </form>
              </>
            </>
      }
    </>
  )
};


export default QuizMachen;