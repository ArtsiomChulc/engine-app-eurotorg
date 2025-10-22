import { MarketDetailsType } from '@/entities/markets/types';
import { Text } from '@/shared/components/atoms/text/Text';
import { InfoPieceBlock } from '@/shared/components/molecules/infoPieceBlock/InfoPieceBlock';
import styled from 'styled-components';

type MarketDetailsProps = {
    details: MarketDetailsType;
};

const MarketDetailsStyled = styled.div`
    > h2 {
        margin-bottom: 20px;
    }
`;

export const MarketDetails = ({ details }: MarketDetailsProps) => {
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
            <InfoPieceBlock data={details} />
        </MarketDetailsStyled>
    );
};
