import { Text } from '@/shared/components/atoms/text/Text';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { NavLink } from 'react-router';
import styled, { css } from 'styled-components';

type SelectionItemProps = {
    district?: string;
    marketNumber?: string;
    marketAddress?: string;
    responsible?: string;
    boss?: string;
    to?: string;
    onClick?: (item: string) => void;
};

const SelectionItemContainer = styled.div<{ $isAddress?: boolean }>`
    min-width: 320px;
    width: 690px;
    background: ${({ $isAddress }) =>
        $isAddress ? 'var(--bg-primary)' : 'var(--bg-secondary)'};
    border-radius: 12px;
    padding: 15px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
        background: var(--hover);
    }

    ${({ $isAddress }) =>
        !$isAddress &&
        css`
            border-bottom: 2px;
            border-bottom-color: var(--line-decor);
            border-bottom-style: solid;
            transition: background 0.2s ease-in-out;
        `}
`;

const TextWrapper = styled.div`
    flex: 1 1 80%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
    justify-content: center;
    padding-left: 8px;

    :nth-child(2) {
        margin-bottom: 10px;
    }
`;

const IconWrapper = styled.div`
    padding-right: 10px;
`;

export const SelectionItem = ({
    marketAddress = 'нет адреса',
    marketNumber,
    responsible,
    district,
    boss,
    to,
    onClick,
}: SelectionItemProps) => {
    const onClickHandler = () => {
        if (onClick && marketNumber) {
            onClick(marketAddress);
        }
    };


    return (
        <NavLink
            to={to ? to : ''}
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <SelectionItemContainer
                $isAddress={!!marketAddress}
                onClick={onClickHandler}
            >
                <TextWrapper>
                    <Text
                        weight={'bold'}
                        size={'lg'}
                        color={`${marketAddress ? 'primary' : 'secondary'}`}
                        variant={'h4'}
                    >
                        Магазин №{marketNumber}
                    </Text>
                    {district && (
                        <Text size={'sm'} color={'placeholder'}>
                            {district} район
                        </Text>
                    )}
                    <Text size={'sm'} color={'primary'}>
                        Адрес: {marketAddress}
                    </Text>
                    <Text size={'sm'} color={'primary'}>
                        Директор: {boss}
                    </Text>
                    <Text size={'sm'} color={'primary'}>
                        Инженер: {responsible}
                    </Text>
                </TextWrapper>
                <IconWrapper>
                    <MdOutlineArrowForwardIos color={'var(--text-secondary)'} />
                </IconWrapper>
            </SelectionItemContainer>
        </NavLink>
    );
};
