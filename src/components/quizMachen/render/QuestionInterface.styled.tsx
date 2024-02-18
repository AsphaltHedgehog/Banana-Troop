import styled from "styled-components";
import { breakpoints } from "../../../styles";

const { tablet } = breakpoints;
export const StyledWrapAll = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${tablet}) {
  }
`;
export const StyledBtnBack = styled.button`
  display: flex;
  align-items: center;
  padding-bottom: 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: #f4f4f4;
  border: none;
  background: none;
  padding: 0;
  &:hover {
    color: #205bf1; /* Колір для ховеру */
  }
  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1;
  }
`;
export const StyledWrapTest = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(244, 244, 244, 0.3);
  border-radius: 20px;
  width: 335px;
  /* height: 448px; */
  background: #1c1c1c;
  justify-content: space-between;
  @media screen and (min-width: ${tablet}) {
    width: 585px;
  }
`;

export const StyledImageTest = styled.img`
  border: 1px solid rgba(244, 244, 244, 0.08);
  border-radius: 15px;
  /* width: 200px; */
  /* width: 460px; */
  /* height: 166px; */
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 40px;
  object-fit: cover;

  @media screen and (min-width: ${tablet}) {
    margin-left: 60px;
    margin-right: 60px;
    margin-top: 60px;
    object-fit: cover;
    border-radius: 20px;
  }
`;
export const StyledTimeTest = styled.div`
  display: flex;
  gap: 16px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 16px;
  margin-top: 32px;
  align-items: center;
  @media screen and (min-width: ${tablet}) {
    margin-left: 60px;
    margin-right: 60px;
    margin-top: 30px;
  }
`;
export const StyledTimeParag = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: rgba(244, 244, 244, 0.6);
`;

export const StyledTimeParagSpan = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: #f4f4f4;
`;
export const StyledQuestionParag = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: #f4f4f4;
`;
export const StyledQuestionParagMain = styled.p`
  display: flex;
  justify-content: flex-start;

  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: ${tablet}) {
    padding-top: 60px;
    padding-left: 60px;
    padding-right: 60px;
    font-size: 24px;
    line-height: 1.333;
  }
`;
export const StyledBtnAnswer = styled.button`
  display: flex;
  justify-content: flex-start;
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 30px;
  padding: 14px 0px 14px 18px;
  width: 295px;
  height: 44px;
  background: #1c1c1c;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  padding-left: 38px;

  cursor: default;

  &:hover:not(:disabled) {
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.911);
    background: #3a3a3a;
  }

  &.correct {
      background: #097b45;
      border: none;
    };

  &.incorrect {
      background: #e74a3b;
      border: none;
    };

  @media screen and (min-width: ${tablet}) {
    width: 222px;
    height: 44px;
  };
`;

export const AnswersTypeWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px 20px;
  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px 60px;
  }
`;
export const StyledButtonNext = styled.button`
  border: none;
  border-radius: 30px;
  padding: 16px 62px;
  width: 154px;
  height: 48px;
  background: #205bf1;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  &:hover {
    background: #144ad5;
  }
  @media screen and (min-width: ${tablet}) {
    width: 158px;
    height: 48px;
    font-size: 16px;
    line-height: 1;
  }
`;
export const StyledBackBtn = styled.button`
  color: #fff;
  text-decoration: underline;
  border: none;
  background: none;

  &:hover {
    color: #205bf1; /* Колір для ховеру */
  }
  @media screen and (min-width: ${tablet}) {
    font-weight: 400;
    font-size: 16px;
  }
`;
export const AnswersLowPanelWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 32px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  @media screen and (min-width: ${tablet}) {
    padding-top: 40px;
    padding-left: 60px;
    padding-right: 60px;
    padding-bottom: 60px;
  }
`;
export const NumberPage = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  @media screen and (min-width: ${tablet}) {
    line-height: 1;
    font-size: 16px;
  }
`;
export const AnswersLowPanelBtnsWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;
export const AnswersTopPanelBtnsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
