import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { RootState } from '../../redux/store';
import { resetPasswordThunk } from '../../redux/auth/operations';
import { Title } from './RestorePassword.styled';
import { useAppDispatch } from '../../redux/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSendEmail } from '../../helpers/schemas';

interface FormData {
    email: string;
}


const RestorePassword: React.FC = () => {
    const { register, reset, handleSubmit, } = useForm<FormData>({
    resolver: yupResolver(schemaSendEmail),
  });
    const dispatch = useAppDispatch();

    const handleSubmitEmail: SubmitHandler<FormData> = async (data) => {
        try {
            dispatch(resetPasswordThunk(data));
            reset();
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    return (
        <React.Fragment>
            <Title>Enter email for restore password</Title>
            <form onSubmit={handleSubmit(handleSubmitEmail)}>
                <input
                    type="email"
                    placeholder="Email"
                    {...register('email', { required: true })}
                />
                <button type="submit">Enter</button>
            </form>
            <Link to="/authPage/register">Back</Link>
        </React.Fragment>
    );
};

export default RestorePassword;