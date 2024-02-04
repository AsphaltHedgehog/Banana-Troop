import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  theme: string;
};

const CreateQuizForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
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
