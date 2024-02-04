// import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { useAppDispatch } from "../../redux/hooks";
// import { updateQuizesThunk } from "../../redux/quiz/operations";
import { QuizParams } from "../../pages/CreateQuizPage/CreateQuizPage";

type FormValues = {
  theme: string | undefined;
};

interface UpdateQuizFormProps {
  editingQuiz: QuizParams;
  quizId: string;
  formatQuiz: string;
}

const UpdateQuizForm = ({
  editingQuiz,
  quizId,
  formatQuiz,
}: UpdateQuizFormProps) => {
  // const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      theme: editingQuiz?.theme || "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // if (data && editingQuiz.theme && data !== editingQuiz.theme) {
    //   dispatch(updateQuizesThunk());
    // }
    console.log(data);
    console.log(editingQuiz);
  };
  console.log(quizId);
  console.log(formatQuiz);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("theme")} />
        <button type="submit">Edit quiz</button>
        <button type="submit">Remove quiz</button>
      </form>
    </>
  );
};

export default UpdateQuizForm;
