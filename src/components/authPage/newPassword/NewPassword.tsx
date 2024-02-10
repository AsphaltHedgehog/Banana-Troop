import React from 'react';
import { useForm } from 'react-hook-form';
// import { useParams } from 'react-router-dom';
import { newPasswordThunk } from '../../../redux/auth/operations';
import { schemaNewPassword } from '../../../helpers/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledAuthForm, StyledAuthInput, StyledTitle } from '../AuthPages.styled';
import { useAppDispatch } from '../../../redux/hooks';
import { RegisterButton } from '../../../shared/buttons/RegisterButton';
import { StyledRestoreWrap } from '../restorePassword/RestorePassword.styled';

interface FormValues {
  password: string;
  confirmPassword: string;
}

const NewPassword: React.FC = () => {
  // const { token } = useParams<{ token: string }>();
  const dispatch = useAppDispatch();
  

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schemaNewPassword)
  });

  const onSubmit = (data: FormValues) => {
    dispatch(newPasswordThunk({
        password: data.password,
        token: ''
    }));
  };

  return (
    <StyledRestoreWrap>
      <StyledTitle>New password</StyledTitle>
      <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
          <StyledAuthInput
          type="password"
          placeholder="Password"
          {...register("password")}
        />
          <StyledAuthInput
          type="password"
          placeholder="Repeat password"
          {...register("confirmPassword")}
        />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <RegisterButton onClick={handleSubmit(onSubmit)}>Enter</RegisterButton>
      </StyledAuthForm>
    </StyledRestoreWrap>
  );
};

export default NewPassword;