import { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  StyledBackdrop,
  StyledWrapper,
  // StyledCloseButton,
} from "./Modal.styled";

// import svg from "../../images/icons/sprite.svg";

interface ModalProps {
  children: React.ReactNode;
  isOpenBurger?: boolean;
  setIsOpenBurger: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: () => void;
}

const rootModal = document.querySelector("#modal");

const Modal: React.FC<ModalProps> = ({
  children,
  closeModal,
  isOpenBurger,
  setIsOpenBurger,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpenBurger(false);
        setTimeout(() => {
          closeModal();
        }, 470);
      }
    },
    [closeModal, setIsOpenBurger]
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
      <StyledBackdrop onClick={handleBackDrop}>
        <StyledWrapper $isOpenBurger={isOpenBurger}>
          {/* <StyledCloseButton type="button" title="modal close button" onClick={closeModal}>
            <svg width={28} height={28}>
              <use href={svg + '#icon-x'}></use>
            </svg>
          </StyledCloseButton> */}
          {children}
        </StyledWrapper>
      </StyledBackdrop>,
      rootModal
    );
  }

  return null;
};

export default Modal;

// const { isOpen, openModal, closeModal } = useModal();
// const [modal, setModal] = useState(null);
// {
//   isOpen && modal && <Modal children={modal} closeModal={closeModal} />;
// }
// підключення модалки до необхідних частин, при необхідності треба додаткова перевірка.
