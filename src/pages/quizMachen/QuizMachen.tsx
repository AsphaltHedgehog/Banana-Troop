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
  
  // states
  const [Name, SetName] = useState('');
  const [Index, SetIndex] = useState(-1)

  // quiz selectors
  const quiz = useSelector(selectGetQuiz);
  const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);
  console.log(quiz);

  // destructurization
  const {
    // background,
    theme,
    // _id,
    questions
  } = quiz

  // auth selectors
  const user = useSelector(selectGetUser);

  useEffect(() => {
    if (!id) {


      return
    }

    dispatch(getQuizByIdThunk(id));

  }, [dispatch, id]);

  // functional functions

  const submitHandler = (e?: FormEvent<HTMLFormElement>) => {
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

    const answersArray = questions[Index].answers.map((el, index, array) => {
      console.log("Ответы", index, el);
      
    })

    return (
      <div>

      </div>
    )
  };


  const questionInterface = () => {
    if (!questions || !questions[Index]) {
      throw new Error;
    }
    console.log(quiz);
    

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
          : <>aaa</>

          
        }
        
      </div>
    )
  };

  // component return

  return (
    // add error toast
    <>
      {Index >= 0 ? questionInterface():
        user._id ? submitHandler :
          <>
            {isLoading ? 'Place for loader' :
              <>
                <h1>Log in to take the quiz</h1>
                <p>{theme}</p>
                <form onSubmit={submitHandler}>
                  <input type="text"
                    value={Name}
                    onChange={e => SetName(e.target.value)}
                    placeholder="Name"
                  ></input>
                  <button type="submit" disabled={!Name}>Start</button>
                </form>
              </>
            }
          </>
      }
    </>
  )
};


export default QuizMachen;