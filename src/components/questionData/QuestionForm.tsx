import { Dispatch, SetStateAction } from "react";

interface QuestionFormProps {
  quizId: string | undefined;
  setQuizId: Dispatch<SetStateAction<string | undefined>>;
  formatQuiz: string;
}

const QuestionForm = ({ quizId, setQuizId, formatQuiz }: QuestionFormProps) => {
  console.log(setQuizId);
  console.log(formatQuiz);

  return (
    <>
      {quizId ? (
        <div>Тут будуть питання, якщо форма редагується</div>
      ) : (
        <div>Просто болванка</div>
      )}
    </>
  );
};

export default QuestionForm;
