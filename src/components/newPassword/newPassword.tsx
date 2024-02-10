import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { newPasswordThunk } from '../../redux/auth/operations';
import { RootState } from '../../redux/store';
import { schemaNewPassword } from '../../helpers/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledAuthInput } from '../authPage/AuthPages.styled';
import { useAppDispatch } from '../../redux/hooks';

interface FormValues {
  password: string;
  confirmPassword: string;
}

const NewPasswordForm: React.FC = () => {
//   const { token } = useParams<{ token: string }>();
  const dispatch = useAppDispatch();
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const error = useSelector((state: RootState) => state.auth.error);

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
    <div>
      <h2>New password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
          <StyledAuthInput
          type="password"
          placeholder="Password"
          {...register("password")}
        />
          {errors.password && <p>{errors.password.message}</p>}
          <StyledAuthInput
          type="password"
          placeholder="Repeat password"
          {...register("confirmPassword")}
        />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button type="submit" disabled={isLoading}>Submit</button>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </form>
    </div>
  );
};

export default NewPasswordForm;