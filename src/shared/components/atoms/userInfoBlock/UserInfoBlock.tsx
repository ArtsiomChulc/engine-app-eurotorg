import { Text } from '@/shared/components/atoms/text/Text';
import { ReactNode } from 'react';
import styled from 'styled-components';

type UserInfoBlockProps = {
    icon?: ReactNode;
    title: string;
    subtitle: string;
};

const UserInfoBlockStyled = styled.div`
    min-width: 320px;
    width: 100%;
    max-width: 720px;
    padding: 15px 10px;
    border-radius: 8px;
    background: var(--bg-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const TextWrapperStyled = styled.div`

`

export const UserInfoBlock = ({
    icon,
    subtitle,
    title,
}: UserInfoBlockProps) => {
    return (
        <UserInfoBlockStyled>
            {icon}
            <TextWrapperStyled>
                <Text size={'xs'} variant={'h3'} color={'secondary'}>
                    {title}
                </Text>
                <Text size={'lg'} color={'primary'} variant={'p'} weight={'bold'}>
                    {subtitle}
                </Text>
            </TextWrapperStyled>
        </UserInfoBlockStyled>
    );
};
