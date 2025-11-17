import { Loader } from '@/shared/components/atoms/loader/Loader';
import {
    PageTitle
} from '@/shared/components/molecules/pageTtitle/PageTitle';
import { MarketsType } from '@/typesCommon/markets/types';
import { SelectionItem } from '@/shared/components/atoms/selectionItem/SelectionItem';
import { Text } from '@/shared/components/atoms/text/Text';
import { TextField } from '@/shared/components/atoms/textField/TextField';
import { CiSearch } from 'react-icons/ci';
import styled from 'styled-components';

type MarketsChoiceContainerProps = {
    markets?: Array<MarketsType> | [];
    isLoading: boolean;
};

const MarketsStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

export const Markets = ({
    markets,
    isLoading,
}: MarketsChoiceContainerProps) => {
    if (isLoading) return <Loader />;

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
            <PageTitle title={'Объекты'}/>
            <TextField
                placeholder={'Поиск магазина'}
                icon={<CiSearch color={'var(--text-placeholder)'} size={18} />}
                isSearch
            />
            <Text size={'2xl'} weight={'bold'} variant={'h2'} position={'left'}>
                Выберите объект
            </Text>
            {markets?.map(({ marketNumber, address }) => {
                return (
                    <SelectionItem
                        key={marketNumber}
                        to={marketNumber ? marketNumber : ''}
                        marketNumber={marketNumber}
                        address={address}
                    />
                );
            })}
        </MarketsStyled>
    );
};
