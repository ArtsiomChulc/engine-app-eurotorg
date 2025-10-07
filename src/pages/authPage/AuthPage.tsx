import {
    AuthForm
} from '@/shared/components/organizms/authForm/AuthForm';
import styled from 'styled-components';

const AuthPageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AuthPage = () => {
    return (
        <AuthPageWrapper>
            <AuthForm/>
        </AuthPageWrapper>
    );
};