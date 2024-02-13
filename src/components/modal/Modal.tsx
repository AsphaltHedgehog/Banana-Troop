import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";
import svg from "../../shared/svg";
import {
  ContentWrapper,
  StyledCloseButton,
  StyledWrapper,
} from "./Modal.styled";

const rootModal = document.querySelector("#modal");

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [closeModal, handleKeyDown]);

  const handleBackDrop = ({
    currentTarget,
    target,
  }: React.MouseEvent<HTMLDivElement>) => {
    if (currentTarget === target) {
      closeModal();
    }
  };

  if (rootModal) {
    return ReactDOM.createPortal(
      <StyledWrapper onClick={handleBackDrop}>
        <ContentWrapper>
          <StyledCloseButton
            type="button"
            title="modal close button"
            onClick={closeModal}
          >
            <svg width={28} height={28}>
              <use href={svg + "#icon-close"}></use>
            </svg>
          </StyledCloseButton>
          {children},
        </ContentWrapper>
      </StyledWrapper>,
      rootModal
    );
  }

  return null;
};

export default Modal;
