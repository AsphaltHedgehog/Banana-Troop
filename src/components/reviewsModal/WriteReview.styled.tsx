import styled from "styled-components";

import { breakpoints } from "../../styles";

const { tablet, desktop } = breakpoints;

export const StyledSection = styled.section`
  margin: 0 auto;
  padding: 40px 20px;
  width: 335px;
  height: 503px;

  @media screen and (min-width: ${desktop}) {
    padding: 60px 80px;
    width: 481px;
    height: 460px;
  }
`;

export const StyledWriteReviewWrapper = styled.div`
  margin-bottom: 32px;
  width: 335px;
  height: 503px;
  @media screen and (min-width: ${tablet}) {
  }
  @media screen and (min-width: ${desktop}) {
  }
`;
export const StyledTitle = styled.h2`
  text-align: left;
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  letter-spacing: -0.01em;
  color: #f4f4f4;
`;
export const StyledWriteReviewButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  padding: 16px 13px;
  margin-top: 18px;
  width: 100%;

  background: #205bf1;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;

  color: #fff;

  border: transparent;

  &:visited {
    background: #144ad5;
  }

  &:hover,
  &:focus {
    background: #144ad5;
    transition: background 0.3s ease-in-out;
  }
`;
export const StyledWriteReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-top: 32px;
  margin-bottom: 16px;
  width: 295px;

  @media screen and (min-width: ${tablet}) {
    width: 314px;
  }
`;

export const StyledWriteReviewInput = styled.input`
  position: relative;
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 30px;
  padding-left: 18px;
  height: 44px;
  background-color: transparent;
  color: #fafafa;
  width: 295px;

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;

  @media screen and (min-width: ${tablet}) {
    width: 314px;
    font-size: 16px;
    line-height: 1;
  }

  && {
    color: rgba(250, 250, 250, 0.4);
    border: 1px solid rgba(250, 250, 250, 0.2);
    outline: none;

    &:focus {
      border-color: #097b45;
      color: #fafafa;
    }

    &:hover {
      border-color: #097b45;
    }

    &.valid {
      border-color: #097b45;
    }

    &.invalid {
      border-color: #e74a3b;
    }

    &::placeholder {
      margin-left: 18px;
      white-space: nowrap;
      color: rgba(244, 244, 244, 0.4);
    }
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fafafa !important;
    caret-color: #fafafa !important;
  }
`;
