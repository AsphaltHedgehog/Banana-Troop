import React, { useEffect, useState, useRef } from "react";
import {
  QuestionsContainer,
  QuestionsTitle,
  QuestionList,
  QuizItem,
  TrashBtn,
  CreateBtn,
  CreateListContainer,
  CreateBtnListContainer,
  Divider,
} from "./SidebarStyled";
import "../../images/icons/sprite.svg";
import Svg from "../../shared/svg/Svg";
import sprite from "../../images/icons/sprite.svg";

const Sidebar = () => {
  const [quizzes, setQuizzes] = useState([
    { id: 1, type: "True or False" },
    { id: 2, type: "Quiz" },
  ]);
  const [isCreateListOpen, setCreateListOpen] = useState(false);
  const [isChevronRotated, setIsChevronRotated] = useState(false);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const [clickedItem, setClickedItem] = useState<string | number | null>(null);
  const handleDelete = (id: number) => {
    // Remove the quiz with the specified id
    setQuizzes((prevQuizzes) => prevQuizzes.filter((quiz) => quiz.id !== id));
  };

  const handleCreateBtnClick = () => {
    setCreateListOpen(!isCreateListOpen);
    setIsChevronRotated(!isChevronRotated);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (
      listContainerRef.current &&
      !listContainerRef.current.contains(target) &&
      !target.classList.contains("CreateBtn")
    ) {
      setCreateListOpen(false);
      setIsChevronRotated(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (id: string | number) => {
    setClickedItem(id === clickedItem ? null : id);
  };

  return (
    <QuestionsContainer>
      <QuestionsTitle>Questions</QuestionsTitle>

      <QuestionList>
        {quizzes.map((quiz, index) => (
          <React.Fragment key={quiz.id}>
            <QuizItem
              clicked={clickedItem === quiz.id}
              onClick={() => handleClick(quiz.id)}
            >
              {`${index + 1}. ${quiz.type}`}
              <TrashBtn type="button" onClick={() => handleDelete(quiz.id)}>
                <Svg sprite={sprite} id={`trash-bin`} width={16} height={16} />
              </TrashBtn>
            </QuizItem>
            {index !== quizzes.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </QuestionList>

      <CreateBtnListContainer ref={listContainerRef}>
        <CreateBtn onClick={handleCreateBtnClick}>
          Create
          <Svg
            sprite={sprite}
            id={`chevron-down`}
            width={16}
            height={16}
            style={{ transform: isChevronRotated ? "rotate(180deg)" : "none" }}
          />
        </CreateBtn>
        {isCreateListOpen && (
          <CreateListContainer>
            <button onClick={handleCreateBtnClick}>
              Quiz{" "}
              <Svg sprite={sprite} id={`long-right`} width={20} height={10} />
            </button>
            <button onClick={handleCreateBtnClick}>
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
