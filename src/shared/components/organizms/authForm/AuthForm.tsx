import { RegisterForm } from '@/shared/components/molecules/registerForm/RegisterForm';
import { LoginForm } from '@/shared/components/organizms/loginForm/LoginForm';
import { selectIsAuthenticated } from '@/store/slices/auth-slice';
import { useState, ReactNode, useEffect } from 'react';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

type Mode = 'register' | 'login';

export type InputsLogin = {
    email: string;
    password: string;
};

export type InputsRegister = {
    name: string;
    lastName: string;
    email: string;
    region: string;
    password: string;
    confirmPassword: string;
};

const AuthFormWrapper = styled.div`
    width: clamp(340px, 50%, 100%);
    padding: 20px;
    background: var(--bg-primary);
    border-radius: 8px;
`;

const FormTitle = styled.h1`
    text-align: center;
    text-transform: uppercase;
    color: var(--text-primary);
    font-size: var(--text-2xl);
    margin-bottom: 15px;
`;

const FormSubTitle = styled.p`
    text-align: center;
    text-transform: uppercase;
    color: var(--text-secondary);
    font-size: var(--text-sm);
    margin-bottom: 25px;
    line-height: 1.5;
`;

const FormSwitchText = styled.span`
    text-align: center;
    text-transform: lowercase;
    color: var(--primary);
    font-size: var(--text-base);
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: var(--primary-hover);
    }
`;

export const AuthForm = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(selectIsAuthenticated)
    const [mode, setMode] = useState<Mode>('login');
    const [showPassword, setShowPassword] = useState<string>('password');

    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth, navigate]);

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

    const getAuthMode = () => {
        setMode(prevMode => (prevMode === 'login' ? 'register' : 'login'));
    };

    const getTitleForm = () => {
        if (mode === 'login') {
            return 'Вход';
        } else {
            return 'Регистрация';
        }
    };

    const getSubTitleForm = () => {
        if (mode === 'login') {
            return 'войдите в свой аккаунт для продолжения или';
        } else {
            return 'зарегистрируйтесь в системе или';
        }
    };

    const getSwitchTextForm = () => {
        if (mode === 'login') {
            return 'зарегистрируйтесь';
        } else {
            return 'войдите';
        }
    };

    return (
        <AuthFormWrapper>
            <FormTitle>{getTitleForm()}</FormTitle>
            <FormSubTitle>
                {getSubTitleForm()}{' '}
                <FormSwitchText onClick={getAuthMode}>
                    {getSwitchTextForm()}
                </FormSwitchText>
            </FormSubTitle>
            {mode === 'login' ? (
                <LoginForm
                    getIconForField={getIconForField}
                    showPassword={showPassword}
                />
            ) : (
                <RegisterForm
                    showPassword={showPassword}
                    getIconForField={getIconForField}
                />
            )}
        </AuthFormWrapper>
    );
};
