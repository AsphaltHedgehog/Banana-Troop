import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchQuizesThunk } from "../../../redux/quiz/operations";

const CreateQuizPage = () => {
  const dispatch = useAppDispatch();
  const quizes = useAppSelector((state) => state.rootReducer.quizes.list);
  console.log(quizes);

  useEffect(() => {
    dispatch(fetchQuizesThunk());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {quizes?.map((quiz) => (
          <li key={quiz._id}>{quiz.theme}</li>
        ))}
      </ul>
    </div>
  );
};

export default CreateQuizPage;
