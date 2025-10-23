import { HeatingType } from '@/entities/markets/types';
import { Select, OptionType } from '@/shared/components/atoms/select/Select';
import { TextField } from '@/shared/components/atoms/textField/TextField';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

type InfoPieceProps = {
    title?: string;
    text?: string;
    isLoading?: boolean;
    editable?: boolean;
    options?: OptionType[];
    onChange?: (v: string) => void;
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
    editable,
    options,
    onChange,
}: InfoPieceProps) => {
    const onChangeHandler = (v: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(v.target.value);
        }
    };
    return (
        <InfoPieceStyled $loading={isLoading}>
            <TitleStyled title={title}>{title}</TitleStyled>
            {editable ? (
                options && options.length > 0 ? (
                    <Select options={options} placeholder={text} label={'Измените данные'} />
                ) : (
                    <TextField
                        value={text}
                        onChange={v => onChangeHandler(v)}
                    />
                )
            ) : (
                <TextStyled title={text}>{text}</TextStyled>
            )}

            {/*{editable ? (*/}
            {/*    <>*/}
            {/*        <TitleStyled title={title}>{title}</TitleStyled>*/}
            {/*        <TextField value={text} onChange={(v) => onChangeHandler(v)} />*/}
            {/*    </>*/}
            {/*) : (*/}
            {/*    <>*/}
            {/*        <TitleStyled title={title}>{title}</TitleStyled>*/}
            {/*        <TextStyled title={text}>{text}</TextStyled>*/}
            {/*    </>*/}
            {/*)}*/}
        </InfoPieceStyled>
    );
};
