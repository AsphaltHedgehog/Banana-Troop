import styled from "styled-components";

export const StyledBackdrop = styled.div`
  background-color: rgba(23, 23, 23, 0.6);
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledWrapper = styled.div`
  position: relative;
`;

// export const StyledCloseButton = styled.button`
//   border-radius: 30px;
//   padding: 5px;
//   width: 40px;
//   height: 40px;
//   background-color: transparent;

//   position: absolute;

//   top: 24px;
//   right: 24px;
// `;
