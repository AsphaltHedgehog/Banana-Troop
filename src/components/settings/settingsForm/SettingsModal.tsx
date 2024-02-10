import { FC } from "react";
import sprite from "../../../images/icons/sprite.svg";
import {
  SettingsForm,
  SettingsPhotoWrapper,
  StyledEmailError,
  StyledErrorP,
  StyledNameError,
  StyledPasswordError,
} from "./SettingsModal.styled";
import { useAppDispatch } from "../../../redux/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSettingsInput } from "../../../helpers/schemas";

const SettingsModal: FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSettingsInput),
  });

  const submit = ({ name, email, password }) => {
    reset();
  };

  return (
    <>
      <SettingsPhotoWrapper>
        <img src="" alt="" />
        <svg>
          <use xlinkHref={`${sprite}#icon-plus-photo`}></use>
        </svg>
      </SettingsPhotoWrapper>
      <SettingsForm onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder="Name" {...register("name")} />
        {errors?.name && (
          <StyledNameError>{errors.name.message}</StyledNameError>
        )}
        <input type="text" placeholder="Email" {...register("email")} />
        {errors?.email && (
          <StyledEmailError>{errors.email.message}</StyledEmailError>
        )}
        <input type="text" placeholder="Password" {...register("password")} />
        {errors?.password && (
          <StyledPasswordError>{errors.password.message}</StyledPasswordError>
        )}
        <button>Save</button>
      </SettingsForm>
    </>
  );
};

export default SettingsModal;
