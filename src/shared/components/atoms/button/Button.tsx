import { Spinner } from '@/shared/components/atoms/spiner/Spinner';
import { ReactNode } from 'react';
import styled, { css, CSSObject } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'error' | 'user';
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
                    width: 200px;
                    font-size: var(--text-lg);
                `;
            case 'md':
                return css`
                    width: 160px;
                    font-size: var(--text-base);
                `;
            case 'sm':
                return css`
                    width: 130px;
                    font-size: var(--text-sm);
                `;
            default:
                return css`
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
            case 'user':
                return css`
                    background: var(--user-btn);
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
    isLoading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit';
    className?: string;
    styles?: CSSObject;
};

export const Button = ({
    children,
    type = 'button',
    className,
    onClick,
    disabled,
    isLoading = false,
    variant = 'primary',
    fullWidth = false,
    size = 'md',
    styles
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
            style={styles}
        >
            {!isLoading ? children : <Spinner />}
        </ButtonStyled>
    );
};
