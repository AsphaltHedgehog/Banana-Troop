import { FC, FormEvent, useState } from "react";
import sprite from "../../../images/icons/sprite.svg";
import {
  SettingsForm,
  SettingsFormButton,
  SettingsPhotoWrapper,
  SettingsUserWrapper,
} from "./SettingsModal.styled";

import SettingsInput from "../settingsInput/SettingsInput";
import { useSelector } from "react-redux";
import { selectGetUser } from "../../../redux/user/selectors";
import { editUserThunk } from "../../../redux/user/operations";
import { useAppDispatch } from "../../../redux/hooks";
import { toast } from "react-toastify";

type FieldName = "name" | "email" | "password";
interface InputItem {
  name: FieldName;
  type: string;
  placeholder: string;
  id: number;
}

const inputItems: InputItem[] = [
  { name: "name", placeholder: "Name", type: "text", id: 1 },
  // { name: "email", placeholder: "Email", type: "text", id: 2 },
  // { name: "password", placeholder: "Password", type: "text", id: 3 },
];

const SettingsModal: FC = () => {
  const dispatch = useAppDispatch();
  const { name, email } = useSelector(selectGetUser);
  const { avatarURL } = useSelector(selectGetUser);
  const [stateName, setStateName] = useState<string>(name);
  const [error, setError] = useState<string>("");

  const defaultValues = {
    name,
    email,
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error) {
      toast.error("Change your name to clear the error");
      return;
    }
    dispatch(editUserThunk({ name: stateName }))
      .unwrap()
      .catch(() => {
        toast.warning("Oops, something went wrong! Try again, please!");
      });
  };

  return (
    <SettingsUserWrapper>
      <SettingsPhotoWrapper>
        <img src={avatarURL} alt="User avatar" />
        <svg>
          <use xlinkHref={`${sprite}#icon-plus-photo`}></use>
        </svg>
      </SettingsPhotoWrapper>
      <SettingsForm onSubmit={submit}>
        {inputItems?.map((input) => (
          <SettingsInput
            key={input.id}
            {...input}
            value={stateName}
            setStateName={setStateName}
            setError={setError}
            error={error}
            defaultValues={defaultValues}
          />
        ))}
        <SettingsFormButton>Save</SettingsFormButton>
      </SettingsForm>
    </SettingsUserWrapper>
  );
};

export default SettingsModal;
