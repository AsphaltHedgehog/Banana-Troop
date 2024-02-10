import QuizOptions from "../../components/quizOptions/QuizOptions";
import Sidebar from "../../components/sidebar/Sidebar";
import { useMediaQuery } from "react-responsive";
import CreateQuizForm from "../../components/createQuizForm/CreateQuizForm";
import UpdateQuizForm from "../../components/updateQuizForm/UpdateQuizForm";
import QuestionData from "../../components/questionData/QuestionForm";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CreateQuizTitle, StyledCommonWrapper } from "./CreateQuizPage.styled";
import { getUpdateOptions } from "../../redux/updateOptions/selectors";
import { fetchQuestionsByQuizThunk } from "../../redux/questions/operations";
import { useEffect } from "react";
import { getQuestions } from "../../redux/questions/selectors";

const CreateQuizPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 426px max-width: 768)",
  });
  const selectUpdateOptions = useAppSelector(getUpdateOptions);
  const selectQuestion = useAppSelector(getQuestions);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (selectUpdateOptions._id) {
      dispatch(fetchQuestionsByQuizThunk(selectUpdateOptions._id));
    }
  }, [dispatch, selectUpdateOptions._id]);

  return (
    <StyledCommonWrapper>
      <CreateQuizTitle>Create quize</CreateQuizTitle>
      {isMobile ? (
        <>
          {/* if it is mobile screen size options and sidebar should be under topBar*/}
          {selectQuestion.length > 0 ? <UpdateQuizForm /> : <CreateQuizForm />}
          <QuestionData />
          <QuizOptions />
          <Sidebar />
        </>
      ) : (
        <>
          {isTablet ? (
            <div>
              <Sidebar />
              {/* if it is tabled options should be under topBar and for this we have to give main div flex direction column*/}
              <div>
                {selectQuestion.length > 0 ? (
                  <UpdateQuizForm />
                ) : (
                  <CreateQuizForm />
                )}
                <QuestionData />
              </div>
              <QuizOptions />
            </div>
          ) : (
            <>
              <Sidebar />
              {/* other wise options should be on right side of topBar*/}
              {selectQuestion.length > 0 ? (
                <UpdateQuizForm />
              ) : (
                <CreateQuizForm />
              )}
              <QuestionData />
              <QuizOptions />
            </>
          )}
        </>
      )}
    </StyledCommonWrapper>
  );
};

export default CreateQuizPage;
