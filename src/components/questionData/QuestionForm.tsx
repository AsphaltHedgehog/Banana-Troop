import { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { QuestionFormWrapper } from "./QuestionForm.styled";
import { addedQuestionByQuizThunk } from "../../redux/questions/operations";
import { useAppDispatch } from "../../redux/hooks";
import { Answers } from "../../redux/questions/slice";
import Svg from "../../shared/svg/Svg";
import sprite from "../../images/icons/sprite.svg";

type FormValues = {
  _id: string;
  time: string;
  imageUrl: string;
  type: "full-text" | "true-or-false";
  descr: string;
  answers: Answers[];
  validAnswerIndex: string;
};

const QuestionForm = () => {
  // const [isEditMode, setIsEditMode] = useState<boolean>(false);
  // const [checked, setCheked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const inputRef = useRef(null);
  const [fakeQuestion] = useState<FormValues>({
    _id: "3rfqjhcsh3geks",
    time: "00:45",
    imageUrl: "http://google.com",
    type: "full-text",
    descr: "Коли починати вирощувати свиней?",
    answers: [
      {
        descr: "сьогодні",
      },
      {
        descr: "завтра",
      },
      {
        descr: "не вздумай",
      },
      {
        descr: "та ти шо",
      },
    ],
    validAnswerIndex: "", //todo: pass the index of the correct question
  });

  //todo: defaultValues - values from Vugar Sidebar after click on Update button
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      time: "",
      imageUrl: fakeQuestion.imageUrl || "",
      type: "full-text",
      descr: "",
      answers: [
        {
          descr: "",
        },
        {
          descr: "",
        },
        {
          descr: "",
        },
        {
          descr: "",
        },
      ],
      validAnswerIndex: "", //todo: pass the index of the correct question
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { time, imageUrl, type, descr, answers, validAnswerIndex } = data;

    if (data) {
      const createNewQuizQuestion = {
        _id: "",
        time,
        imageUrl,
        type,
        descr,
        answers,
        validAnswerIndex,
      };

      dispatch(addedQuestionByQuizThunk(createNewQuizQuestion))
        .then((response) => {
          if (response.meta.requestStatus === "fulfilled") {
            console.log("Congrats! You added question");
            // setIsEditMode(false); // turn editing mode off after successful save
            reset();
          }
          return console.log("Failed to update Question");
        })
        .catch((error) => {
          console.error("Error updating quiz:", error);
        });
    }
  };

  const handleChangeQuestionImage = (image: string) => {
    const currentInput = inputRef?.current;
    console.log(currentInput);
    if (!image) {
      //todo: onClick для додавання картинки
      return (
        <div>
          <Svg sprite={sprite} id={`icon-edit`} width={16} height={16} />
        </div>
      );
    }
    return <img src={image} {...register("imageUrl")} />;
  };

  return (
    <>
      {fakeQuestion ? (
        <QuestionFormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            {handleChangeQuestionImage(fakeQuestion.imageUrl)}
            {/* <select {...register("time")}>
              //todo: add questionTime in value params (from Vugar question)
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
            <textarea {...register("descr")} /> //todo: add questionDescr in
            value params (from Vugar question)
            <div>
              {data.answers.map((answer, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={answer.descr}
                    onChange={(e) => handleAnswerChange(index, e)} //todo: співставляти значення по індексу з буквами для варіанту відповіді
                  />
                  <input
                    type="checkbox"
                    checked={answer.isCorrect}
                    onChange={(e) => handleCheckboxChange(index, e)} //todo: передавати індекс в властивість validAnswerIndex
                  />
                </div>
              ))}
            </div>
            <div>
             {questionNum}/{totalQuestions} //todo: винести підрахунок сторінки 
              та номера питання по індексу(0-1,1-2, index-number)
            </div>
            <div>
              {isEditMode ? (
                <button type="submit">Save</button>
              ) : (
                <button>Edit</button> //todo: або винести, вбо тут відправляти питання на редагування onClick={onEdit}
              )}
              <button onClick={onCancel}>Cancel</button>
            </div> */}
          </form>
        </QuestionFormWrapper>
      ) : (
        <QuestionFormWrapper></QuestionFormWrapper>
      )}
    </>
  );
};

export default QuestionForm;
// const handleAnswerChange = (
//   index: string,
//   e: React.ChangeEvent<HTMLInputElement>
// ) => {
//   const { value } = e.target;
//   setValue(`answers[${index}].descr`, value);
// };

// const onCancel = () => {
//   setIsEditMode(false);
//   reset();
// };

//   const handleQuestionDescr = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = e.target;

// };
