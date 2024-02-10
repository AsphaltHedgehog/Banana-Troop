import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { addQuizesThunk } from "../../redux/quiz/operations";

import {
  CreateQuizButton,
  CreateQuizInput,
  StyledCreateQuizForm,
} from "./CreateQuizForm.styled";
import { fetchQuestionsByQuizThunk } from "../../redux/questions/operations";

type FormValues = {
  theme: string;
};

type RequestData = {
  theme: string;
};

const CreateQuizForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const requestData: RequestData = {
        theme: data.theme,
      };
      const response = await dispatch(addQuizesThunk(requestData)).unwrap();
      await dispatch(fetchQuestionsByQuizThunk(response._id));
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
