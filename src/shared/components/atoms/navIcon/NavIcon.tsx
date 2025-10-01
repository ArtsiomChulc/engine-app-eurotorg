import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type SizeNavIcon = 'lg' | 'md' | 'sm';

type StyledNavIconProps = {
    $isPriming: boolean;
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
    ${({$size}) => {
        switch ($size) {
            case 'lg':
                return css`
                    width: 80px;
                    padding: 14px;
                    font-size: var(--text-base);
                `
            case 'md': 
                return css`
                    width: 60px;
                    padding: 12px;
                    font-size: var(--text-sm);
                `
            case 'sm':
                return css`
                    width: 50px;
                    padding: 10px;
                    font-size: var(--text-xs);
                `
        }
    }}

        //isPriming
    ${({$isPriming}) => (
        $isPriming && css`
            background: var(--bg-secondary);
        `
    )}

        //disabled
    ${({$disabled}) => (
        $disabled && css`
            opacity: .6;
            cursor: not-allowed;
        `
    )}

        //active
    ${({$active}) => (
        $active && css`
            color: var(--primary-dark);
        `
    )}
`;

type NavProfileProps = {
    size?: SizeNavIcon;
    children: ReactNode;
    isPriming?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    active?: boolean
};

export const NavIcon = ({
    children,
    size = 'lg',
    onClick,
    isPriming = false,
    disabled = false,
    active = false
}: NavProfileProps) => {
    return (
        <NavIconStyled
            $disabled={disabled}
            $isPriming={isPriming}
            $active={active}
            onClick={onClick}
            $size={size}
        >
            {children}
        </NavIconStyled>
    );
};
