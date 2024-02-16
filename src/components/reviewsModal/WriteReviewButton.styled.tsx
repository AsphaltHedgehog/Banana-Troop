import styled from "styled-components";

import { breakpoints } from "../../styles";

const { tablet } = breakpoints;
export const StyledWriteRevieweBtn = styled.button`
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 30px;
  padding: 16px 13px;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;

  color: #f4f4f4;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #d4d4d4;
    border-color: #787878;
  }

  transition-property: color, border-color;

  @media screen and (min-width: ${tablet}) {
    padding: 16px 32px;
    font-size: 16px;
    line-height: 1;
  }
`;
