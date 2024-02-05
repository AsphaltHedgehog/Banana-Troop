import { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { addQuizesThunk } from "../../redux/quiz/operations";
import { QuizParams } from "../../pages/CreateQuizPage/CreateQuizPage";

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
}

const CreateQuizForm = ({ setQuizId, setEditingQuiz }: CreateQuizFormProps) => {
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
      reset();
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  };
  // here will be executed request for creation of quiz and passing id to parent component (create quiz page)
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("theme")} />
        <button type="submit">Create quiz</button>
      </form>
    </>
  );
};

export default CreateQuizForm;

// {
//     "theme": "Mama",
//     "category": [
//         "65b9b74a0af6ce975d97ee51",
//         "65b9b74a0af6ce975d97ee4d",
//         "65b9b74a0af6ce975d97ee53",
//         "65b9b74a0af6ce975d97ee4f",
//         "65b9b74a0af6ce975d97ee51"
//     ],
//     "background": "none",
//     "ageGroup": "children",
//     "_id": "65c0787f3b9ce2b0615d1f21"
// }
