import { RadioOption } from '@/shared/components/atoms/select/Select';
import styled from 'styled-components';

type RadioBtnProps = {
    id?: string;
    name?: string;
    value?: string;
    options: RadioOption[] | string[];
    onChange?: (value: string) => void;
};

const RadioBtnContainerStyled = styled.div<{ $isOptions: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: ${({ $isOptions }) => ($isOptions ? 'flex-start' : 'center')};
    gap: 10px;
    padding: 5px;
    flex-wrap: wrap;
    align-self: flex-start;
`;

const RadioOptionStyled = styled.label`
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
`;

const RadioBtnStyled = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border-radius: 50%;
    width: 16px;
    height: 16px;

    border: 3px solid var(--text-secondary);
    transition: 0.2s all linear;
    outline: none;

    &:checked {
        border: 7px solid var(--primary);
    }
`;

export const RadioBtn = ({
    id,
    name,
    value,
    options,
    onChange,
}: RadioBtnProps) => {
    const normalizedOptions: RadioOption[] = options.map(opt =>
        typeof opt === 'string' ? { label: opt, value: opt } : opt
    );

    return (
        <RadioBtnContainerStyled $isOptions={!!options}>
            {normalizedOptions.map(opt => {
                return (
                    <RadioOptionStyled
                        key={opt.value}
                        htmlFor={`${id}-${opt.value}`}
                    >
                        <RadioBtnStyled
                            id={`${id}-${opt.value}`}
                            type='radio'
                            name={name}
                            value={opt.label}
                            checked={value === opt.value}
                            onChange={() => {
                                if (onChange) onChange(opt.value);
                            }}
                        />
                        {opt.label.toUpperCase()}
                    </RadioOptionStyled>
                );
            })}
        </RadioBtnContainerStyled>
    );
};
