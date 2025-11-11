import { MarketDetailsType } from '@/typesCommon/markets/types';
import { Text } from '@/shared/components/atoms/text/Text';
import { InfoPieceBlock } from '@/shared/components/molecules/infoPieceBlock/InfoPieceBlock';
import { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import styled from 'styled-components';

type MarketDetailsProps = {
    details: MarketDetailsType;
};

const MarketDetailsStyled = styled.div`
    > h2 {
        margin-bottom: 10px;
    }

    > svg {
        display: flex;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: 20px;
        cursor: pointer;
    }
`;

export const MarketDetails = ({ details }: MarketDetailsProps) => {
    const [edit, setEdit] = useState<boolean>(false);

    const editHandler = () => {
        setEdit(prevState => !prevState);
    };

    return (
        <MarketDetailsStyled>
            <Text
                variant={'h2'}
                position={'center'}
                color={'secondary'}
                size={'xl'}
            >
                Информация по ТО №{details.marketNumber}
            </Text>
            {!edit && (
                <CiEdit
                    size={30}
                    title={'Редактировать'}
                    color={'var(--secondary)'}
                    onClick={editHandler}
                />
            )}
            <InfoPieceBlock
                data={details}
                edit={edit}
                onSave={updated => {
                    console.log('Updated data:', updated);
                }}
            />
        </MarketDetailsStyled>
    );
};
