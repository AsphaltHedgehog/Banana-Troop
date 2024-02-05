import { useEffect, useState } from "react";
import QuizOptions from "../../components/quizOptions/QuizOptions";
import Sidebar from "../../components/sidebar/Sidebar";
import { useMediaQuery } from "react-responsive";
import CreateQuizForm from "../../components/createQuizForm/CreateQuizForm";
import UpdateQuizForm from "../../components/updateQuizForm/UpdateQuizForm";
import QuestionData from "../../components/questionData/QuestionForm";
import { useAppDispatch } from "../../redux/hooks";
import { getQuizByIdThunk } from "../../redux/quiz/operations";

// import { useAppSelector } from "../../redux/hooks";

// import { useForm, SubmitHandler } from "react-hook-form";
// import { useAppDispatch } from "../../redux/hooks";
// import { getQuizByIdThunk } from "../../redux/quiz/operations";

export type QuizParams = {
  _id: string | undefined;
  theme: string | undefined;
  category: string[] | undefined;
  background: string | undefined;
  ageGroup: string | undefined;
  ratingQuantity: number | null;
  rating: number | null;
  finished: number | null;
};

const CreateQuizPage = () => {
  //todo: when we act "update" or "delete" - put quizId to "";
  const [quizId, setQuizId] = useState<string | undefined>(""); // todo: add condition("" | id from props) to default state;
  const [editingQuiz, setEditingQuiz] = useState<QuizParams | undefined>();
  const [formatQuiz, setFormatQuiz] = useState<string | undefined>("quiz");
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 426px max-width: 768)",
  });

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (quizId) {
      dispatch(getQuizByIdThunk(quizId)).then((response) => {
        if (
          response.meta.requestStatus === "fulfilled" &&
          typeof response.payload !== "string" &&
          response.payload !== undefined
        ) {
          setEditingQuiz(response.payload);
        }
      });
    }
  }, [quizId, dispatch]);

  console.log(editingQuiz);
  console.log(quizId);

  return (
    <div>
      <h1>Create quize</h1>
      {isMobile ? (
        <>
          {/* if it is mobile screen size options and sidebar should be under topBar*/}
          {quizId && editingQuiz ? (
            <UpdateQuizForm quizId={quizId} editingQuiz={editingQuiz} />
          ) : (
            <CreateQuizForm
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
          <Sidebar setFormatQuiz={setFormatQuiz} quizId={quizId} />
          {isTablet ? (
            <div>
              {/* if it is tabled options should be under topBar and for this we have to give main div flex direction column*/}
              {quizId && editingQuiz ? (
                <UpdateQuizForm quizId={quizId} editingQuiz={editingQuiz} />
              ) : (
                <CreateQuizForm
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
            </div>
          ) : (
            <>
              <Sidebar setFormatQuiz={setFormatQuiz} quizId={quizId} />
              {/* other wise options should be on right side of topBar*/}
              {quizId && editingQuiz ? (
                <UpdateQuizForm quizId={quizId} editingQuiz={editingQuiz} />
              ) : (
                <CreateQuizForm
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
    </div>
  );
};

export default CreateQuizPage;
