import { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { addQuizesThunk } from "../../redux/quiz/operations";
import { QuizCreate } from "../../pages/CreateQuizPage/CreateQuizPage";
import {
  CreateQuizButton,
  CreateQuizInput,
  StyledCreateQuizForm,
} from "./CreateQuizForm.styled";
import { QuizBody } from "../../redux/quiz/slice";

type FormValues = {
  theme: string;
};

type RequestData = {
  theme: string;
};

interface CreateQuizFormProps {
  setQuizId: Dispatch<SetStateAction<string | undefined>>;
  setEditingQuiz: Dispatch<SetStateAction<QuizCreate | QuizBody | undefined>>;
  setAfterCreate: Dispatch<SetStateAction<boolean>>;
}

const CreateQuizForm = ({
  setQuizId,
  setEditingQuiz,
  setAfterCreate,
}: CreateQuizFormProps) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const requestData: RequestData = {
        theme: data.theme,
      };
      const response = await dispatch(addQuizesThunk(requestData)).unwrap();

      const { _id, theme, categories, background, ageGroup } = response;

      const quizForUpdate = {
        _id,
        theme,
        categories,
        background,
        ageGroup,
        ratingQuantity: 0,
        rating: 0,
        finished: 0,
      };
      setEditingQuiz(quizForUpdate);
      setQuizId(quizForUpdate._id);
      setAfterCreate(true);
      reset();
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  };
  return (
    <>
      <StyledCreateQuizForm onSubmit={handleSubmit(onSubmit)}>
        <CreateQuizInput
          {...register("theme")}
          placeholder="Quiz theme"
          autoComplete="off"
        />
        <CreateQuizButton type="submit">Create quiz</CreateQuizButton>
      </StyledCreateQuizForm>
    </>
  );
};

export default CreateQuizForm;
