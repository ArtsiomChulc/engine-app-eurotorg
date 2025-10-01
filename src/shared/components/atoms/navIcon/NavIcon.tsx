import { ReactNode } from 'react';
import { NavLink } from 'react-router';
import styled, { css } from 'styled-components';

type SizeNavIcon = 'lg' | 'md' | 'sm';

type StyledNavIconProps = {
    $size: SizeNavIcon;
    $disabled?: boolean;
    $active?: boolean;
};

const NavIconStyled = styled.div<StyledNavIconProps>`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--text-secondary);
    border-radius: 8px;
    cursor: pointer;

    svg {
        display: block;
        font-size: ${({ $size }) => {
            switch ($size) {
                case 'lg':
                    return 'calc(26px + 4px)';
                case 'md':
                    return 'calc(22px + 4px)';
                case 'sm':
                    return 'calc(18px + 4px)';
            }
        }};
    }

    //size
    ${({ $size }) => {
        switch ($size) {
            case 'lg':
                return css`
                    padding: 14px;
                    font-size: var(--text-base);
                `;
            case 'md':
                return css`
                    padding: 12px;
                    font-size: var(--text-sm);
                `;
            case 'sm':
                return css`
                    padding: 10px;
                    font-size: var(--text-xs);
                `;
        }
    }} //disabled
    ${({ $disabled }) =>
        $disabled &&
        css`
            opacity: 0.6;
            cursor: not-allowed;
        `} //active
    ${({ $active }) =>
        $active &&
        css`
            color: var(--primary-dark);
            background: var(--bg-secondary);
        `}
`;

type NavProfileProps = {
    size?: SizeNavIcon;
    children: ReactNode;
    isPriming?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    active?: boolean;
    to: string;
};

export const NavIcon = ({
    children,
    size = 'lg',
    onClick,
    disabled = false,
    to,
}: NavProfileProps) => {
    return (
        <NavLink to={to}>
            {({ isActive }) => (
                <NavIconStyled
                    $disabled={disabled}
                    $active={isActive}
                    onClick={onClick}
                    $size={size}
                >
                    {children}
                </NavIconStyled>
            )}
        </NavLink>
    );
};
