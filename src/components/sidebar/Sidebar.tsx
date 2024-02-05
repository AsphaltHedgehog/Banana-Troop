import { Dispatch, SetStateAction } from "react";
interface SideBarProps {
  setFormatQuiz: Dispatch<SetStateAction<string | undefined>>;
  quizId: string | undefined;
}

const Sidebar = ({ quizId, setFormatQuiz }: SideBarProps) => {
  console.log(setFormatQuiz);
  //todo: on this prop ID(quizId)) you need to make a request for all questions,
  //todo: this is the ID of the quiz that comes for editing, accordingly,
  //todo: you need to extract all questions on it, if there are any
  //todo: please inform me about format of Quiz('quiz' or 'true/false' with setFormatQuiz function)
  console.log(quizId);
  return <div>Sidebar</div>;
};

export default Sidebar;
