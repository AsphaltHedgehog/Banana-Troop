import { useRef, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { QuestionFormWrapper } from "./QuestionForm.styled";
import {
  deleteQuizQuestionImgByIdThunk,
  updateQuestionByQuizThunk,
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
import QuestionImageButtons from "./questionImageButtons/QuestionImageButtons";
import QuestionTime from "./questionTime/QuestionTime";

type FormValues = {
  _id?: string;
  quiz?: string;
  time?: string;
  imageUrl?: string;
  type?: "full-text" | "true-or-false";
  descr?: string;
  answers?: Answers[];
  validAnswer?: string;
};

const QuestionForm = () => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(-1);
  const selectQuiz = useAppSelector(getUpdateOptions);
  const selectQuestion = useAppSelector(getQuestions);
  const selectQuestionIndex = useAppSelector(getQuestionsIndex);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectQuestion.length >= 1) {
      setSubmitted(true);
    }
    if (selectQuestion.length === 0) {
      setSubmitted(false);
    }
  }, [selectQuestion]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: {
      _id: selectQuestion[selectQuestionIndex]?._id || "",
      quiz: selectQuestion[selectQuestionIndex]?.quiz || "",
      time: selectQuestion[selectQuestionIndex]?.time || "",
      imageUrl: selectQuestion[selectQuestionIndex]?.imageUrl || "",
      type: selectQuestion[selectQuestionIndex]?.type || "full-text",
      descr: selectQuestion[selectQuestionIndex]?.descr || "",
      answers: selectQuestion[selectQuestionIndex]?.answers || [],
      validAnswer: selectQuestion[selectQuestionIndex]?.validAnswer || "",
    },
    // resolver: yupResolver(schemaQuestion),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { time, imageUrl, type, descr, answers } = data;
    if (data) {
      const createNewQuizQuestion = {
        _id: selectQuestion[selectQuestionIndex]._id,
        quiz: selectQuiz._id,
        time,
        imageUrl: `${imageUrl}`,
        type,
        descr,
        answers,
        validAnswer: String(selectedAnswerIndex),
      };

      dispatch(updateQuestionByQuizThunk(createNewQuizQuestion))
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
    const imageUrl = { imageUrl: selectQuestion[selectQuestionIndex].imageUrl };
    if (imageUrl) {
      return (
        <img
          src={`http://res.cloudinary.com/dddrrdx7a/image/upload/v1707564027/${imageUrl}`}
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
        deleteQuizQuestionImgByIdThunk({
          _id: selectQuestion[selectQuestionIndex]._id,
        })
      )
        .unwrap()
        .then(() => {
          toast.success("Image has been removed successfully!");
        })
        .catch((error) => error.massage);
    }
  };

  //===================================================================================

  const handleAnswerChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setValue(`answers.${index}.descr`, value);
  };

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswerIndex(index);
  };

  useEffect(() => {
    if (selectedAnswerIndex !== -1) {
      setValue("validAnswer", `${selectedAnswerIndex}`);
    }
  }, [selectedAnswerIndex, setValue]);

  const handleTimeClick = (minutes: number, seconds: number) => {
    setValue("time", `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
  };

  const onCancel = () => {
    reset();
  };

  const arrayMission = () => {
    const answers = selectQuestion[selectQuestionIndex]?.answers;
    if (answers && answers.length > 0) {
      return answers;
    }
    const type = selectQuestion[selectQuestionIndex]?.type;
    if (type === "true-or-false") {
      const arrTrueFalse = [
        { descr: "", _id: "" },
        { descr: "", _id: "" },
      ];
      return arrTrueFalse;
    }
    const arrFullText = [
      { descr: "", _id: "" },
      { descr: "", _id: "" },
      { descr: "", _id: "" },
      { descr: "", _id: "" },
    ];
    return arrFullText;
  };

  return (
    <>
      {submitted ? (
        <QuestionFormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>{handleQuestionImage()}</div>
              <QuestionImageButtons
                hangleChengeImageQuestion={hangleChengeImageQuestion}
                handleRemoveImage={handleRemoveImage}
                inputRef={inputRef}
              />
            </div>
            <div>
              <QuestionTime handleTimeClick={handleTimeClick} />
            </div>
            <textarea
              {...register("descr")}
              defaultValue={selectQuestion[selectQuestionIndex].descr}
            />

            {selectQuestion[selectQuestionIndex].type === "full-text" ? (
              <ul>
                {arrayMission().map((answer, index) => (
                  <li key={index}>
                    <span>{`${String.fromCharCode(65 + index)}:`}</span>
                    <input
                      type="text"
                      defaultValue={answer.descr}
                      onChange={(e) => handleAnswerChange(index, e)}
                      // {...register(`answers.${index}.descr`)}
                    />
                    <input
                      type="checkbox"
                      checked={selectedAnswerIndex === index}
                      onChange={() => handleSelectAnswer(index)}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                {arrayMission().map((answer, index) => (
                  <li key={answer._id}>
                    <input
                      type="text"
                      defaultValue={`${String.fromCharCode(65 + index)}: ${
                        index === 0 ? "true" : "false"
                      }`}
                    />
                    <input
                      type="checkbox"
                      checked={selectedAnswerIndex === index}
                      onChange={() => handleSelectAnswer(index)}
                    />
                  </li>
                ))}
              </ul>
            )}

            <div>
              <button type="submit" disabled={!isValid}>
                Edit
              </button>
              <button type="button" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </form>
          <div>
            {selectQuestionIndex + 1}/{selectQuestion.length}
          </div>
        </QuestionFormWrapper>
      ) : (
        <QuestionFormWrapper></QuestionFormWrapper>
      )}
    </>
  );
};

export default QuestionForm;
