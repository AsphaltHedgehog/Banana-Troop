import styled from "styled-components";
import { breakpoints } from "../../styles";

const { tablet, desktop } = breakpoints;

export const StyledSection = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 80px;
  @media screen and (min-width: ${tablet}) {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-top: 120px;
    margin-bottom: 120px;
  }
`;

export const StyledTitle = styled.h2`
  text-align: left;
  margin-bottom: 48px;
  font-weight: 700;
  font-size: 44px;
  line-height: 109%;
  letter-spacing: -0.01em;
  color: #f4f4f4;
`;
export const StyledList = styled.ul`
  display: flex;
  gap: 24px;
  margin-bottom: 48px;
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const StyledListItem = styled.li`
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 20px;
  /* padding: 20px; */
  max-width: 355px;
  max-height: 200px;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 12px;
    gap: 12px;
  }
  img {
    border-radius: 50%;
    width: 44px;
    height: 44px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
    color: #f4f4f4;
    text-align: justify;
    @media screen and (max-width: 375px) {
      font-size: 12px;
    }
  }
  @media screen and (max-width: ${tablet} ) {
    padding: 20px;
  }

  @media screen and (min-width: ${tablet}) {
    padding: 24px;
    max-width: 704px;
    max-height: 144px;
  }
  @media screen and (min-width: ${desktop}) {
    max-width: 608px;
    max-height: 164px;
    p {
      font-size: 16px;
    }
  }
`;
export const StyledTitleName = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  color: #f4f4f4;
`;
export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;
export const StyledButton = styled.a`
  border-radius: 15px;
  width: 8px;
  height: 8px;
  background: rgba(244, 244, 244, 0.08);
  transition-property: color;
  &:hover,
  &:focus {
    background: #f4f4f4;
  }
`;
