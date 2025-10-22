import { MarketsType } from '@/entities/markets/types';
import { SelectionItem } from '@/shared/components/atoms/selectionItem/SelectionItem';
import { Text } from '@/shared/components/atoms/text/Text';
import {
    TextField
} from '@/shared/components/atoms/textField/TextField';
import { CiSearch } from 'react-icons/ci';
import styled from 'styled-components';

type MarketsChoiceContainerProps = {
    markets?: Array<MarketsType> | [];
};

const MarketsStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

export const Markets = ({ markets }: MarketsChoiceContainerProps) => {
    if (!markets)
        return (
            <Text
                size={'2xl'}
                weight={'normal'}
                variant={'span'}
                color={'secondary'}
                position={'center'}
            >
                No markets
            </Text>
        );
    return (
        <MarketsStyled>
            <Text weight={'bold'} variant={'h1'} isTitle>
                Объекты
            </Text>
            <TextField
                placeholder={'Поиск магазина'}
                icon={<CiSearch color={'var(--text-placeholder)'} size={18} />}
                isSearch
            />
            <Text size={'2xl'} weight={'bold'} variant={'h2'} position={'left'}>
                Выберите объект
            </Text>
            {markets?.map(({ marketName, address, id }) => {
                return (
                    <SelectionItem
                        key={id}
                        address={address}
                        title={marketName}
                        to={marketName}
                    />
                );
            })}
        </MarketsStyled>
    );
};
