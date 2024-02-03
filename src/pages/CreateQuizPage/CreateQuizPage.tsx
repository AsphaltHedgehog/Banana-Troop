
import QuizOptions from "../../components/quizOptions/QuizOptions";
import Sidebar from "../../components/sidebar/Sidebar";
import { useAppSelector } from "../../redux/hooks";
import { useMediaQuery } from "react-responsive";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchQuizesThunk } from "../../redux/quiz/operations";


const CreateQuizPage = () => {
  const dispatch = useAppDispatch();
  const quizes = useAppSelector((state) => state.rootReducer.quizes.list);
  console.log(quizes);

  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 426px max-width: 768)",
  });
  return (
    <div>
      <h1>Create quize</h1>
      {isMobile ? (
        <>
          {/* if it is mobile screen size options and sidebar should be under topBar*/}
          <div>
            PageTopBar
            <ul>
              {quizes?.map((quiz) => (
                <li key={quiz._id}>{quiz.theme}</li>
              ))}
            </ul>
          </div>
          <QuizOptions />
          <Sidebar />
        </>
      ) : (
        <>
          <Sidebar />
          {isTablet ? (
            <div>
              {/* if it is tabled options should be under topBar and for this we have to give main div flex direction column*/}
              <div>
                PageTopBar
                <ul>
                  {quizes?.map((quiz) => (
                    <li key={quiz._id}>{quiz.theme}</li>
                  ))}
                </ul>
              </div>
              <QuizOptions />
            </div>
          ) : (
            <>
              {/* other wise options should be on right side of topBar*/}
              <div>
                PageTopBar
                <ul>
                  {quizes?.map((quiz) => (
                    <li key={quiz._id}>{quiz.theme}</li>
                  ))}
                </ul>
              </div>
              <QuizOptions />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CreateQuizPage;
