import styled from "styled-components";

interface ColorfulSpansProps {
  selectedColor?: string;
}

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

export const ColorfulSpans = styled.div<ColorfulSpansProps>`
  display: flex;

  label {
    input[type="radio"] {
      appearance: none;
      transition: all 0.3s;
    }
    span {
      border-radius: 100%;
      display: block;
      width: 40px;
      height: 40px;
      margin: 5px;
      cursor: pointer;
      background-color: ${({ selectedColor }) => selectedColor};
      border: 2px solid transparent;
      transition: border 0.3s;
      &:hover {
        border: 2px solid #fff;
      }
    }
  }
`;
