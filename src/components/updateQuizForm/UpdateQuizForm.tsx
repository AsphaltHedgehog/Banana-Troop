// import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { formUpdateOptions } from "../../redux/updateOptions/selectors";
import { QuizBody } from "../../redux/quiz/slice";
import {
  deleteQuizesThunk,
  updateQuizesThunk,
} from "../../redux/quiz/operations";
import {
  BaseQuizButton,
  StyledUpdateQuizForm,
  StyledUpdateQuizWrapper,
  UpdateQuizInput,
} from "./UpdateQuizForm.styled";
import "../../images/icons/sprite.svg";
import Svg from "../../shared/svg/Svg";
import sprite from "../../images/icons/sprite.svg";
import { QuizCreate } from "../../pages/CreateQuizPage/CreateQuizPage";

type FormValues = {
  theme: string | undefined;
};

interface UpdateQuizFormProps {
  editingQuiz: QuizBody | QuizCreate;
  setQuizId: Dispatch<SetStateAction<string | undefined>>;
  setAfterCreate: Dispatch<SetStateAction<boolean>>;
}

const UpdateQuizForm = ({
  editingQuiz,
  setAfterCreate,
  setQuizId,
}: UpdateQuizFormProps) => {
  const selectOptionsForEditing = useAppSelector(formUpdateOptions);
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const isDesctop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  // const handleGoBack = () => {
  //   navigate(-1);
  // };

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      theme: editingQuiz?.theme || "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.theme) {
      const { ratingQuantity, rating, finished } = editingQuiz;
      const { ageGroup, background, category } = selectOptionsForEditing;
      const categoryId = category.map((category) => category._id).join();

      const editedQuiz: QuizBody = {
        _id: editingQuiz._id,
        theme: data.theme,
        category: categoryId,
        background: background,
        ageGroup: ageGroup,
        ratingQuantity: ratingQuantity,
        rating: rating,
        finished: finished,
      };

      dispatch(updateQuizesThunk(editedQuiz))
        .then((response) => {
          if (response.meta.requestStatus === "fulfilled") {
            setAfterCreate(false);
            setQuizId("");
            // handleGoBack();
          }
          return console.log("Failed to update Quiz");
        })
        .catch((error) => {
          console.error("Error updating quiz:", error);
        });
    }
  };

  const handleRemoveQuiz = () => {
    if (editingQuiz?._id) {
      console.log(editingQuiz?._id);
      dispatch(deleteQuizesThunk(editingQuiz._id))
        .then((response) => {
          if (response.meta.requestStatus === "fulfilled") {
            setAfterCreate(false);
            setQuizId("");
            // handleGoBack();
          }
          return console.log("Failed to delete Quiz");
        })
        .catch((error) => {
          console.error("Error removing quiz:", error);
        });
    }
  };

  return (
    <>
      <StyledUpdateQuizWrapper>
        <StyledUpdateQuizForm onSubmit={handleSubmit(onSubmit)}>
          <UpdateQuizInput
            {...register("theme")}
            placeholder="Quiz theme"
            autoComplete="off"
          />

          <BaseQuizButton type="submit">
            {isDesctop ? (
              `Edit quiz`
            ) : (
              <Svg sprite={sprite} id={`icon-edit`} width={16} height={16} />
            )}
          </BaseQuizButton>
        </StyledUpdateQuizForm>
        <BaseQuizButton onClick={handleRemoveQuiz}>
          {isDesctop ? (
            `Remove quiz`
          ) : (
            <Svg sprite={sprite} id={`icon-trash`} width={16} height={16} />
          )}
        </BaseQuizButton>
      </StyledUpdateQuizWrapper>
    </>
  );
};

export default UpdateQuizForm;
