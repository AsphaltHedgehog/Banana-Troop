import { FC } from "react";
import sprite from "../../../images/icons/sprite.svg";
import {
  SettingsForm,
  SettingsFormButton,
  SettingsPhotoWrapper,
} from "./SettingsModal.styled";
// import { useAppDispatch } from "../../../redux/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSettingsInput } from "../../../helpers/schemas";
import SettingsInput from "../settingsInput/SettingsInput";
import { useSelector } from "react-redux";
import { selectGetUser } from "../../../redux/user/selectors";

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
  // const dispatch = useAppDispatch();
  const { name, email } = useSelector(selectGetUser);
  // const { avatarURL } = useSelector(selectUser);

  const defaultValues = {
    name,
    email,
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schemaSettingsInput),
  });

  const submit = () => {
    reset();
  };

  return (
    <>
      <SettingsPhotoWrapper>
        <img src="" alt="User avatar" />
        <svg>
          <use xlinkHref={`${sprite}#icon-plus-photo`}></use>
        </svg>
      </SettingsPhotoWrapper>
      <SettingsForm onSubmit={handleSubmit(submit)}>
        {inputItems?.map((input) => (
          <SettingsInput
            key={input.id}
            {...input}
            watch={watch}
            register={register}
            errors={errors}
            defaultValues={defaultValues}
          />
        ))}
        <SettingsFormButton>Save</SettingsFormButton>
      </SettingsForm>
    </>
  );
};

export default SettingsModal;
