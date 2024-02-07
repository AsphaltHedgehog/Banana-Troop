import React from "react";
import { useModal } from "../../../hooks/useModal";
import sprite from "../../../images/icons/sprite.svg";
import { SvgBurgerMenu } from "../wholeComponent/Header.styled";
import Modal from "../../modal/Modal";

export interface BurgerMenuProps {
  endAnimation?: boolean;
  setEndAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu = ({ endAnimation, setEndAnimation }: BurgerMenuProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  //   const openMenuModal = (): void => {
  //     openModal();
  //   };

  //   const handleCloseClick = (): void => {
  //     setEndAnimation(true);
  //   };

  return (
    <>
      {isOpen ? (
        <>
          <SvgBurgerMenu onClick={closeModal}>
            <use xlinkHref={`${sprite}#icon-x`}></use>
          </SvgBurgerMenu>
          <Modal
            closeModal={closeModal}
            endAnimation={endAnimation}
            setEndAnimation={setEndAnimation}
          >
            <nav>
              <div>Register</div>
              <div>Login</div>
            </nav>
          </Modal>
        </>
      ) : (
        <SvgBurgerMenu onClick={openModal}>
          <use xlinkHref={`${sprite}#icon-open`}></use>
        </SvgBurgerMenu>
      )}
    </>
  );
};

export default BurgerMenu;
