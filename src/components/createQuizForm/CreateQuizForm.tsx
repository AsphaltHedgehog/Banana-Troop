import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { addQuizesThunk } from "../../redux/quiz/operations";

import {
  CreateQuizButton,
  CreateQuizInput,
  StyledCreateQuizForm,
} from "./CreateQuizForm.styled";
import { toast } from "react-toastify";

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
      await dispatch(addQuizesThunk(requestData)).unwrap();
      reset();
    } catch (error) {
      toast.error(`Error creating quiz: ${error}`);
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
