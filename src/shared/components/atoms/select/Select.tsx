import { Label } from '@/shared/components/atoms/label/Label';
import { Wrapper } from '@/shared/components/atoms/wrapper/Wrapper';
import { ReactNode, useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import styled, { css, keyframes } from 'styled-components';

type OptionsType = {
    region: string;
    id: string;
}[];

type SelectProps = {
    options?: OptionsType;
    label?: string;
    disabled?: boolean;
    icon?: ReactNode;
};

// mock!!todo
export const mockOptions: OptionsType = [
    { region: 'Витебский', id: 'asd' },
    { region: 'Орщанский', id: 'sss' },
    { region: 'Полоцкий', id: 'qqq' },
];

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
    gap: 8px;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid var(--line-decor);
    background: var(--bg-secondary);
    position: relative;
    flex-direction: row-reverse;
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

const OptionsWrapper = styled.ul<{ isOpen: boolean }>`
    width: 100%;
    padding: 10px 12px;
    background: var(--bg-secondary);
    border: 1px solid var(--line-decor);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
    overflow: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 10;
    animation: ${({ isOpen }) => (isOpen ? slideDown : slideUp)} 0.3s ease
        forwards;

    ${({ isOpen }) =>
        !isOpen &&
        css`
            pointer-events: none;
        `}
`;

const OptionStyled = styled.li`
    font-size: var(--text-sm);
`;

export const Select = ({
    options,
    label = 'Выберите регион',
    disabled,
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Wrapper>
            <Label>{label}</Label>
            <SelectStyled $disabled={disabled} onClick={handleToggle}>
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </SelectStyled>
            <OptionsWrapper isOpen={isOpen}>
                {mockOptions.map(({ region, id }) => {
                    return <OptionStyled key={id}>{region}</OptionStyled>;
                })}
            </OptionsWrapper>
        </Wrapper>
    );
};
