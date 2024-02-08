import styled from "styled-components";

export const StyledDiscoverHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledUlCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 48px;
`;
export const StyledFilterWrap = styled.div`
  display: flex;
  gap: 12px;
`;
export const StyledInputSearch = styled.input`
  border: 1px solid rgba(244, 244, 244, 0.3);
  border-radius: 30px;
  padding: 15px 155px 15px 18px;
  width: 240px;
  height: 48px;
  background: #171717;
`;
export const StyledSelectAge = styled.select`
  border: 1px solid rgba(244, 244, 244, 0.3);
  border-radius: 30px;
  background: #171717;
  padding: 15px 155px 15px 18px;
  color: #fff;
`;

export const StyledLoadMore = styled.button`
  color: #fff;
  text-decoration: underline;
  border: none;
  background: none;
  &:hover {
    color: #205bf1; /* Колір для ховеру */
  }
`;
export const StyledRaitingResultWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const StyledRaitingWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;
export const StyledRaitingWrapStar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
export const StyledBtnStars = styled.button`
  border: none;
  background: none;
  padding: 0;
`;
export const StyledBtnFilter = styled.button`
  border: 1px solid rgba(244, 244, 244, 0.3);
  border-radius: 30px;
  background: #171717;
  color: #f4f4f4;
`;

export const StyledBtnTitle = styled.button`
  border: none;
  border-radius: 20px;
  background: #000;
  color: #fff;
  padding: 10px 20px;
`;

export const StyledTitleWrap = styled.div`
  position: absolute; /* Додаємо абсолютне позиціонування */
  top: calc(100% + 5px);
  /* bottom: calc(100% + 5px); */
  left: 0; /* Вирівнюємо до лівого краю */
  z-index: 1; /* Додаємо z-index, щоб він був вище за інші елементи */
  display: ${({ isOpen }) =>
    isOpen ? "block" : "none"}; /* Відображаємо тільки якщо isOpen === true */
  flex-direction: column;
  border-radius: 20px;
  background: #205bf1; // Змініть колір відповідно до зображення
  color: #fff;
  padding: 15px 18px;
  /* display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #205bf1; // Змініть колір відповідно до зображення
  color: #fff;
  padding: 15px 18px; */
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
export const StyledTitleWrapForm = styled.div`
  position: relative; /* Додаємо relative positioning */
`;
