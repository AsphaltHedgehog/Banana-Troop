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
  QuestionContainerWrapper
} from "./SidebarStyled";
import Svg from "../../shared/svg/Svg";
import sprite from "../../images/icons/sprite.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addedQuestionByQuizThunk,
  deleteQuestionByIdThunk,
} from "../../redux/questions/operations";
import { getUpdateOptions } from "../../redux/updateOptions/selectors";
import { getQuestions } from "../../redux/questions/selectors";
import { toast } from "react-toastify";
import { getSelectedIndex } from "../../redux/questions/slice";

const Sidebar = () => {
  const questions = useAppSelector(getQuestions);
  const [isCreateListOpen, setCreateListOpen] = useState(false);
  const [isChevronRotated, setIsChevronRotated] = useState(false);
  const [createBtnMove, setCreateBtnMove] = useState(false);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const [clickedItem, setClickedItem] = useState<string>("");
  const dispatch = useAppDispatch();
  const selectQuiz = useAppSelector(getUpdateOptions);

  const handleCreateBtnClick = (type: "full-text" | "true-or-false") => {
    if (selectQuiz._id) {
      const newQuestion = {
        _id: selectQuiz._id,
        type,
        validAnswerIndex: "0",
      };
      dispatch(addedQuestionByQuizThunk(newQuestion))
        .unwrap()
        .then(() => toast.success("Congratulation! You create Question!"))
        .catch(() => toast.error("Something went wrong"));
    }
  };

  const handleToggleBtnClick = () => {
    setCreateListOpen((prev) => !prev);
    setIsChevronRotated((prev) => !prev);
    setCreateBtnMove((prev) => !prev)
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
      setCreateBtnMove(false)
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (id: string, index: number) => {
    setClickedItem((prev) => (prev === id ? "" : id));
    dispatch(getSelectedIndex(index));
  };

  const handleDelete = (_id: string) => {
    if (_id) {
      dispatch(deleteQuestionByIdThunk(_id))
        .unwrap()
        .then(() => {
          toast.success("Question has been removed successfully!");
        })
        .catch((error) => toast.error(error.message));
    }
  };

  return (
    <QuestionContainerWrapper>
      <QuestionsContainer isOpened={createBtnMove}>
        <QuestionsTitle>Questions</QuestionsTitle>

        <QuestionList>
          {questions?.map((question, index) => (
            <React.Fragment key={question._id}>
              <QuizItem
                clicked={(clickedItem === question._id).toString()}
                onClick={() => {
                  if (question._id) {
                    handleClick(question._id, index);
                  }
                }}
              >
                {`${index + 1}. ${question.type}`}
                <TrashBtn
                  type="button"
                  onClick={() => {
                    if (question._id) {
                      handleDelete(question._id);
                    }
                  }}
                >
                  <Svg sprite={sprite} id={`trash-bin`} width={16} height={16} />
                </TrashBtn>
              </QuizItem>
              {index !== questions.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </QuestionList>

        <CreateBtnListContainer ref={listContainerRef} isOpened={createBtnMove} >
          <CreateBtn onClick={handleToggleBtnClick}>
            <p>Create</p>
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
    </QuestionContainerWrapper>
  );
};

export default Sidebar;
