import React from "react";
import { Questions } from "../../../redux/quizMachen/slice";
import { StyledBtnAnswer } from "./QuestionInterface.styled";

type RenderAnswersBtn = {
  questions: Questions[];
  Index: number;
  parsTimer: (time: string) => number;
  TimersArray: { time: string }[];
  validateAnswer: (_id: string) => void;
};

const AnswersType: React.FC<RenderAnswersBtn> = ({
  questions,
  Index,
  parsTimer,
  TimersArray,
  validateAnswer,
}) => {
  if (!questions || !questions[Index]) {
    throw new Error();
  }

  const timerExpired = parsTimer(TimersArray[Index].time) <= 0;

  const answersArray = questions[Index].answers.map((el) => {
    return (
      <StyledBtnAnswer
        id={el._id}
        key={el._id}
        onClick={() => validateAnswer(el._id)}
        disabled={timerExpired}
      >
        {el.descr}
      </StyledBtnAnswer>
    );
  });

  return <>{answersArray}</>;
};

export default AnswersType;
