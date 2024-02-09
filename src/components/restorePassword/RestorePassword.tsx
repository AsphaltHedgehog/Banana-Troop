import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { resetPasswordThunk } from '../../redux/auth/operations';
import { useAppDispatch } from '../../redux/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSendEmail } from '../../helpers/schemas';
import { StyledAuthForm, StyledAuthInput, StyledTitle } from '../authPage/AuthPages.styled';
import { RegisterButton } from '../../shared/buttons/RegisterButton';
import { StyledBack, StyledEmail, StyledNotification, StyledRestoreTitle, StyledRestoreWrap } from './RestorePassword.styled';

interface FormData {
    email: string;
}

const RestorePassword: React.FC = () => {
    const { register, reset, handleSubmit } = useForm<FormData>({
        resolver: yupResolver(schemaSendEmail),
    });
    const dispatch = useAppDispatch();
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [email, setEmail] = useState<string>('');

    const handleSubmitEmail: SubmitHandler<FormData> = async (data) => {
        try {
            dispatch(resetPasswordThunk(data));
            reset();
            setEmail(data.email);
            setIsEmailSent(true);
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    return (
        <React.Fragment>
            <StyledRestoreWrap>
                {isEmailSent ? (
                    <div>
                        <StyledRestoreTitle>Restore password</StyledRestoreTitle>
                         <StyledNotification>
                           <StyledEmail>{email}</StyledEmail> successfully delivered. Go to the post office and follow the instructions in the letter received from us.
                         </StyledNotification>
                         <StyledBack href="/">To main page</StyledBack>
                    </div>
                ) : (
                    <React.Fragment>
                        <StyledTitle>Enter email for restore password</StyledTitle>
                        <StyledAuthForm onSubmit={handleSubmit(handleSubmitEmail)}>
                            <StyledAuthInput
                                type="email"
                                placeholder="Email"
                                {...register('email', { required: true })}
                            />
                            <RegisterButton onClick={handleSubmit(handleSubmitEmail)}>Enter</RegisterButton>
                        </StyledAuthForm>
                        <StyledBack href="/login">Back</StyledBack>
                    </React.Fragment>
                )}
            </StyledRestoreWrap>
        </React.Fragment>
    );
};

export default RestorePassword;