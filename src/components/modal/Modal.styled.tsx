import styled from "styled-components";


export const StyledBackdrop = styled.div`
  background-color: #0000004D;
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
`

export const StyledWrapper = styled.div`
  position: absolute;
  top: 35vh;
  left: 30vw;

  padding: 80px 100px;

  max-width: 500px;

  border-radius: 20px;
  background-color: #1C1C1C;
`

export const StyledCloseButton = styled.button`
  border-radius: 30px;
  padding: 5px;
  width: 40px;
  height: 40px;
  background-color: transparent;

  position: absolute;

  top: 24px;
  right: 24px
`;