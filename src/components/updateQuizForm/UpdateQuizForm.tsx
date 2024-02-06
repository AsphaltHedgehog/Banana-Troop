// import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { QuizParams } from "../../pages/CreateQuizPage/CreateQuizPage";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { formUpdateOptions } from "../../redux/categories/selectors";
import {
  deleteQuizesThunk,
  updateQuizesThunk,
} from "../../redux/quiz/operations";

type FormValues = {
  theme: string | undefined;
};

interface UpdateQuizFormProps {
  editingQuiz: QuizParams;
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

      const editedQuiz: QuizParams = {
        ageGroup: ageGroup,
        background: background,
        category: category,
        theme: data.theme,
        _id: editingQuiz._id,
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("theme")} />
        <button type="submit">Edit quiz</button>
      </form>
      <button onClick={handleRemoveQuiz}>Remove quiz</button>
    </>
  );
};

export default UpdateQuizForm;
