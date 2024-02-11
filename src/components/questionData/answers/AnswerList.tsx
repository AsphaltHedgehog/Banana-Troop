import React from "react";
import { Answers } from "../../../redux/questions/slice";
import {
  AnswerListContainer,
  AnswerWrapperInput,
  AnswerWrapperSpan,
  QuestionElemAnswerQuiz,
  QuestionFakeAnswerCheckbox,
  QuestionInputAnswerCheckbox,
  QuestionInputAnswerQuiz,
} from "./Answers.styled";
import Svg from "../../../shared/svg/Svg";
import sprite from "../../../images/icons/sprite.svg";

type AnswerListProps = {
  answers: Answers[];
  selectedAnswerIndex: number;
  handleAnswerChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleSelectAnswer: (index: number) => void;
};

const AnswerList = ({
  answers,
  selectedAnswerIndex,
  handleAnswerChange,
  handleSelectAnswer,
}: AnswerListProps) => {
  return (
    <AnswerListContainer>
      {answers.map((answer, index) => (
        <QuestionElemAnswerQuiz key={answer._id || index}>
          <>
            <AnswerWrapperInput>
              <AnswerWrapperSpan>{`${String.fromCharCode(
                65 + index
              )}:`}</AnswerWrapperSpan>
              <QuestionInputAnswerQuiz
                type="text"
                defaultValue={answer.descr}
                autoComplete="off"
                placeholder="Enter answer"
                onChange={(e) => handleAnswerChange(index, e)}
              />
            </AnswerWrapperInput>
          </>
          <QuestionFakeAnswerCheckbox>
            {selectedAnswerIndex === index && (
              <Svg sprite={sprite} id={`icon-cheked`} width={8} height={8} />
            )}
          </QuestionFakeAnswerCheckbox>
          <QuestionInputAnswerCheckbox
            type="checkbox"
            checked={selectedAnswerIndex === index}
            onChange={() => handleSelectAnswer(index)}
          />
        </QuestionElemAnswerQuiz>
      ))}
    </AnswerListContainer>
  );
};

export default AnswerList;
