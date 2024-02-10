import { FC } from "react";
import sprite from "../../../images/icons/sprite.svg";
import { SettingsForm, SettingsPhotoWrapper } from "./SettingsModal.styled";

const SettingsModal: FC = () => {
  return (
    <>
      <SettingsPhotoWrapper>
        <img src="" alt="" />
        <svg>
          <use xlinkHref={`${sprite}#icon-plus-photo`}></use>
        </svg>
      </SettingsPhotoWrapper>
      <SettingsForm>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Password" />
      </SettingsForm>
    </>
  );
};

export default SettingsModal;
