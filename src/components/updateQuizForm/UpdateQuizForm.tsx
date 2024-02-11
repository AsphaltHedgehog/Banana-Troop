import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  EditQuiz,
  deleteQuizesThunk,
  updateQuizesThunk,
} from "../../redux/quiz/operations";
import {
  BaseQuizButton,
  StyledUpdateQuizForm,
  StyledUpdateQuizWrapper,
  UpdateQuizInput,
} from "./UpdateQuizForm.styled";
import Svg from "../../shared/svg/Svg";
import sprite from "../../images/icons/sprite.svg";
import { getUpdateOptions } from "../../redux/updateOptions/selectors";
import { toast } from "react-toastify";

type FormValues = {
  theme: string | undefined;
};

const UpdateQuizForm = () => {
  const selectOptions = useAppSelector(getUpdateOptions);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isDesctop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const handleGoBack = () => {
    navigate(-1);
  };

  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      theme: selectOptions?.theme || "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.theme && selectOptions) {
      const { _id, ageGroup, background, category } = selectOptions;

      const editedQuiz: EditQuiz = {
        _id,
        theme: data.theme,
        category,
        background,
        ageGroup,
      };

      dispatch(updateQuizesThunk(editedQuiz))
        .then((response) => {
          if (response.meta.requestStatus === "fulfilled") {
            reset();
            handleGoBack();
          }
          toast.success("Congrats! You updated quiz!");
        })
        .catch((error) => {
          toast.error("Error updating quiz:", error);
        });
    }
  };

  const handleRemoveQuiz = () => {
    if (selectOptions) {
      dispatch(deleteQuizesThunk(selectOptions._id))
        .then((response) => {
          if (response.meta.requestStatus === "fulfilled") {
            reset();
            handleGoBack();
          }
          toast.success("Congrats! You deleted quiz!");
        })
        .catch((error) => {
          toast.error("Error removing quiz:", error);
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
