import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'error';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface StyledButtonProps {
    $variant: ButtonVariant;
    $size: ButtonSize;
    $fullWidth?: boolean;
    $disabled?: boolean;
}

const ButtonStyled = styled.button<StyledButtonProps>`
    padding: 10px;
    border: none;
    color: var(--text-light);

    //sizes
    ${({ $size }) => {
        switch ($size) {
            case 'lg':
                return css`
                    padding: 15px;
                    font-size: var(--text-lg);
                `;
            case 'md':
                return css`
                    padding: 12px;
                    font-size: var(--text-base);
                `;
            case 'sm':
                return css`
                    padding: 10px;
                    font-size: var(--text-sm);
                `;
            default:
                return css`
                    padding: 12px;
                    font-size: var(--text-base);
                `;
        }
    }} //variants
    ${({ $variant }) => {
        switch ($variant) {
            case 'primary':
                return css`
                    background: var(--primary);
                `;
            case 'secondary':
                return css`
                    background: var(--secondary);
                `;
            case 'error':
                return css`
                    background: var(--error);
                `;
            default:
                return css`
                    background: var(--primary);
                `;
        }
    }} //full width
    ${({ $fullWidth }) =>
        $fullWidth &&
        css`
            width: 100%;
        `} //disabled
    ${({ $disabled }) =>
        $disabled &&
        css`
            opacity: 0.6;
            cursor: not-allowed;
        `}
`;

type ButtonProps = {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit';
    className?: string;
};

export const Button = ({
    children,
    type = 'button',
    className,
    onClick,
    disabled,
    variant = 'primary',
    fullWidth = false,
    size = 'md',
}: ButtonProps) => {
    return (
        <ButtonStyled
            $size={size}
            $variant={variant}
            $disabled={disabled}
            $fullWidth={fullWidth}
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </ButtonStyled>
    );
};
