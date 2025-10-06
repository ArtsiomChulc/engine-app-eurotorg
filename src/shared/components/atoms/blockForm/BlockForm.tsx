import { Button } from '@/shared/components/atoms/button/Button';
import { TextField } from '@/shared/components/atoms/textField/TextField';
import { useState, ReactNode } from 'react';
import { FaRegEyeSlash, FaEye } from 'react-icons/fa';
import styled from 'styled-components';

type BlockFormProps = {
    authMode: 'register' | 'login';
};

const BlockFormStyled = styled.div`
    width: clamp(340px, 50%, 100%);
    padding: 20px;
    background: var(--bg-primary);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const BlockForm = ({ authMode }: BlockFormProps) => {
    const [showPassword, getShowPassword] = useState<string>('text');

    const showPasswordHandler = () => {
        getShowPassword(() => {
            if (showPassword === 'text') {
                return 'password'
            } else {
                return 'text'
            }
        })
    }

    const getIconForField = (): ReactNode => {
        if (showPassword === 'text') {
            return <FaRegEyeSlash onClick={showPasswordHandler} />
        } else {
            return <FaEye onClick={showPasswordHandler} />
        }
    }

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
