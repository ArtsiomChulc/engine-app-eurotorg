import { Skeleton } from '@/shared/components/atoms/skeleton/Skeleton';
import { ReactNode } from 'react';
import { NavLink } from 'react-router';
import styled from 'styled-components';

type BlockInfoProps = {
    to?: string;
    icon?: ReactNode;
    title?: string;
    description?: string;
    isLoading?: boolean;
    error?: boolean;
};

const BlockInfoStyled = styled.div<{
    $error: boolean;
}>`
    background: var(--bg-primary);
    border-radius: 12px;
    width: 260px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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
        <BlockInfoStyled $error={error}>
            <NavLink to={to ? to : ''}>
                {isLoading ? (
                    <Skeleton />
                ) : (
                    <>
                        <IconBlockWrapper $isLoading={isLoading}>
                            {icon}
                        </IconBlockWrapper>
                        <TextBlockWrapper>
                            <TextBlockTitle>{title}</TextBlockTitle>
                            <TextBlockDesc>{description}</TextBlockDesc>
                        </TextBlockWrapper>
                    </>
                )}
            </NavLink>
        </BlockInfoStyled>
    );
};
