import { RadioBtn } from '@/shared/components/atoms/radioBtn/RadioBtn';
import { RadioOption } from '@/shared/components/atoms/select/Select';
import { TextField } from '@/shared/components/atoms/textField/TextField';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

type InfoPieceProps = {
    title?: string;
    text?: string;
    isLoading?: boolean;
    editable?: boolean;
    options?: RadioOption[] | string[];
    fieldName?: string;
    onChange?: (v: string) => void;
};

const InfoPieceStyled = styled.div<{ $loading: boolean, $isOptions: boolean }>`
    width: 100%;
    height: ${({$isOptions}) => $isOptions ? 'auto' : '60px'};
    padding: ${({ $loading }) => ($loading ? 0 : '8px 12px')};
    background: var(--bg-primary);
    display: flex;
    align-items: center;
    justify-content: ${({$isOptions}) => $isOptions ? 'flex-start' : 'space-between'};
    gap: ${({$isOptions}) => $isOptions ? '50px' : '10px'};
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
    fieldName,
}: InfoPieceProps) => {
    const onChangeHandler = (v: ChangeEvent<HTMLInputElement> | string) => {
        if (onChange && typeof v !== 'string') {
            onChange(v.target.value);
        }
        if (onChange && typeof v === 'string') {
            onChange(v);
        }
    };
    return (
        <InfoPieceStyled $loading={isLoading} $isOptions={!!options}>
            <TitleStyled title={title}>{title?.toUpperCase()}</TitleStyled>
            {editable ? (
                options && options.length > 0 ? (
                    <RadioBtn
                        id={fieldName}
                        name={fieldName}
                        value={text}
                        options={options}
                        onChange={v => {
                            onChangeHandler(v)
                        }}
                    />
                ) : (
                    <TextField
                        value={text}
                        onChange={v => onChangeHandler(v)}
                    />
                )
            ) : (
                <TextStyled title={text}>{text}</TextStyled>
            )}
        </InfoPieceStyled>
    );
};
