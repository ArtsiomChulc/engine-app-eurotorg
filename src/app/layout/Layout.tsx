import {
    NavPanel
} from '@/shared/components/molecules/navPanel/NavPanel';
import { ReactNode } from 'react';
import styled from 'styled-components';

type LayoutProps = {
    children: ReactNode;
};

const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: var(--bg-secondary);
    flex-direction: column;
`;

const NavPanelContainer = styled.div`
    display: flex;
    flex: 1;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const Layout = ({ children }: LayoutProps) => {
    return (
        <Wrapper>
            <Content>{children}</Content>
            <NavPanelContainer>
                <NavPanel/>
            </NavPanelContainer>
        </Wrapper>
    );
};
