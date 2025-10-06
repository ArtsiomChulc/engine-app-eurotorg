import { Button } from '@/shared/components/atoms/button/Button';
import { TextField } from '@/shared/components/atoms/textField/TextField';
import { Inputs } from '@/shared/components/organizms/authForm/AuthForm';
import { useState, ReactNode } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FaRegEyeSlash, FaEye } from 'react-icons/fa';
import styled from 'styled-components';

type BlockFormProps = {
    authMode: string;
    register: UseFormRegister<Inputs>;
    errors?: FieldErrors<Inputs>;
};

const BlockFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const BlockForm = ({ authMode, register, errors }: BlockFormProps) => {
    const [showPassword, setShowPassword] = useState<string>('text');

    const showPasswordHandler = () => {
        setShowPassword(prevState =>
            prevState === 'text' ? 'password' : 'text'
        );
    };

    const getIconForField = (): ReactNode => {
        if (showPassword === 'text') {
            return <FaEye onClick={showPasswordHandler} />;
        } else {
            return <FaRegEyeSlash onClick={showPasswordHandler} />;
        }
    };

    return (
        <BlockFormStyled>
            {authMode === 'register' && (
                <>
                    <TextField
                        fullWidth
                        label={'Имя'}
                        placeholder={'Имя'}
                        {...register('name')}
                        name={'name'}
                        error={errors?.name?.message}
                    />
                    <TextField
                        fullWidth
                        label={'Фамилия'}
                        placeholder={'Фамилия'}
                        {...register('surname')}
                        name={'surname'}
                        error={errors?.surname?.message}
                    />
                </>
            )}
            <TextField
                fullWidth
                label={'Электронная почта'}
                placeholder={'Электронная почта'}
                {...register('email')}
                name={'email'}
                error={errors?.email?.message}
            />
            <TextField
                fullWidth
                label={'Пароль'}
                placeholder={'Пароль'}
                type={showPassword}
                icon={getIconForField()}
                {...register('password')}
                name={'password'}
                error={errors?.password?.message}
            />
            {authMode === 'register' && (
                <>
                    <TextField
                        fullWidth
                        label={'Подтвердите' + ' пароль'}
                        placeholder={'Подтвердите' + ' пароль'}
                        type={showPassword}
                        icon={getIconForField()}
                        name={'confirmPassword'}
                    />
                </>
            )}
            <Button type={'submit'} fullWidth>
                {authMode === 'register' ? 'Регистрация' : 'Войти'}
            </Button>
        </BlockFormStyled>
    );
};
