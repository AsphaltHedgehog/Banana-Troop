import styled from "styled-components";

interface ColorfulSpansProps {
  selectedColor?: string;
}
export const MainContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    position: relative;
    left: -188px;
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    position: static;
    flex-direction: column;
    justify-content: center;
  }
`;

export const AudienceCategoriesContainer = styled.div`
  display: flex;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const Titles = styled.h3`
  text-align: left;
  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #f4f4f4;
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
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
    font-family: "Gilroy", sans-serif;
    font-size: 14px;
    color: #f4f4f4;
    text-align: left;
    @media screen and (min-width: 768px) {
      width: 111px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 16px;
      width: 125px;
    }

    input[type="radio"] {
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid var(--radio-color);
      outline: none;
      transition: all 0.3s;

      &:checked {
        background-color: var(--radio-color);
        &:before {
          content: "";
          display: block;
          width: 14px;
          height: 14px;
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
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
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
  font-family: "Gilroy", sans-serif;
  font-size: 14px;
  color: #f4f4f4;
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  background: #205bf1;
  list-style-type: none;
  position: absolute;

  width: 112px;
  height: 134px;
  overflow-y: auto;
  padding: 10px 5px;

  @media screen and (min-width: 768px) {
    padding: 15px;
    bottom: 57px;
  }
  @media screen and (min-width: 1440px) {
    width: 126px;
    bottom: 300px;
  }
`;

export const OptionItem = styled.li`
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    color: #f4f4f4;
  }
`;

interface OptionBtnProps {
  active?: boolean;
}

export const OptionBtn = styled.button<OptionBtnProps>`
  font-family: "Gilroy", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgba(244, 244, 244, 0.5);
  background-color: transparent;
  border: none;
  text-align: left;
  overflow-x: hidden;
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
