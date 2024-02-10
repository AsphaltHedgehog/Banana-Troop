import React, { useState } from "react";
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

  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);

  const handleOpenBurger = () => {
    setIsOpenBurger(true);
    openModal();
  };

  const handleCloseBurger = () => {
    setIsOpenBurger(false);
    setTimeout(() => {
      closeModal();
    }, 470);
  };

  return (
    <>
      {isOpen ? (
        <>
          <Modal
            closeModal={closeModal}
            isOpenBurger={isOpenBurger}
            setIsOpenBurger={setIsOpenBurger}
          >
            <SvgBurgerMenu onClick={handleCloseBurger}>
              <use xlinkHref={`${sprite}#icon-x`}></use>
            </SvgBurgerMenu>
            <Nav handleCloseBurger={handleCloseBurger} />
          </Modal>
        </>
      ) : (
        <SvgBurgerMenu onClick={handleOpenBurger}>
          <use xlinkHref={`${sprite}#icon-open`}></use>
        </SvgBurgerMenu>
      )}
    </>
  );
};

export default BurgerMenu;
