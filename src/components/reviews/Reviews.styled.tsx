import styled from "styled-components";
export const StyledSection = styled.section`
  margin-top: 120px;
  margin-bottom: 120px;
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
`;

export const StyledListItem = styled.li`
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 20px;
  width: 608px;
  height: 164px;
  padding: 24px;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }
  img {
    border-radius: 50%;
    width: 44px;
    height: 44px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: #f4f4f4;
    text-align: justify;
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
