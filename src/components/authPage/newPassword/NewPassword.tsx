import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { newPasswordThunk } from '../../../redux/auth/operations';
import { schemaNewPassword } from '../../../helpers/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledAuthForm, StyledAuthInput, StyledTitle } from '../AuthPages.styled';
import { useAppDispatch } from '../../../redux/hooks';
import { RegisterButton } from '../../../shared/buttons/RegisterButton';
import { StyledRestoreWrap } from '../restorePassword/RestorePassword.styled';
import { toast } from 'react-toastify';


interface FormValues {
  newPassword: string;
  confirmPassword: string;
}

const NewPassword: React.FC = () => {
  const { resetToken = '' } = useParams<{ resetToken?: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schemaNewPassword)
  });

  const onSubmit = async (data: FormValues)  => {
    if (data.newPassword === data.confirmPassword) {
      try {
        await dispatch(newPasswordThunk({
          newPassword: data.newPassword,
          resetToken: resetToken 
        }));
        toast.success('Password changed successfully');
        navigate('/login');
      } catch (error) {
        toast.error('Failed to change password');
      }
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <StyledRestoreWrap>
      <StyledTitle>New password</StyledTitle>
      <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
          <StyledAuthInput
          type="password"
          placeholder="Password"
          {...register("newPassword")}
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