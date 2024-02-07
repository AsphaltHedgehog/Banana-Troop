import { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const rootModal = document.querySelector("#modal");

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
      <div onClick={handleBackDrop}>{children}</div>,
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
