import { Dispatch, SetStateAction } from "react";

interface QuestionFormProps {
  quizId: string | undefined;
  setQuizId: Dispatch<SetStateAction<string | undefined>>;
  formatQuiz: string | undefined;
}

const QuestionForm = ({ quizId, setQuizId, formatQuiz }: QuestionFormProps) => {
  console.log(setQuizId);
  console.log(formatQuiz);

  return (
    <>
      {quizId ? (
        <div>
          Тут буде форма питань, що редагується, також вона буде міняти шаблон
          по умові
        </div>
      ) : (
        <div>Просто болванка</div>
      )}
    </>
  );
};

export default QuestionForm;
