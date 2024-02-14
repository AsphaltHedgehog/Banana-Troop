import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 23, 23, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ContentWrapper = styled.div`
  position: relative;
  background-color: #1c1c1c;
  border: 1px solid rgba(244, 244, 244, 0.3);
  overflow: hidden;
  border-radius: 20px;
  width: 335px;
`;

export const StyledCloseButton = styled.button`
  border-radius: 30px;
  border: none;
  padding: 5px;
  width: 18px;
  height: 18px;
  background-color: transparent;

  position: absolute;

  top: 14px;
  right: 20px;
  &:hover {
    transform: scale(1.2);
  }
`;
