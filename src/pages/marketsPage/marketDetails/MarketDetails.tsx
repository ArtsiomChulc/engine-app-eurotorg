import { MarketDetailsType } from '@/entities/markets/types';
import {
    InfoPieceBlock
} from '@/shared/components/molecules/infoPieceBlock/InfoPieceBlock';
import styled from 'styled-components';

type MarketDetailsProps = {
    details: MarketDetailsType
}

const MarketDetailsStyled = styled.div`
    
`

export const MarketDetails = ({details}: MarketDetailsProps) => {
    return (
        <MarketDetailsStyled>
            <InfoPieceBlock data={details}/>
        </MarketDetailsStyled>
    );
};