import styled from "styled-components";

export const QuestionImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const QuestionInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  border: 1px solid rgba(244, 244, 244, 0.6);
  background-color: #171717;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    background-color: #205bf1;
    border: none;
  }
`;
export const QuestionInputForUpdate = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
`;
export const QuestionDelImgButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  border: 1px solid rgba(244, 244, 244, 0.6);
  background-color: #171717;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    background-color: #205bf1;
    border: none;
  }
`;
