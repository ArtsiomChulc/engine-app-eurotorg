import { Text } from '@/shared/components/atoms/text/Text';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { NavLink } from 'react-router';
import styled from 'styled-components';

type SelectionItemProps = {
    title?: string;
    address?: string;
    to: string;
};

const SelectionItemContainer = styled.div`
    width: 100%;
    min-width: 320px;
    height: 60px;
    background: var(--bg-primary);
    border-radius: 12px;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const TextWrapper = styled.div`
    flex: 1 1 80%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
    justify-content: center;
    padding-left: 15px;
`;

const IconWrapper = styled.div`
    padding-right: 10px;
`;

export const SelectionItem = ({ address, title, to }: SelectionItemProps) => {
    return (
        <NavLink to={to}>
            <SelectionItemContainer>
                <TextWrapper>
                    <Text
                        weight={'bold'}
                        size={'lg'}
                        color={`${address ? 'primary' : 'secondary'}`}
                        variant={'h4'}
                    >
                        {title}
                    </Text>
                    {address && (
                        <Text size={'xs'} color={'placeholder'}>
                            {address}
                        </Text>
                    )}
                </TextWrapper>
                <IconWrapper>
                    <MdOutlineArrowForwardIos color={'var(--text-secondary)'} />
                </IconWrapper>
            </SelectionItemContainer>
        </NavLink>
    );
};
