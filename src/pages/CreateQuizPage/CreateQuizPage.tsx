import { useAppSelector } from "../../redux/hooks";

const CreateQuizPage = () => {
  const quizes = useAppSelector((state) => state.rootReducer.quizes.list);
  console.log(quizes);

  return (
    <div>
      <ul>
        {quizes?.map((quiz) => (
          <li key={quiz._id.$oid}>{quiz.theme}</li>
        ))}
      </ul>
    </div>
  );
};

export default CreateQuizPage;
