import styled from "styled-components";
import { breakpoints } from "../../styles";

const { tablet } = breakpoints;
export const StyledMyQuizHeader = styled.div`
  display: flex;
  
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    align-items: center;
    gap: 48px 24px;
  }
`;

export const StyledUlCards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  /* justify-content: center; */
  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 48px;
    gap: 48px 24px;
  }
`;

export const StyledInputSearch = styled.input`
  border: 1px solid rgba(244, 244, 244, 0.3);
  display: flex;  
  border-radius: 30px;
  padding: 15px 155px 15px 38px;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  width: 335px;
  height: 48px;
  background: #171717;
  @media screen and (min-width: ${tablet}) {
    border: 1px solid rgba(244, 244, 244, 0.3);
    border-radius: 30px;
    padding: 15px 155px 15px 38px;
    width: 240px;
    height: 48px;
  }
`;


export const StyledLoadMore = styled.button`
  color: #fff;
  text-decoration: underline;
  border: none;
  background: none;

  margin-bottom: 80px;
  &:hover {
    color: #205bf1; /* Колір для ховеру */
  }
  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
    line-height: 1;
    margin-top: 48px;
    margin-bottom: 100px;
  }
`;



export const StyledBtnStars = styled.button`
  border: none;
  background: none;
  padding: 0;
  &:hover {
    opacity: 0.5;
  }
`;

export const StyledBtnFilter = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  border: 1px solid rgba(244, 244, 244, 0.3);
  border-radius: 30px;
  background: #171717;
  color: #f4f4f4;
  padding: 14px 18px;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.01em;
  &:hover {
    background: #205bf1;
  }
`;

export const StyledBtnTitle = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 20px;
  background: #000;

  padding: 10px 20px;
  border: 1px solid rgba(244, 244, 244, 0.3);
  border-radius: 30px;
  background: #171717;
  padding: 14px 32px 14px 18px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  &:hover {
    background: #205bf1;
  }

  @media screen and (min-width: ${tablet}) {
    border: 1px solid rgba(244, 244, 244, 0.3);
    border-radius: 30px;
    background: #171717;
    padding: 15px 32px 15px 18px;
    color: #fff;
  }
`;





export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const StyledInput = styled.input`
  margin-right: 10px;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #fff;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  &:checked {
    background-color: #fff; /* Білий фон для вибраних чекбоксів */
  }
`;

export const StyledEmptyText = styled.p`
  display: flex;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: rgba(244, 244, 244, 0.6);
`;
