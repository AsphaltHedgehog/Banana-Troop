import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import svg from '../../images/icons/sprite.svg';
import { Link } from 'react-router-dom';

interface FormData {
    email: string;
}

interface Props {
    closeModal: () => void;
}

const RestorePassword: React.FC<Props> = ({ closeModal }) => {
    const { register, handleSubmit, reset } = useForm<FormData>(); // Використання типу FormData

    const onSubmit: SubmitHandler<FormData> = (data) => { // Використання типу SubmitHandler<FormData>
        // Тут можна реалізувати відправку електронного листа з data.email
        console.log('Відправлено: ', data.email);
        reset();
    };

    return (
        <React.Fragment>
            <button onClick={closeModal} className="close-button">
                <use href={svg + '#icon-x'}></use>
            </button>
            <h2>Enter email for restore password</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="Email"
                    {...register('email', { required: true })}
                />
                <button type="submit">Enter</button>
            </form>
            <Link to="/authPage/register"><button onClick={closeModal}>Back</button></Link>
        </React.Fragment>
    );
};

export default RestorePassword;