import { useState } from "react";

interface ModalState {
  isOpen: boolean;
}

export const useModal = (initialState: ModalState = { isOpen: false }) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState.isOpen);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};
