import styled from "styled-components";

export const StyledCreateQuizForm = styled.form`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const CreateQuizInput = styled.input`
  font-family: "Montserrat", Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.01em;
  background-color: #171717;
  color: #f4f4f4;
  border: 1px solid rgba(244, 244, 244, 0.3);
  border-radius: 30px;
  padding: 14px 18px;
  width: 100%;
  height: 44px;
  margin-bottom: 16px;
  transition: border-color 0.25s, color 0.25s;
  border-color: rgba(244, 244, 244, 0.3);

  &:hover,
  &:focus {
    border-color: #144ad5;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    width: 280px;
  }
`;

export const CreateQuizButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  border-radius: 30px;
  border: none;
  padding: 14px;
  background: #205bf1;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  font-family: "Montserrat", Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    background-color: #144ad5;
  }

  transition-property: background;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1;
    letter-spacing: -0.01em;
    padding: 14px 28px;
    width: 150px;
  }
`;
