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
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addedQuestionByQuizThunk } from "../../redux/questions/operations";
import { getUpdateOptions } from "../../redux/updateOptions/selectors";

const Sidebar = () => {
  const [quizzes, setQuizzes] = useState([
    { id: "1", type: "true-or-false" },
    { id: "2", type: "full-text" },
  ]);
  const [isCreateListOpen, setCreateListOpen] = useState(false);
  const [isChevronRotated, setIsChevronRotated] = useState(false);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const selectQuiz = useAppSelector(getUpdateOptions);
  const handleDelete = (id: string) => {
    // Remove the quiz with the specified id
    setQuizzes((prevQuizzes) => prevQuizzes.filter((quiz) => quiz.id !== id));
  };

  const handleCreateBtnClick = (type: "full-text" | "true-or-false") => {
    if (selectQuiz._id) {
      console.log(selectQuiz._id);
      const newQuestion = {
        _id: selectQuiz._id,
        time: "0:00",
        imageUrl: "",
        type,
        descr: "",
        answers: [],
        validAnswerIndex: "",
      };
      dispatch(addedQuestionByQuizThunk(newQuestion))
        .unwrap()
        .then((res) => console.log(res));
    }
  };

  const handleToggleBtnClick = () => {
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

  const handleClick = (id: string) => {
    setClickedItem(id === clickedItem ? "" : id);
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
        <CreateBtn onClick={handleToggleBtnClick}>
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
            <button onClick={() => handleCreateBtnClick("full-text")}>
              Quiz
              <Svg sprite={sprite} id={`long-right`} width={20} height={10} />
            </button>
            <button onClick={() => handleCreateBtnClick("true-or-false")}>
              True or false
              <Svg sprite={sprite} id={`long-right`} width={20} height={10} />
            </button>
          </CreateListContainer>
        )}
      </CreateBtnListContainer>
    </QuestionsContainer>
  );
};

export default Sidebar;
