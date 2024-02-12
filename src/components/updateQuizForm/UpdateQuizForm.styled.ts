import styled from "styled-components";
export const StyledUpdateQuizWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;
export const StyledUpdateQuizForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const UpdateQuizInput = styled.input`
  font-family: "Montserrat", Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  font-weight: 500;
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
  transition: border-color 0.25s, color 0.25s;
  border-color: rgba(244, 244, 244, 0.3);

  &:hover,
  &:focus {
    border-color: #205bf1;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    width: 280px;
  }
`;

export const BaseQuizButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
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

  @media screen and (min-width: 1280px) {
    padding: 14px 26px;
    height: 44px;
    width: 145px;
    background: #205bf1;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.04em;
    color: #f4f4f4;
    border: 1px solid rgba(244, 244, 244, 0.6);
    border-radius: 30px;
    background-color: #171717;
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;

    &:hover,
    &:focus {
      background-color: #205bf1;
    }

    transition-property: background;
  }
`;
