// import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { useAppDispatch } from "../../redux/hooks";
// import { updateQuizesThunk } from "../../redux/quiz/operations";
import { QuizParams } from "../../pages/CreateQuizPage/CreateQuizPage";
// import { useAppSelector } from "../../redux/hooks";

type FormValues = {
  theme: string | undefined;
};

interface UpdateQuizFormProps {
  editingQuiz: QuizParams;
  quizId: string;
}

const UpdateQuizForm = ({ editingQuiz, quizId }: UpdateQuizFormProps) => {
  // const selectOptionsForEditing = useAppSelector(state.????.???) //todo: add state from optionsSlice when it will be ready
  //todo: this is how it will be look
  //  formUpdateOptions: {
  //     ageGroup: "",
  //     background: "",
  //     category: [""],
  //   },

  // const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      theme: editingQuiz?.theme || "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // if (data && editingQuiz.theme && data !== editingQuiz.theme) {

    //   const editedQuiz = {

    // {
    //   ageGroup: "children";
    // background: "none";
    // category: [("65b9b74a0af6ce975d97ee51")];
    // theme: "Condition";
    //  _id: "65c0f9f8656f360a36e10237";
    // }

    //     theme: data.theme,
    //     category: [`${formUpdateOptions.id}`],
    //     background: formUpdateOptions.background,
    //     ageGroup: formUpdateOptions.ageGroup,
    //     _id: editedQuiz?._id,
    //   };
    //   dispatch(updateQuizesThunk(editedQuiz));
    // }
    console.log(data);
    console.log(editingQuiz);
  };
  console.log(quizId);

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

// {
//   ageGroup: "children";
// background: "none";
// category: (5)[("65b9b74a0af6ce975d97ee51")];
// theme: "Condition";
//  _id: "65c0f9f8656f360a36e10237";
// }
