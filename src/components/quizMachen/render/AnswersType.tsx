import React, { useState } from "react";
import { Questions } from "../../../redux/quizMachen/slice";
import { StyledBtnAnswer } from "./QuestionInterface.styled";

type RenderAnswersBtn = {
  questions: Questions[];
  Index: number;
  parsTimer: (time: string) => number;
  TimersArray: { time: string }[];
  validateAnswer: (_id: string) => void;
  answersArrayProps: { answer: boolean | null }[];
};

const AnswersType: React.FC<RenderAnswersBtn> = ({
  questions,
  Index,
  parsTimer,
  TimersArray,
  validateAnswer,
  answersArrayProps
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [correctAnswerId, setCorrectAnswerId] = useState<string | null>(null)
  if (!questions || !questions[Index]) {
    throw new Error();
  }

  const handleButtonClick = (answerId: string) => {
    setSelectedAnswer(answerId);
    validateAnswer(answerId);
    setCorrectAnswerId(questions[Index].validAnswer);
  };


  const styledBtn = (answerId: string) => {
    const isCorrect = answerId === correctAnswerId;
    const isSelected = answerId === selectedAnswer;

    if (isSelected && isCorrect) {
      return "correct";
    } else if (isSelected && !isCorrect) {
      return "incorrect"; 
    } else if (!isSelected && isCorrect) {
      return "correct"; 
    }

    return ""; 
  };

  const timerExpired = parsTimer(TimersArray[Index].time) <= 0;

  const answersArray = questions[Index].answers.map((el) => {
    return (
      <StyledBtnAnswer
        id={el._id}
        key={el._id}
        onClick={() => handleButtonClick(el._id)}
        disabled={timerExpired || answersArrayProps[Index].answer !== null ? true : false}
        className={styledBtn(el._id)}
      >
        {el.descr}
      </StyledBtnAnswer>
    );
  });

  return <>{answersArray}</>;
};

export default AnswersType;
