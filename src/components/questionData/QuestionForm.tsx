import { useRef, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { QuestionFormWrapper } from "./QuestionForm.styled";
import {
  addedQuestionByQuizThunk,
  deleteQuizQuestionImgByIdThunk,
  updateQuizQuestionImgByIdThunk,
} from "../../redux/questions/operations";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Answers } from "../../redux/questions/slice";
import Svg from "../../shared/svg/Svg";
import sprite from "../../images/icons/sprite.svg";
import { getUpdateOptions } from "../../redux/updateOptions/selectors";
import {
  getQuestions,
  getQuestionsIndex,
} from "../../redux/questions/selectors";
// import { schemaQuestion } from "../../helpers/schemas";
import { toast } from "react-toastify";

type FormValues = {
  _id: string;
  quiz: string;
  time: string;
  imageUrl: string;
  type: "full-text" | "true-or-false";
  descr: string;
  answers: Answers[];
  validAnswer: string;
};

const QuestionForm = () => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(-1);
  const selectQuiz = useAppSelector(getUpdateOptions);
  const selectQuestion = useAppSelector(getQuestions);
  const selectQuestionIndex = useAppSelector(getQuestionsIndex);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  //todo: selectQuiz.background - put the value to form backgroundcolor
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: {
      _id: selectQuestion[selectQuestionIndex]._id || "",
      quiz: selectQuestion[selectQuestionIndex].quiz || "",
      time: selectQuestion[selectQuestionIndex].time || "",
      imageUrl: selectQuestion[selectQuestionIndex].imageUrl || "",
      type: selectQuestion[selectQuestionIndex].type || "full-text",
      descr: selectQuestion[selectQuestionIndex].descr || "",
      answers: selectQuestion[selectQuestionIndex].answers || [],
      validAnswer: selectQuestion[selectQuestionIndex].validAnswer || "",
    },
    // resolver: yupResolver(schemaQuestion),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { time, imageUrl, type, descr, answers, validAnswer } = data;

    if (data) {
      const createNewQuizQuestion = {
        _id: selectQuestion[selectQuestionIndex]._id,
        quiz: selectQuiz._id,
        time,
        imageUrl: `https://pigs.onrender.com/api/${imageUrl}`,
        type,
        descr,
        answers,
        validAnswer,
      };

      dispatch(addedQuestionByQuizThunk(createNewQuizQuestion))
        .then((response) => {
          if (response.meta.requestStatus === "fulfilled") {
            toast.success("Congrats! You added question");
            reset();
          }
          return console.log("Failed to update Question");
        })
        .catch((error) => {
          console.error("Error updating quiz:", error);
        });
    }
  };

  const handleQuestionImage = (): JSX.Element => {
    if (selectQuestion[selectQuestionIndex].imageUrl) {
      return (
        <img
          src={selectQuestion[selectQuestionIndex].imageUrl}
          {...register("imageUrl")}
        />
      );
    }
    return <Svg sprite={sprite} id={`icon-edit`} width={16} height={16} />;
  };

  const hangleChengeImageQuestion = () => {
    const currentInput = inputRef?.current;
    if (currentInput) {
      if (currentInput.files) {
        const image = currentInput.files[0];
        const questionFile = {
          _id: selectQuestion[selectQuestionIndex]._id,
          image: image,
        };
        dispatch(updateQuizQuestionImgByIdThunk(questionFile))
          .unwrap()
          .then((response: string) => {
            setValue("imageUrl", response);
            toast.success("Congrats! You added image to question!");
          })
          .catch((error) => {
            console.error("Error updating quiz:", error);
          });
      } else {
        console.error("Files property is null or undefined");
      }
    }
  };

  const handleRemoveImage = () => {
    if (selectQuestion[selectQuestionIndex].imageUrl) {
      dispatch(
        deleteQuizQuestionImgByIdThunk(selectQuestion[selectQuestionIndex]._id)
      )
        .unwrap()
        .then(() => {
          toast.success("Image has been removed successfully!");
        })
        .catch((error) => error.massage);
    }
  };

  const handleAnswerChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const serialNumber = ["A:", "B:", "C:", "D:"];
    const { value } = e.target;
    const newValue = `${serialNumber[index]} ${value}`;
    setValue(`answers.${index}.descr`, newValue);
  };

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswerIndex(index);
  };

  useEffect(() => {
    if (selectedAnswerIndex !== -1) {
      setValue("validAnswer", `${selectedAnswerIndex}`);
    }
  }, [selectedAnswerIndex, setValue]);

  const onCancel = () => {
    reset();
  };

  return (
    <>
      {selectQuestion[selectQuestionIndex].quiz || selectQuiz._id ? (
        <QuestionFormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>{handleQuestionImage()}</div>
              <div>
                <label htmlFor="uploadImage">
                  <Svg
                    sprite={sprite}
                    id={`icon-edit`}
                    width={16}
                    height={16}
                  />
                </label>
                <input
                  id="uploadImage"
                  type="file"
                  ref={inputRef}
                  accept="image/*"
                  onChange={hangleChengeImageQuestion}
                />
                <button onClick={handleRemoveImage}>
                  <Svg
                    sprite={sprite}
                    id={`icon-trash`}
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
            <div>
              <ul>
                {Array.from({ length: 9 }, (_, index) => {
                  const minutes = Math.floor(index / 4);
                  const seconds = (index % 4) * 15;
                  return (
                    <li
                      key={index}
                      onClick={() =>
                        setValue(
                          "time",
                          `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
                        )
                      }
                    >
                      {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
                    </li>
                  );
                })}
              </ul>
            </div>
            <textarea {...register("descr")} />
            {selectQuestion[selectQuestionIndex].type === "full-text" ? (
              <ul>
                {selectQuestion[selectQuestionIndex].answers.map(
                  (answer, index) => (
                    <li key={answer._id}>
                      <input
                        type="text"
                        value={answer.descr}
                        onChange={(e) => handleAnswerChange(index, e)}
                      />
                      <input
                        type="checkbox"
                        checked={selectedAnswerIndex === index}
                        onChange={() => handleSelectAnswer(index)}
                      />
                    </li>
                  )
                )}
              </ul>
            ) : (
              <ul>
                {selectQuestion[selectQuestionIndex].answers.map(
                  (answer, index) => (
                    <li key={answer._id}>
                      <input
                        type="text"
                        value={`${String.fromCharCode(65 + index)}: ${
                          index === 0 ? "true" : "false"
                        }`}
                        onChange={(e) => handleAnswerChange(index, e)}
                      />
                      <input
                        type="checkbox"
                        checked={selectedAnswerIndex === index}
                        onChange={() => handleSelectAnswer(index)}
                      />
                    </li>
                  )
                )}
              </ul>
            )}
            <div>
              <button type="submit" disabled={!isValid}>
                {selectQuestion[selectQuestionIndex]._id ? "Save" : "Edit"}
              </button>
              <button onClick={onCancel}>Cancel</button>
            </div>
          </form>
          <div>
            {selectQuestionIndex}/{selectQuestion.length}
          </div>
        </QuestionFormWrapper>
      ) : (
        <QuestionFormWrapper></QuestionFormWrapper>
      )}
    </>
  );
};

export default QuestionForm;
