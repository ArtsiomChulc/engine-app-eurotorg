import { MarketDetailsType } from '@/entities/markets/types';
import { InfoPiece } from '@/shared/components/atoms/infoPiece/InfoPiece';
import { Skeleton } from '@/shared/components/atoms/skeleton/Skeleton';
import { Text } from '@/shared/components/atoms/text/Text';
import styled from 'styled-components';

type InfoPieceBlockProps = {
    data?: MarketDetailsType;
    isLoading?: boolean;
};

const InfoPieceBlockStyled = styled.div<{ $loading: boolean }>`
    width: 100%;
    height: ${({ $loading }) => ($loading ? '300px' : 'auto')};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`;

const NoDataStyled = styled.h2`
    font-size: var(--text-2xl);
    color: var(--text-secondary);
`

export const InfoPieceBlock = ({
    data,
    isLoading = false,
}: InfoPieceBlockProps) => {
    if (isLoading) {
        return (
            <InfoPieceBlockStyled $loading>
                <Skeleton isOverall />
                <Skeleton isOverall />
                <Skeleton isOverall />
                <Skeleton isOverall />
            </InfoPieceBlockStyled>
        );
    }

    if (!data) {
        return (
            <InfoPieceBlockStyled $loading={false}>
                <NoDataStyled>No data</NoDataStyled>
            </InfoPieceBlockStyled>
        );
    }
    return (
        <InfoPieceBlockStyled $loading={false}>
            <InfoPiece title="Отопление" text={data.heating} />
            <InfoPiece title="Водоснабжение" text={data.waterSupply ? 'Есть' : 'Нет'} />
            <InfoPiece title="Канализация" text={data.sewerage} />
            <InfoPiece title="Установленная мощность" text={data.installedCapacity} />
            <InfoPiece title="Существующая мощность" text={data.existingCapacity} />

            {data.meterNumber?.length > 0 && (
                <>
                    <Text size={'xl'} color={'placeholder'} variant={'h4'} weight={'bold'}>Приборы учета:</Text>
                    {data.meterNumber.map((meter) => (
                        <InfoPiece
                            key={meter.id}
                            title={meter.nomination}
                            text={meter.number}
                        />
                    ))}
                </>
            )}
        </InfoPieceBlockStyled>
    );
};
