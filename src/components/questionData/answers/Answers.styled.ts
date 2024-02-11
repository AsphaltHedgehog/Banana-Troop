import styled from "styled-components";

export const AnswerListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 32px;
  width: 100%;
`;

export const QuestionElemAnswerQuiz = styled.li`
  position: relative;
  width: 100%;
`;
export const AnswerWrapperInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const AnswerWrapperSpan = styled.span`
  position: absolute;
  left: 14px;
  top: 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: #f4f4f4;
`;

export const QuestionInputAnswerQuiz = styled.input`
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 15px;
  padding: 0px 14px 14px 36px;
  max-width: 139px;
  height: 64px;
  background-color: transparent;
  color: #f4f4f4;
`;

export const QuestionFakeAnswerCheckbox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  left: 14px;
  bottom: 20%;
`;

export const QuestionInputAnswerCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  left: 14px;
  bottom: 20%;
`;
