import { ReactNode } from 'react';
import { NavLink } from 'react-router';
import styled, { css, keyframes } from 'styled-components';

type BlockInfoProps = {
    to?: string;
    icon?: ReactNode;
    title?: string;
    description?: string;
    isLoading?: boolean;
    error?: boolean;
};

const shimmer = keyframes`
    0% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0 0;
    }
`;

const BlockInfoStyled = styled.div<{
    $isLoading: boolean;
    $error: boolean;
}>`
    background: var(--bg-secondary);
    border-radius: 12px;
    width: 258px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    ${({ $isLoading }) => {
        if ($isLoading) {
            return css`
                background: linear-gradient(
                    90deg,
                    #ededed 30%,
                    #dcdcdc 50%,
                    #ededed 70%
                );
                background-size: 400%;
                animation: ${shimmer} 1.5s infinite linear;

                div svg {
                    display: none;
                }
            `;
        }
    }}
`;

const IconBlockWrapper = styled.div<{ $isLoading: boolean }>`
    width: 100%;
    height: 250px;
    background: ${({ $isLoading }) =>
        $isLoading ? 'transparent' : 'var(--secondary)'};

    svg {
        width: 100%;
        display: inline-block;
        margin: 30px auto;
    }
`;

const TextBlockWrapper = styled.div`
    width: 100%;
    height: 100px;
    padding: 12px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

const TextBlockTitle = styled.p`
    font-size: var(--text-lg);
    font-weight: bold;
`;

const TextBlockDesc = styled.p`
    font-size: var(--text-sm);
    color: var(--text-secondary);
`;

export const BlockInfo = ({
    to,
    description,
    icon,
    title,
    error = false,
    isLoading = false,
}: BlockInfoProps) => {
    return (
        <NavLink to={to ? to : ''}>
            <BlockInfoStyled $isLoading={isLoading} $error={error}>
                <IconBlockWrapper $isLoading={isLoading}>
                    {icon}
                </IconBlockWrapper>
                <TextBlockWrapper>
                    <TextBlockTitle>{title}</TextBlockTitle>
                    <TextBlockDesc>{description}</TextBlockDesc>
                </TextBlockWrapper>
            </BlockInfoStyled>
        </NavLink>
    );
};
