import { useEffect, useState } from "react";
import QuizOptions from "../../components/quizOptions/QuizOptions";
import Sidebar from "../../components/sidebar/Sidebar";
import { useMediaQuery } from "react-responsive";
import CreateQuizForm from "../../components/createQuizForm/CreateQuizForm";
import UpdateQuizForm from "../../components/updateQuizForm/UpdateQuizForm";
import QuestionData from "../../components/questionData/QuestionForm";
import { useAppDispatch } from "../../redux/hooks";
import { getQuizByIdThunk } from "../../redux/quiz/operations";
import { CreateQuizTitle, StyledCommonWrapper } from "./CreateQuizPage.styled";
import { Category, QuizBody } from "../../redux/quiz/slice";

export type QuizCreate = {
  _id: string;
  theme: string;
  categories: Category[];
  background: string;
  ageGroup: string;
  ratingQuantity: number;
  rating: number;
  finished: number;
};

const CreateQuizPage = () => {
  const [afterCreate, setAfterCreate] = useState<boolean>(false);
  const [quizId, setQuizId] = useState<string | undefined>("");
  const [editingQuiz, setEditingQuiz] = useState<
    QuizBody | QuizCreate | undefined
  >();
  const [formatQuiz, setFormatQuiz] = useState<string | undefined>("quiz");
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 426px max-width: 768)",
  });

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (quizId && !afterCreate) {
      dispatch(getQuizByIdThunk(quizId)).then((response) => {
        if (response.meta.requestStatus === "rejected") {
          return console.log("Congratulations on creating a quiz!");
        }
        if (
          response.meta.requestStatus === "fulfilled" &&
          typeof response.payload !== "string" &&
          response.payload !== undefined
        ) {
          setEditingQuiz(response.payload);
        }
      });
    }
  }, [quizId, dispatch, afterCreate]);

  return (
    <StyledCommonWrapper>
      <CreateQuizTitle>Create quize</CreateQuizTitle>
      {isMobile ? (
        <>
          {/* if it is mobile screen size options and sidebar should be under topBar*/}
          {quizId && editingQuiz ? (
            <UpdateQuizForm
              editingQuiz={editingQuiz}
              setAfterCreate={setAfterCreate}
              setQuizId={setQuizId}
            />
          ) : (
            <CreateQuizForm
              setAfterCreate={setAfterCreate}
              setQuizId={setQuizId}
              setEditingQuiz={setEditingQuiz}
            />
          )}
          <QuestionData
            formatQuiz={formatQuiz}
            setQuizId={setQuizId}
            quizId={quizId}
          />
          <QuizOptions editingQuiz={editingQuiz} />
          <Sidebar setFormatQuiz={setFormatQuiz} quizId={quizId} />
        </>
      ) : (
        <>
          {isTablet ? (
            <div>
              <Sidebar setFormatQuiz={setFormatQuiz} quizId={quizId} />
              {/* if it is tabled options should be under topBar and for this we have to give main div flex direction column*/}
              <div>
                {quizId && editingQuiz ? (
                  <UpdateQuizForm
                    editingQuiz={editingQuiz}
                    setAfterCreate={setAfterCreate}
                    setQuizId={setQuizId}
                  />
                ) : (
                  <CreateQuizForm
                    setAfterCreate={setAfterCreate}
                    setQuizId={setQuizId}
                    setEditingQuiz={setEditingQuiz}
                  />
                )}
                <QuestionData
                  setQuizId={setQuizId}
                  quizId={quizId}
                  formatQuiz={formatQuiz}
                />
              </div>
              <QuizOptions editingQuiz={editingQuiz} />
            </div>
          ) : (
            <>
              <Sidebar setFormatQuiz={setFormatQuiz} quizId={quizId} />
              {/* other wise options should be on right side of topBar*/}
              {quizId && editingQuiz ? (
                <UpdateQuizForm
                  editingQuiz={editingQuiz}
                  setAfterCreate={setAfterCreate}
                  setQuizId={setQuizId}
                />
              ) : (
                <CreateQuizForm
                  setAfterCreate={setAfterCreate}
                  setQuizId={setQuizId}
                  setEditingQuiz={setEditingQuiz}
                />
              )}
              <QuestionData
                setQuizId={setQuizId}
                quizId={quizId}
                formatQuiz={formatQuiz}
              />
              <QuizOptions editingQuiz={editingQuiz} />
            </>
          )}
        </>
      )}
    </StyledCommonWrapper>
  );
};

export default CreateQuizPage;
