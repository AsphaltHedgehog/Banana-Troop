import { Dispatch, SetStateAction } from "react";
import { useEffect, useState, useRef } from "react";
import {
  QuestionsContainer,
  QuestionsTitle,
  QuestionList,
  QuizItem,
  TrashBtn,
  CreateBtn,
  CreateListContainer,
  CreateBtnListContainer,
} from "./SidebarStyled";
import "../../images/icons/sprite.svg";
import Svg from "../../shared/svg/Svg";
import sprite from "../../images/icons/sprite.svg";

interface SideBarProps {
  setFormatQuiz: Dispatch<SetStateAction<string | undefined>>;
  quizId: string | undefined;
}

// const Sidebar = ({ quizId, setFormatQuiz }: SideBarProps) => {
//   console.log(setFormatQuiz);
//todo: on this prop ID(quizId)) you need to make a request for all questions,
//todo: this is the ID of the quiz that comes for editing, accordingly,
//todo: you need to extract all questions on it, if there are any
//todo: please inform me about format of Quiz('quiz' or 'true/false' with setFormatQuiz function)
// console.log(quizId);

const Sidebar = ({ quizId, setFormatQuiz }: SideBarProps) => {
  const [quizzes, setQuizzes] = useState([
    { id: 1, type: "True or False" },
    { id: 2, type: "Quiz" },
  ]);
  const [isCreateListOpen, setCreateListOpen] = useState(false);
  const listContainerRef = useRef<HTMLDivElement>(null);
  console.log(quizId);
  console.log(setFormatQuiz);
  const handleDelete = (id: number) => {
    // Remove the quiz with the specified id
    setQuizzes((prevQuizzes) => prevQuizzes.filter((quiz) => quiz.id !== id));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        listContainerRef.current &&
        !listContainerRef.current.contains(event.target as Node)
      ) {
        setCreateListOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [listContainerRef]);

  const handleCreateBtnClick = () => {
    setCreateListOpen(!isCreateListOpen);
  };

  return (
    <QuestionsContainer>
      <QuestionsTitle>Questions</QuestionsTitle>

      <QuestionList>
        {quizzes.map((quiz) => (
          <QuizItem key={quiz.id}>
            {` ${quiz.type}`}
            <TrashBtn type="button" onClick={() => handleDelete(quiz.id)}>
              <Svg sprite={sprite} id={`trash-bin`} width={16} height={16} />
            </TrashBtn>
          </QuizItem>
        ))}
      </QuestionList>

      <CreateBtnListContainer>
        <CreateBtn onClick={handleCreateBtnClick}>
          Create
          <Svg sprite={sprite} id={`chevron-down`} width={16} height={16} />
        </CreateBtn>
        {isCreateListOpen && (
          <CreateListContainer ref={listContainerRef}>
            <button>
              Quiz{" "}
              <Svg sprite={sprite} id={`long-right`} width={20} height={10} />
            </button>
            <button>
              True or false{" "}
              <Svg sprite={sprite} id={`long-right`} width={20} height={10} />
            </button>
          </CreateListContainer>
        )}
      </CreateBtnListContainer>
    </QuestionsContainer>
  );
};

export default Sidebar;
