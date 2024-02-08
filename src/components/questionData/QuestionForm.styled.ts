import styled from "styled-components";

export const QuestionFormWrapper = styled.div`
  border-radius: 20px;
  max-width: 335px;
  height: 562px;
  background: rgba(255, 255, 255, 0.02);
  @media screen and (min-width: 768px) {
    max-width: 440px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 744px;
  }
`;

export const QuestionForm = styled.form`
  padding: 40px 20px;
`;

export const QuestionButton = styled.input``;
