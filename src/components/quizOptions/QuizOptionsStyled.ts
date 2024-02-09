import styled from "styled-components";

interface ColorfulSpansProps {
  selectedColor?: string;
}
export const MainContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

export const AudienceCategoriesContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const Titles = styled.h3`
  text-align: left;
  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #f4f4f4;
`;

export const RadioContainer = styled.div`
  --radio-color: #205bf1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    display: flex;
    align-items: center;
    gap: 7px;

    input[type="radio"] {
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid var(--radio-color);
      outline: none;
      margin-right: 5px;
      vertical-align: middle;
      transition: all 0.3s;

      &:checked {
        background-color: var(--radio-color);
        &:before {
          content: "";
          display: block;
          width: 16px;
          height: 16px;
          border: 3px solid #242424;
          border-radius: 50%;
          margin: 0;
        }
      }
    }
  }
`;
export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ColorfulSpans = styled.div<ColorfulSpansProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  label {
    display: flex;
    align-items: center;
  }

  input[type="radio"] {
    position: absolute;
    appearance: none;
    transition: all 0.3s;
  }
  input[type="radio"]:checked + span {
    border: 1px solid white;
  }
  span {
    border-radius: 100%;
    display: block;
    width: 40px;
    height: 40px;
    margin-right: 8px;
    cursor: pointer;
    background-color: ${({ selectedColor }) => selectedColor};
    border: 2px solid transparent;
    transition: border 0.3s;
    &:hover {
      border: 2px solid #fff;
    }
  }
`;

export const CategoryBtn = styled.button`
  display: flex;
  border-radius: 30px;
  border: none;
  color: white;
  padding: 15px 18px;
  background-color: transparent;
  &:active,
  &:focus {
    outline: none;
  }
`;
export const Category = styled.p`
  margin-right: 8px;
`;

export const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  background: #205bf1;
  list-style-type: none;
  position: relative;
  padding: 15px;
  width: 112px;
  max-height: 134px;
  overflow-y: auto;
`;

export const OptionItem = styled.li``;

interface OptionBtnProps {
  active?: boolean;
}

export const OptionBtn = styled.button<OptionBtnProps>`
  font-family: "Gilroy", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${({ active }) => (active ? "#f4f4f4" : "rgba(244, 244, 244, 0.5)")};
`;
