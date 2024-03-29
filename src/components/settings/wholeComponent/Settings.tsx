import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import sprite from "../../../images/icons/sprite.svg";
import { SettingMainWrapper, SettingsHeaderWrapper } from "./Settings.styled";
import SettingsModal from "../settingsForm/SettingsModal";

const Settings: FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <SettingMainWrapper>
      <SettingsHeaderWrapper>
        <NavLink to="" onClick={handleGoBack}>
          <svg>
            <use xlinkHref={`${sprite}#icon-solid`}></use>
          </svg>
          Back
        </NavLink>
        <h2>Settings</h2>
      </SettingsHeaderWrapper>
      <SettingsModal />
    </SettingMainWrapper>
  );
};

export default Settings;
