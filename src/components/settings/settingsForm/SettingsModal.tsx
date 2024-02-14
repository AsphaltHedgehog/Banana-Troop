import { FC, FormEvent, useRef, useState } from "react";
import sprite from "../../../images/icons/sprite.svg";
import {
  SettingsForm,
  SettingsFormButton,
  SettingsPhotoWrapper,
  SettingsUserWrapper,
} from "./SettingsModal.styled";

import SettingsInput from "../settingsInput/SettingsInput";
import { useSelector } from "react-redux";
import {
  selectAvatarIsLoading,
  selectGetUser,
  selectUserIsLoading,
} from "../../../redux/user/selectors";
import { editPhotoThunk, editUserThunk } from "../../../redux/user/operations";
import { useAppDispatch } from "../../../redux/hooks";
import { toast } from "react-toastify";
import Loader from "../../../shared/loader-spinner/Loader";

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

const cloudinaryURL =
  "https://res.cloudinary.com/dddrrdx7a/image/upload/v1707757640/";
const gravatarBaseURL = "http://www.gravatar.com/avatar/";

const SettingsModal: FC = () => {
  const dispatch = useAppDispatch();
  const { name, email } = useSelector(selectGetUser);
  const { gravatarURL } = useSelector(selectGetUser);
  const { avatar } = useSelector(selectGetUser);
  const isLoadingUser = useSelector(selectUserIsLoading);
  const isLoadingAvatar = useSelector(selectAvatarIsLoading);
  const [stateName, setStateName] = useState<string>(name);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      .then(() => {
        toast.success("Name updated successfully!");
      })
      .catch(() => {
        toast.warning("Oops, something went wrong! Try again, please!");
      });
  };

  const handleImageUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      dispatch(editPhotoThunk(file))
        .unwrap()
        .then(() => {
          toast.success("Avatar updated successfully!");
        })
        .catch(() => {
          toast.warning("Oops, something went wrong! Try again, please!");
        });
    }
  };

  return (
    <SettingsUserWrapper>
      {isLoadingAvatar ? (
        <Loader />
      ) : (
        <SettingsPhotoWrapper>
          <label htmlFor="fileInput">
            <img
              src={
                avatar
                  ? `${cloudinaryURL}${avatar}`
                  : `${gravatarBaseURL}${gravatarURL}`
              }
              alt="User avatar"
            />
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileInputChange}
          />
          <svg onClick={handleImageUploadClick}>
            <use xlinkHref={`${sprite}#icon-plus-photo`}></use>
          </svg>
        </SettingsPhotoWrapper>
      )}
      <SettingsForm onSubmit={submit}>
        {isLoadingUser ? (
          <Loader />
        ) : (
          inputItems?.map((input) => (
            <SettingsInput
              key={input.id}
              {...input}
              value={stateName}
              setStateName={setStateName}
              setError={setError}
              error={error}
              defaultValues={defaultValues}
            />
          ))
        )}
        <SettingsFormButton>Save</SettingsFormButton>
      </SettingsForm>
    </SettingsUserWrapper>
  );
};

export default SettingsModal;
