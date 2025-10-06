import {
    BlockForm
} from '@/shared/components/atoms/blockForm/BlockForm';
import { useState } from 'react';
import styled from 'styled-components';

type Mode = 'register' | 'login'

const AuthFormWrapper = styled.div`
    width: clamp(340px, 50%, 100%);
    padding: 20px;
    background: var(--bg-primary);
    border-radius: 8px;
`

const FormTitle = styled.h1`
    text-align: center;
    text-transform: uppercase;
    color: var(--text-primary);
    font-size: var(--text-2xl);
    margin-bottom: 15px;
`

const FormSubTitle = styled.p`
    text-align: center;
    text-transform: uppercase;
    color: var(--text-secondary);
    font-size: var(--text-sm);
    margin-bottom: 25px;
    line-height: 1.5;
`

const FormSwitchText = styled.span`
    text-align: center;
    text-transform: uppercase;
    color: var(--primary);
    font-size: var(--text-base);
    cursor: pointer;
`

export const AuthForm = () => {
    const [mode, setMode] = useState<Mode>('login');

    const getAuthMode = () => {
        setMode(() => {
            if (mode === 'login') {
                return 'register'
            } else {
                return 'login'
            }
        })
    }

    const getTitleForm = () => {
        if (mode === 'login') {
            return 'Вход'
        } else {
            return 'Регистрация'
        }
    }

    const getSubTitleForm = () => {
        if (mode === 'login') {
            return 'войдите в свой аккаунт для продолжения или'
        } else {
            return 'зарегистрируйтесь в системе или'
        }
    }

    const getSwitchTextForm = () => {
        if (mode === 'login') {
            return 'зарегистрируйтесь'
        } else {
            return 'войдите'
        }
    }

    return (
        <AuthFormWrapper>
            <FormTitle>{getTitleForm()}</FormTitle>
            <FormSubTitle>
                {getSubTitleForm()}{' '}
                <FormSwitchText onClick={getAuthMode}>{getSwitchTextForm()}</FormSwitchText>
            </FormSubTitle>
            <BlockForm authMode={mode}/>
        </AuthFormWrapper>
    );
};