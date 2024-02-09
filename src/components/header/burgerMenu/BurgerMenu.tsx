import React from "react";
import { useModal } from "../../../hooks/useModal";
import sprite from "../../../images/icons/sprite.svg";
import { SvgBurgerMenu } from "../wholeComponent/Header.styled";
import Modal from "../../modal/Modal";
import Nav from "../nav/Nav";
export interface BurgerMenuProps {
  endAnimation?: boolean;
  setEndAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      {isOpen ? (
        <>
          <Modal closeModal={closeModal}>
            <SvgBurgerMenu onClick={closeModal}>
              <use xlinkHref={`${sprite}#icon-x`}></use>
            </SvgBurgerMenu>
            <Nav closeModal={closeModal} />
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
