import React from "react";

import AnswersType from "./AnswersType";

import { Questions } from "../../../redux/quizMachen/slice";

import {
  AnswersLowPanelBtnsWrap,
  AnswersLowPanelWrap,
  AnswersTopPanelBtnsWrap,
  AnswersTypeWrap,
  NumberPage,
  StyledBackBtn,
  StyledButtonNext,
  StyledImageTest,
  StyledQuestionParag,
  StyledQuestionParagMain,
  StyledTimeParag,
  StyledTimeParagSpan,
  StyledTimeTest,
  StyledWrapAll,
  StyledWrapTest,
} from "./QuestionInterface.styled";

interface QuestionInterface {
  questions: Questions[];
  index: number;
  timersArray: { time: string }[];
  parsTimer: (time: string) => number;
  validateAnswer: (_id: string) => void;
  setIndex: (index: number) => void;
  timerId: number | null;
  validAnswers: (AnswersArray: { answer: boolean }[]) => number;
  answersArray: { answer: boolean | null }[];
  backgroundColor: string;
}

const RenderQuestionInterface: React.FC<QuestionInterface> = ({
  questions,
  index,
  timersArray,
  parsTimer,
  validateAnswer,
  setIndex,
  timerId,
  validAnswers,
  answersArray,
  backgroundColor
}) => {
  if (!questions || !questions[index]) {
    throw new Error();
  }

  return (
    <StyledWrapAll>
      <StyledWrapTest style={{ backgroundColor: backgroundColor ?? "#1c1c1c" }}>
        <AnswersTopPanelBtnsWrap>
          {questions[index].imageUrl ? (
            <>
              <StyledImageTest
                src={`https://res.cloudinary.com/dddrrdx7a/image/upload/v1707757640/${questions[index].imageUrl}`}
              ></StyledImageTest>
              <StyledTimeTest>
                <StyledTimeParag>
                  Time:{" "}
                  <StyledTimeParagSpan>
                    {timersArray[index].time}
                  </StyledTimeParagSpan>
                </StyledTimeParag>
                <StyledQuestionParag>
                  {questions[index].descr}
                </StyledQuestionParag>
              </StyledTimeTest>
            </>
          ) : (
            <>
              <StyledQuestionParagMain>
                {questions[index].descr}
              </StyledQuestionParagMain>
              <StyledTimeTest>
                <StyledTimeParag>
                  Time:{" "}
                  <StyledTimeParagSpan>
                    {" "}
                    {timersArray[index].time}
                  </StyledTimeParagSpan>
                </StyledTimeParag>
              </StyledTimeTest>
            </>
          )}
          <AnswersTypeWrap>
            {
              <AnswersType
                questions={questions}
                Index={index}
                parsTimer={parsTimer}
                TimersArray={timersArray}
                validateAnswer={validateAnswer}
                answersArrayProps={answersArray}
              />
            }
          </AnswersTypeWrap>
        </AnswersTopPanelBtnsWrap>
        <AnswersLowPanelWrap>
          <AnswersLowPanelBtnsWrap>
            <StyledButtonNext
              type="button"
              onClick={() => {
                setIndex(index + 1);
                if (timerId) {
                  clearInterval(timerId);
                }
              }}
            >
              {index + 1 === questions.length ? "Finish" : "Next"}
            </StyledButtonNext>
            {index > 0 ? (
              <StyledBackBtn
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
              </StyledBackBtn>
            ) : (
              <></>
            )}
          </AnswersLowPanelBtnsWrap>
          <NumberPage>{`${index + 1}/${questions.length}`}</NumberPage>
        </AnswersLowPanelWrap>
      </StyledWrapTest>
    </StyledWrapAll>
  );
};

export default RenderQuestionInterface;
