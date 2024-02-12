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
  z-index: 100;
`;

export const ContentWrapper = styled.div`
  position: relative;
  background-color: rgba(23, 23, 25, 1);
  border: 1px solid rgba(250, 250, 250, 0.1);
  overflow: hidden;
  border-radius: 30px;
  width: 500px;
`;

export const StyledCloseButton = styled.button`
  border-radius: 30px;
  padding: 5px;
  width: 40px;
  height: 40px;
  background-color: transparent;

  position: absolute;

  top: 24px;
  right: 24px;
`;
