import { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { addQuizesThunk } from "../../redux/quiz/operations";
import { QuizParams } from "../../pages/CreateQuizPage/CreateQuizPage";
import {
  CreateQuizButton,
  CreateQuizInput,
  StyledCreateQuizForm,
} from "./CreateQuizForm.styled";

type FormValues = {
  theme: string;
};

type RequestData = {
  theme: string;
  ageGroup: string;
};

interface CreateQuizFormProps {
  setQuizId: Dispatch<SetStateAction<string | undefined>>;
  setEditingQuiz: Dispatch<SetStateAction<QuizParams | undefined>>;
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
        ageGroup: "children",
      };
      const response = await dispatch(addQuizesThunk(requestData)).unwrap();
      setEditingQuiz(response);
      setQuizId(response._id);
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
