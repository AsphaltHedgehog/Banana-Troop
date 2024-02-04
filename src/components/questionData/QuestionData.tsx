import { Dispatch, SetStateAction } from "react";

interface QuestionDataProps {
  quizId: string;
  setQuizId: Dispatch<SetStateAction<string>>;
  formatQuiz: string;
}

const QuestionData = ({ quizId, setQuizId, formatQuiz }: QuestionDataProps) => {
  console.log(setQuizId);
  console.log(formatQuiz);

  return (
    <>
      {quizId ? (
        <div>Просто болванка</div>
      ) : (
        <div>Тут будуть питання, якщо форма редагується</div>
      )}
    </>
  );
};

export default QuestionData;
