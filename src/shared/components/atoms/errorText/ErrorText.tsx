import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const ErrorTextStyled = styled.span`
    font-size: 12px;
    color: var(--error, #e53935);
`;

export const ErrorText = ({children}: PropsWithChildren) => {
    return (
        <ErrorTextStyled>
            {children}
        </ErrorTextStyled>
    );
};