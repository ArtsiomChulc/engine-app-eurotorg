import { ReactNode } from 'react';
import styled from 'styled-components';

type MainPageContainerProps = {
    children: ReactNode;
}

const MainPageContainerStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;    
    flex-wrap: wrap;
    margin-top: 40px;
`;

export const MainPageContainer = ({children}: MainPageContainerProps) => {
    return (
        <MainPageContainerStyled>
            {children}
        </MainPageContainerStyled>
    );
};