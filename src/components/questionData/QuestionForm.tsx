import { useRef, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import {
  FixPositoinWrapper,
  QuestFormWrapper,
  QuestionFormInputForUpdate,
  QuestionFormInputLabel,
  QuestionFormStyles,
  QuestionFormWrapper,
  QuestionImage,
  QuestionImageWrapper,
  QuestionImageWrapper2,
  QuestionTextarea,
  StyledSvg,
  SubmitQBtnNumWrapper,
  SubmitQuizButton,
  SubmitQuizButtonWrapper,
  SubmitQuizNumSpan,
} from "./QuestionForm.styled";
import {
  deleteQuizQuestionImgByIdThunk,
  updateQuizQuestionImgByIdThunk,
} from "../../redux/questions/operations";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Answers } from "../../redux/questions/slice";

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
import AnswerList from "./аnswerList/AnswerList";
import { updateQuestionData } from "../../redux/questions/slice";
import { updateQuestionByQuizThunk } from "../../redux/questions/operations";

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
  const [tempImage, setTempImage] = useState<string>("");

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

      dispatch(updateQuestionData(createNewQuizQuestion));

      dispatch(updateQuestionByQuizThunk(selectQuestion[selectQuestionIndex]))
        .then((response) => {
          if (response.meta.requestStatus === "fulfilled") {
            toast.success("Congrats! You added question");
            setSelectedAnswerIndex(-1);
          }
        })
        .catch((error) => {
          toast.error("Error updating quiz:", error);
        });
    }
  };

  const handleQuestionImage = (): JSX.Element => {
    const imageUrl = selectQuestion[selectQuestionIndex].imageUrl || tempImage;
    if (imageUrl) {
      return (
        <QuestionImageWrapper
          imageurl={`http://res.cloudinary.com/dddrrdx7a/image/upload/v1707564027/${imageUrl}`}
        >
          <QuestionImage
            src={`http://res.cloudinary.com/dddrrdx7a/image/upload/v1707564027/${imageUrl}`}
            {...register("imageUrl")}
          />
        </QuestionImageWrapper>
      );
    } else {
      return (
        <>
          <QuestionImageWrapper2>
            <QuestionFormInputLabel htmlFor="upload">
              <StyledSvg
                sprite={sprite}
                id={`icon-plus`}
                width={50}
                height={50}
                stroke="#000000"
              />
            </QuestionFormInputLabel>
            <QuestionFormInputForUpdate
              id="upload"
              type="file"
              ref={inputRef}
              accept="image/*"
              onChange={hangleChengeImageQuestion}
            />
          </QuestionImageWrapper2>
        </>
      );
    }
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
            setTempImage(response);
            setValue("imageUrl", response);
            toast.success("Congrats! You added image to question!");
          })
          .catch((error) => {
            toast.error("Error updating quiz:", error);
          });
      } else {
        toast.error("Files property is null or undefined");
      }
    }
  };

  const handleRemoveImage = () => {
    if (selectQuestion[selectQuestionIndex].imageUrl || tempImage) {
      dispatch(
        deleteQuizQuestionImgByIdThunk({
          _id: selectQuestion[selectQuestionIndex]._id,
        })
      )
        .unwrap()
        .then(() => {
          setTempImage("");
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
    dispatch(
      deleteQuizQuestionImgByIdThunk({
        _id: selectQuestion[selectQuestionIndex]._id,
      })
    )
      .unwrap()
      .then(() => {
        setTempImage("");
        toast.success("Image has been removed successfully!");
      })
      .catch((error) => toast.error(error.massage));
    setSelectedAnswerIndex(-1);
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
        { descr: "true", _id: "" },
        { descr: "false", _id: "" },
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
        <QuestionFormWrapper background={`${selectQuiz.background}`}>
          <QuestionFormStyles onSubmit={handleSubmit(onSubmit)}>
            <FixPositoinWrapper>
              <QuestFormWrapper>
                {handleQuestionImage()}
                {selectQuestion[selectQuestionIndex].imageUrl || tempImage ? (
                  <QuestionImageButtons
                    hangleChengeImageQuestion={hangleChengeImageQuestion}
                    handleRemoveImage={handleRemoveImage}
                    inputRef={inputRef}
                  />
                ) : null}
              </QuestFormWrapper>
              <div>
                <QuestionTime
                  handleTimeClick={handleTimeClick}
                  selectedAnswerIndex={selectedAnswerIndex}
                />
              </div>
              <div>
                {" "}
                <QuestionTextarea
                  autoComplete="off"
                  placeholder="Enter a question"
                  {...register("descr")}
                  defaultValue={selectQuestion[selectQuestionIndex].descr}
                />
                <AnswerList
                  answers={arrayMission()}
                  selectedAnswerIndex={selectedAnswerIndex}
                  handleAnswerChange={handleAnswerChange}
                  handleSelectAnswer={handleSelectAnswer}
                />
              </div>
            </FixPositoinWrapper>
            <SubmitQBtnNumWrapper>
              <SubmitQuizNumSpan>
                {selectQuestionIndex + 1}/{selectQuestion.length}
              </SubmitQuizNumSpan>
              <SubmitQuizButtonWrapper>
                <SubmitQuizButton type="submit" disabled={!isValid}>
                  Save
                </SubmitQuizButton>
                <SubmitQuizButton type="button" onClick={onCancel}>
                  Cancel
                </SubmitQuizButton>
              </SubmitQuizButtonWrapper>
            </SubmitQBtnNumWrapper>
          </QuestionFormStyles>
        </QuestionFormWrapper>
      ) : (
        <QuestionFormWrapper
          background={`${selectQuiz.background}`}
        ></QuestionFormWrapper>
      )}
    </>
  );
};

export default QuestionForm;
