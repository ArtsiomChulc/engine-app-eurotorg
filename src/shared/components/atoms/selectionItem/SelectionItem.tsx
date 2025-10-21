import { Text } from '@/shared/components/atoms/text/Text';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { NavLink } from 'react-router';
import styled, { css } from 'styled-components';

type SelectionItemProps = {
    title?: string;
    address?: string;
    to?: string;
    onClick?: (item: string) => void;
};

const SelectionItemContainer = styled.div<{ $isAddress?: boolean }>`
    width: 100%;
    min-width: 320px;
    height: 60px;
    background: ${({ $isAddress }) =>
        $isAddress ? 'var(--bg-primary)' : 'var(--bg-secondary)'};
    border-radius: 12px;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background .2s ease-in-out;
    &:hover {
        background: var(--hover);
    }
    
    ${({$isAddress}) => !$isAddress &&
        css`
            border-bottom: 2px;
            border-bottom-color: var(--line-decor);
            border-bottom-style: solid;
            transition: background .2s ease-in-out;
        `
}
`;

const TextWrapper = styled.div`
    flex: 1 1 80%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
    justify-content: center;
    padding-left: 8px;
`;

const IconWrapper = styled.div`
    padding-right: 10px;
`;

export const SelectionItem = ({ address, title, to, onClick }: SelectionItemProps) => {
    const onClickHandler = () => {
        if (onClick && title) {
            onClick(title);
        }
    }

    return (
        <NavLink to={to ? to : ''}>
            <SelectionItemContainer $isAddress={!!address} onClick={onClickHandler}>
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
