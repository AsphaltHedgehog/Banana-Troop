import QuizOptions from "../../components/quizOptions/QuizOptions";
import Sidebar from "../../components/sidebar/Sidebar";
import CreateQuizForm from "../../components/createQuizForm/CreateQuizForm";
import UpdateQuizForm from "../../components/updateQuizForm/UpdateQuizForm";
import QuestionData from "../../components/questionData/QuestionForm";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUpdateOptions } from "../../redux/updateOptions/selectors";
import { fetchQuestionsByQuizThunk } from "../../redux/questions/operations";
import { useEffect } from "react";
import { getQuestions } from "../../redux/questions/selectors";
import {
  CreateQuizTitle,
  StyledCommonWrapper,
  ComponentsMainContainer,
  OptAndFormContainer,
} from "./CreateQuizPage.styled";
import { useLocation } from "react-router-dom";
import { getQuizByIdThunk } from "../../redux/updateOptions/operations";

const CreateQuizPage = () => {
  const location = useLocation();
  const param = location.search?.substring(1);
  const selectUpdateOptions = useAppSelector(getUpdateOptions);
  const selectQuestion = useAppSelector(getQuestions);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (selectUpdateOptions._id) {
      dispatch(fetchQuestionsByQuizThunk(selectUpdateOptions._id));
    }
  }, [dispatch, selectUpdateOptions._id]);

  useEffect(() => {
    if (param) {
      dispatch(getQuizByIdThunk(param));
    }
  }, [dispatch, param]);

  return (
    <StyledCommonWrapper>
      <CreateQuizTitle>Create quize</CreateQuizTitle>
      <ComponentsMainContainer>
        <Sidebar />
        <OptAndFormContainer>
          <div>
            {selectQuestion.length > 0 ? (
              <UpdateQuizForm />
            ) : (
              <CreateQuizForm />
            )}
            <QuestionData />
          </div>
          <QuizOptions />
        </OptAndFormContainer>
      </ComponentsMainContainer>
    </StyledCommonWrapper>
  );
};

export default CreateQuizPage;
