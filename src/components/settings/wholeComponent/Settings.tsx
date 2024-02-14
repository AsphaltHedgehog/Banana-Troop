import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import sprite from "../../../images/icons/sprite.svg";
import { SettingMainWrapper, SettingsHeaderWrapper } from "./Settings.styled";
import SettingsModal from "../settingsForm/SettingsModal";
import { useAppDispatch } from "../../../redux/hooks";
import { getUserThunk } from "../../../redux/user/operations";

const Settings: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

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
