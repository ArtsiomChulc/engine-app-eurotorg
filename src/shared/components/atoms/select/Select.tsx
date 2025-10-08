import { HideInput } from '@/shared/components/atoms/hiddenRegisterInput/HideInput';
import { Label } from '@/shared/components/atoms/label/Label';
import { Wrapper } from '@/shared/components/atoms/wrapper/Wrapper';
import { InputsRegister } from '@/shared/components/organizms/authForm/AuthForm';
import { ReactNode, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import styled, { css, keyframes } from 'styled-components';

export type OptionType = {
    region: string;
    id: string;
};

type SelectProps = {
    options: OptionType[];
    placeholder?: string;
    value?: OptionType;
    label?: string;
    disabled?: boolean;
    icon?: ReactNode;
    onChange?: (option: OptionType | null) => void;
    register?: UseFormRegister<InputsRegister>;
    name?: string;
};

// Анимации
const slideDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
        max-height: 0;
    }
    to {
        opacity: 1;
        transform: translateY(-20px);
        max-height: 300px;
    }
`;

const slideUp = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
        max-height: 300px;
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
        max-height: 0;
    }
`;

const SelectStyled = styled.div<{
    $icon?: ReactNode;
    $disabled?: boolean;
}>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid var(--line-decor);
    background: var(--bg-secondary);
    position: relative;
    cursor: pointer;

    svg {
        cursor: pointer;
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;
            opacity: 0.7;
        `}
`;

const OptionsWrapper = styled.ul<{ $isOpen: boolean }>`
    width: 100%;
    min-height: 140px;
    padding: 10px 12px;
    background: var(--bg-secondary);
    border: 1px solid var(--line-decor);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    gap: 8px;
    overflow: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 10;
    animation: ${({ $isOpen }) => ($isOpen ? slideDown : slideUp)} 0.3s ease
        forwards;

    ${({ $isOpen }) =>
        !$isOpen &&
        css`
            pointer-events: none;
        `}
`;

const OptionStyled = styled.li<{ $isSelected: boolean }>`
    font-size: var(--text-sm);
    width: 100%;
    padding: 10px;
    cursor: pointer;

    &:hover {
        background: var(--secondary);
    }

    ${({ $isSelected }) =>
        $isSelected &&
        css`
            background: var(--bg-sidebar);
            color: var(--text-light);
            padding: 5px 10px;
            width: 100%;
            border-radius: 4px;
        `}
`;

const Placeholder = styled.span<{ $hasValue: boolean }>`
    color: var(--text-placeholder);

    ${$hasValue =>
        $hasValue &&
        css`
            color: var(--text-primary);
        `}
`;

export const Select = ({
    options,
    placeholder = 'Выберите регион',
    value,
    label = 'Выберите регион',
    disabled,
    onChange,
    register,
    name = 'selectRegion',
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(
        value || null
    );

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: OptionType) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onChange) {
            onChange(option);
        }
    };

    const displayValue = selectedOption ? selectedOption.region : '';

    return (
        <Wrapper>
            <HideInput
                value={selectedOption ? selectedOption.region : ''}
                name={name}
                register={register}
            />
            <Label>{label}</Label>
            <SelectStyled $disabled={disabled} onClick={handleToggle}>
                {options ? (
                    <Placeholder $hasValue={!!displayValue}>
                        {displayValue || placeholder}
                    </Placeholder>
                ) : (
                    'Ошибка загрузки данных'
                )}
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </SelectStyled>
            <OptionsWrapper $isOpen={isOpen}>
                {options.map(({ region, id }) => {
                    return (
                        <OptionStyled
                            $isSelected={region === selectedOption?.region}
                            key={id}
                            onClick={() =>
                                handleSelect({
                                    region: region,
                                    id: id,
                                })
                            }
                        >
                            {region}
                        </OptionStyled>
                    );
                })}
            </OptionsWrapper>
        </Wrapper>
    );
};
