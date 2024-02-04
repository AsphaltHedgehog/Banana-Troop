import { useEffect, useState } from "react";
import QuizOptions from "../../components/quizOptions/QuizOptions";
import Sidebar from "../../components/sidebar/Sidebar";
import { useMediaQuery } from "react-responsive";
import CreateQuizForm from "../../components/createQuizForm/CreateQuizForm";
import UpdateQuizForm from "../../components/updateQuizForm/UpdateQuizForm";
import QuestionData from "../../components/questionData/QuestionData";

// import { useAppSelector } from "../../redux/hooks";

import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { getQuizByIdThunk } from "../../redux/quiz/operations";

type FormValues = {
  _id: string | undefined;
  theme: string | undefined;
  category: string[] | undefined;
  background: string | undefined;
  ageGroup: string | undefined;
  ratingQuantity: number | null;
  rating: number | null;
  finished: number | null;
};

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
  const [quizId, setQuizId] = useState<string>(""); // todo: add condition("" | id from props) to default state
  const [formatQuiz, setFormatQuiz] = useState<string>("");
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 426px max-width: 768)",
  });

  const [editingQuiz, setEditingQuiz] = useState<QuizParams | undefined>();

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

  const { handleSubmit } = useForm<FormValues>({
    defaultValues: {
      _id: editingQuiz?._id || "",
      theme: editingQuiz?.theme || "",
      category: editingQuiz?.category || [],
      background: editingQuiz?.background || "",
      ageGroup: editingQuiz?.ageGroup || "",
      ratingQuantity: editingQuiz?.ratingQuantity || 0,
      rating: editingQuiz?.rating || 0,
      finished: editingQuiz?.finished || 0,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <div>
      <h1>Create quize</h1>
      {isMobile ? (
        <>
          {/* if it is mobile screen size options and sidebar should be under topBar*/}
          <form onSubmit={handleSubmit(onSubmit)}>
            {quizId && editingQuiz ? (
              <UpdateQuizForm
                quizId={quizId}
                formatQuiz={formatQuiz}
                editingQuiz={editingQuiz}
              />
            ) : (
              <CreateQuizForm />
            )}
            <QuestionData
              setQuizId={setQuizId}
              quizId={quizId}
              formatQuiz={formatQuiz}
            />
            <QuizOptions />
            <Sidebar setFormatQuiz={setFormatQuiz} />
          </form>
        </>
      ) : (
        <>
          <Sidebar setFormatQuiz={setFormatQuiz} />
          {isTablet ? (
            <div>
              {/* if it is tabled options should be under topBar and for this we have to give main div flex direction column*/}
              {quizId && editingQuiz ? (
                <UpdateQuizForm
                  quizId={quizId}
                  formatQuiz={formatQuiz}
                  editingQuiz={editingQuiz}
                />
              ) : (
                <CreateQuizForm />
              )}
              <QuestionData
                setQuizId={setQuizId}
                quizId={quizId}
                formatQuiz={formatQuiz}
              />
              <QuizOptions />
            </div>
          ) : (
            <>
              <Sidebar setFormatQuiz={setFormatQuiz} />
              {/* other wise options should be on right side of topBar*/}
              {quizId && editingQuiz ? (
                <UpdateQuizForm
                  quizId={quizId}
                  formatQuiz={formatQuiz}
                  editingQuiz={editingQuiz}
                />
              ) : (
                <CreateQuizForm />
              )}
              <QuestionData
                setQuizId={setQuizId}
                quizId={quizId}
                formatQuiz={formatQuiz}
              />
              <QuizOptions />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CreateQuizPage;
