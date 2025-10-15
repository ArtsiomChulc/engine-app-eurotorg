import { InfoPiece } from '@/shared/components/atoms/infoPiece/InfoPiece';
import { Skeleton } from '@/shared/components/atoms/skeleton/Skeleton';
import styled from 'styled-components';

type InfoPieceType = {
    id: string;
    title: string;
    text: string;
};

type InfoPieceBlockProps = {
    data?: InfoPieceType[];
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
    return (
        <InfoPieceBlockStyled $loading={isLoading}>
            {isLoading && (
                <>
                    <Skeleton isOverall />
                    <Skeleton isOverall />
                    <Skeleton isOverall />
                    <Skeleton isOverall />
                </>
            )}
            {!data || data.length === 0 && !isLoading ? (
                <NoDataStyled>No data</NoDataStyled>
            ) : (
                data?.map(({ id, title, text }) => {
                    return (
                        <InfoPiece
                            key={id}
                            title={title}
                            text={text}
                            isLoading={isLoading}
                        />
                    );
                })
            )}
        </InfoPieceBlockStyled>
    );
};
