import { Text } from '@/shared/components/atoms/text/Text';
import { HandbookType } from '@/typesCommon/markets/types';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { NavLink } from 'react-router';
import styled from 'styled-components';

type SelectionItemProps = HandbookType & {
    to: string;
    onClick?: (item: string) => void;
};

const SelectionItemContainer = styled.div`
    min-width: 320px;
    width: 100%;
    background: var(--bg-secondary);
    border-radius: 12px;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
        background: var(--hover);
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

export const SelectionItem = ({
    marketNumber,
    address,
    onClick,
    to,
}: SelectionItemProps) => {
    const onClickHandler = () => {
        if (onClick && marketNumber) {
            onClick(marketNumber);
        }
    };

    return (
        <NavLink
            to={to}
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <SelectionItemContainer onClick={onClickHandler}>
                <TextWrapper>
                    <Text
                        weight={'bold'}
                        size={'lg'}
                        color={'primary'}
                        variant={'h4'}
                    >
                        Магазин №{marketNumber}
                    </Text>
                    <Text size={'sm'} color={'secondary'}>
                        Адрес: {address}
                    </Text>
                </TextWrapper>
                <IconWrapper>
                    <MdOutlineArrowForwardIos color={'var(--text-secondary)'} />
                </IconWrapper>
            </SelectionItemContainer>
        </NavLink>
    );
};
