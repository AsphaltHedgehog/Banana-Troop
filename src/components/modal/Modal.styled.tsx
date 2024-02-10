import styled, { keyframes } from "styled-components";

interface StyledWrapperProps {
  $isOpenBurger?: boolean;
}

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

export const StyledWrapper = styled.div<StyledWrapperProps>`
  position: relative;
  animation: ${({ $isOpenBurger }) =>
      $isOpenBurger ? slideInAnimation : slideOutAnimation}
    0.5s ease-in-out;
`;

//TODO: set animation for different screens (now only for mobile)
const slideInAnimation = keyframes`
  from {
    transform: translate3d(425px, -506px, 0px);
  }
  to {
    transform: translate3d(0);
  }

`;

const slideOutAnimation = keyframes`
  from {
    transform: translate3d(0);
  }
  to {
    transform: translate3d(-425px, 506px, 0px);
  }
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
