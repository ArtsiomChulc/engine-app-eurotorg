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
    gap: 30px;
`;

const TextWrapperStyled = styled.div`

`

const IconWrapper = styled.div`
    background: var(--user-icon-wrap);
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    
    > svg {
        color: var(--user-icon);
    }
`

export const UserInfoBlock = ({
    icon,
    subtitle,
    title,
}: UserInfoBlockProps) => {
    return (
        <UserInfoBlockStyled>
            <IconWrapper>
                {icon}
            </IconWrapper>
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
