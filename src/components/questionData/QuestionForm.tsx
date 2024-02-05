import { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface QuestionFormProps {
  quizId: string | undefined;
  setQuizId: Dispatch<SetStateAction<string | undefined>>;
  formatQuiz: string | undefined;
}

type FormValues = {
  quizId: string;
  time: string;
  imageUrl: string;
  type: "true-or-false" | "quiz";
  descr: string;
  answers: { descr: string }[];
  validAnswerIndex: string;
};

const QuestionForm = ({ quizId, setQuizId, formatQuiz }: QuestionFormProps) => {
  console.log(setQuizId);
  console.log(formatQuiz);

  const { handleSubmit } = useForm<FormValues>({
    defaultValues: {
      quizId: "65b9bbe690b27011571e122f",
      time: "00:45",
      imageUrl: "http://google.com",
      type: "true-or-false",
      descr: "Какой нахуй ужас...",
      answers: [
        {
          descr: "Ага, ебанёшься",
        },
        {
          descr: "АААААА",
        },
        {
          descr: "...",
        },
        {
          descr: "биб буп",
        },
      ],
      validAnswerIndex: "3",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      {quizId ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <input type="file" accept="image/*" {...register(imageUrl)} />
          <select value={questionTime} onChange={questionTime}>
            {Array.from({ length: 9 }, (_, index) => {
              const minutes = Math.floor(index / 4); 
              const seconds = (index % 4) * 15;
              return (
                <option
                  key={index}
                  value={`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
                >
                  {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
                </option>
              );
            })}
          </select>
          <textarea value={questionDescr} onChange={questionDescr} />
          <div>
            {answers.map((answer, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={answer}
                  onChange={handleAnswerChange}
                />
                <input
                  type="checkbox"
                  checked={isCorrect}
                  onChange={handleCheckboxChange}
                />
              </div>
            ))}
          </div>
          <div>
            {questionNum}/{totalQuestions}
          </div>
          <div>
            {isEditMode ? (
              <>
                <button type="submit">Save</button>
                <button onClick={onCancel}>Cancel</button>
              </>
            ) : (
              <>
                <button onClick={onCancel}>Edit</button>
                <button onClick={onCancel}>Cancel</button>
              </>
            )}
          </div> */}
        </form>
      ) : (
        <div>Просто болванка</div>
      )}
    </>
  );
};

export default QuestionForm;

// {
//     "quizId": "65b9bbe690b27011571e122f",
//     "time": "00:45",
//     "imageUrl": "http://google.com",
//     "type": "true-or-false",
//     "descr": "Какой нахуй ужас...",
//     "answers": [
//       {
//         "descr": "Ага, ебанёшься"
//       },
//       {
//         "descr": "АААААА"
//       },
//       {
//         "descr": "..."
//       },
//       {
//         "descr": "биб буп"
//       }
//     ],
//     "validAnswerIndex": "3"
// }
