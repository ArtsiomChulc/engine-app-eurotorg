import styled from 'styled-components';

type InfoPieceProps = {
    title?: string;
    text?: string;
    isLoading?: boolean;
};

const InfoPieceStyled = styled.div<{ $loading: boolean }>`
    width: 100%;
    height: 60px;
    padding: ${({ $loading }) => ($loading ? 0 : '8px 12px')};
    background: var(--bg-primary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-size: var(--text-base);
    overflow: hidden;

    &:first-child {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }

    &:last-child {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
    }
`;
const TitleStyled = styled.p`
    flex: 0 1 40%;
    color: var(--text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
`;
const TextStyled = styled.p`
    flex: 1 1 60%;
    color: var(--text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: end;
`;

export const InfoPiece = ({
    isLoading = false,
    text,
    title,
}: InfoPieceProps) => {
    console.log(isLoading);
    return (
        <InfoPieceStyled $loading={isLoading}>
            <>
                <TitleStyled title={title}>{title}</TitleStyled>
                <TextStyled title={text}>{text}</TextStyled>
            </>
        </InfoPieceStyled>
    );
};
