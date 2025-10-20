import { regionsPageData } from '@/pages/regions/schemas/regionsPageData';
import { SelectionItem } from '@/shared/components/atoms/selectionItem/SelectionItem';
import { Text } from '@/shared/components/atoms/text/Text';
import { TextField } from '@/shared/components/atoms/textField/TextField';
import { CiSearch } from 'react-icons/ci';
import styled from 'styled-components';

const RegionsStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

export const Regions = () => {
    return (
        <RegionsStyled>
            <Text weight={'bold'} variant={'h1'} isTitle>
                Регионы
            </Text>
            <TextField
                placeholder={'Поиск региона'}
                icon={<CiSearch color={'var(--text-placeholder)'} size={18} />}
                isSearch
            />
            <Text size={'2xl'} weight={'bold'} variant={'h2'} position={'left'}>
                Все регионы
            </Text>
            {regionsPageData.map(({ to, title, id }) => {
                return <SelectionItem key={id} to={to} title={title} />;
            })}
        </RegionsStyled>
    );
};
