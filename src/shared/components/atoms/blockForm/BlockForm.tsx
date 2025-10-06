import { Button } from '@/shared/components/atoms/button/Button';
import { TextField } from '@/shared/components/atoms/textField/TextField';
import { useState, ReactNode } from 'react';
import { FaRegEyeSlash, FaEye } from 'react-icons/fa';
import styled from 'styled-components';

type BlockFormProps = {
    authMode: string;
};

const BlockFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const BlockForm = ({ authMode }: BlockFormProps) => {
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
                    <TextField fullWidth label={'Имя'} placeholder={'Имя'} />
                    <TextField
                        fullWidth
                        label={'Фамилия'}
                        placeholder={'Фамилия'}
                    />
                </>
            )}
            <TextField
                fullWidth
                label={'Электронная почта'}
                placeholder={'Электронная почта'}
            />
            <TextField
                fullWidth
                label={'Пароль'}
                placeholder={'Пароль'}
                type={showPassword}
                icon={getIconForField()}
            />
            {authMode === 'register' && (
                <>
                    <TextField
                        fullWidth
                        label={'Подтвердите' + ' пароль'}
                        placeholder={'Подтвердите' + ' пароль'}
                        type={showPassword}
                        icon={getIconForField()}
                    />
                </>
            )}
            <Button type={'submit'} fullWidth>
                {authMode === 'register' ? 'Регистрация' : 'Войти'}
            </Button>
        </BlockFormStyled>
    );
};
