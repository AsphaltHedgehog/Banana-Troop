import React from "react";

import AnswersType from "./AnswersType";

import { Questions } from "../../../redux/quizMachen/slice";

interface QuestionInterface {
  questions: Questions[];
  index: number;
  timersArray: {time: string}[];
  parsTimer: (time: string) => number;
  validateAnswer: (_id: string) => void;
  setIndex: (index: number) => void;
  timerId: number | null;
  validAnswers: (AnswersArray: {answer: boolean}[]) => number;
}

const RenderQuestionInterface: React.FC<QuestionInterface> = ({questions, index, timersArray, parsTimer, validateAnswer, setIndex, timerId, validAnswers}) => {
    if (!questions || !questions[index]) {
      throw new Error();
    }

    return (
      <div>
        <>
          {questions[index].imageUrl ? (
            <>
              <img
                src={`https://res.cloudinary.com/dddrrdx7a/image/upload/v1707757640/${questions[index].imageUrl}`}
              ></img>
              <div>
                <p>Time: {timersArray[index].time}</p>
                <p>{questions[index].descr}</p>
              </div>
            </>
          ) : (
            <>
              <p>Time: {timersArray[index].time}</p>
              <p>{questions[index].descr}</p>
            </>
          )}
          <div>
            {/* //TODO: */}
            {
              <AnswersType
                questions={questions}
                Index={index}
                parsTimer={parsTimer}
                TimersArray={timersArray}
                validateAnswer={validateAnswer}
              />
            }
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                setIndex(index + 1);
                if (timerId) {
                  clearInterval(timerId);
                }
              }}
            >
              {index + 1 === questions.length ? "Finish" : "Next"}
            </button>
            {index > 0 ? (
              <button
                type="button"
                onClick={() => {
                  validAnswers;
                  setIndex(index - 1);
                  if (timerId) {
                    clearInterval(timerId);
                  }
                }}
              >
                Back
              </button>
            ) : (
              <></>
            )}
            <p>{`${index + 1}/${questions.length}`}</p>
          </div>
        </>
      </div>
    );
};
  
export default RenderQuestionInterface;