import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type TextProps = {
    size?: '2xl' | 'xl' | 'lg' | 'base' | 'sm' | 'xs';
    color?: 'primary' | 'secondary' | 'light' | 'placeholder';
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
    weight?: 'normal' | 'medium' | 'bold';
    position?: 'left' | 'center' | 'right'
    children: ReactNode;
};

const TextStyled = styled.p<{
    $size: TextProps['size'];
    $color: TextProps['color'];
    $weight: TextProps['weight'];
    $position: TextProps['position'];
}>`
    ${({ $size }) => {
        switch ($size) {
            case '2xl':
                return css`
                    font-size: var(--text-2xl);
                `;
            case 'xl':
                return css`
                    font-size: var(--text-xl);
                `;
            case 'lg':
                return css`
                    font-size: var(--text-lg);
                `;
            case 'sm':
                return css`
                    font-size: var(--text-sm);
                `;
            case 'xs':
                return css`
                    font-size: var(--text-xs);
                `;
            default:
                return css`
                    font-size: var(--text-base);
                `;
        }
    }}

    ${({ $color }) => {
        switch ($color) {
            case 'secondary':
                return css`
                    color: var(--text-secondary);
                `;
            case 'light':
                return css`
                    color: var(--text-light);
                `;
            case 'placeholder':
                return css`
                    color: var(--text-placeholder);
                `;
            default:
                return css`
                    color: var(--text-primary);
                `;
        }
    }}

    ${({ $weight }) => {
        switch ($weight) {
            case 'medium':
                return css`
          font-weight: 500;
        `;
            case 'bold':
                return css`
          font-weight: 700;
        `;
            default:
                return css`
          font-weight: 400;
        `;
        }
    }}

    ${({ $position }) => {
        switch ($position) {
            case 'right':
                return css`
          text-align: right;
        `;
            case 'left':
                return css`
          text-align: left;
        `;
            default:
                return css`
          text-align: center;
        `;
        }
    }}
`;

export const Text = ({
    size = 'xl',
    color = 'primary',
    variant = 'p',
    weight = 'normal',
    position = 'center',
    children,
}: TextProps) => {
    return (
        <TextStyled as={variant} $size={size} $color={color} $weight={weight} $position={position}>
            {children}
        </TextStyled>
    );
};
