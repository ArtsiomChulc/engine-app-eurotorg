import { NavIcon } from '@/shared/components/atoms/navIcon/NavIcon';
import { pathArr } from '@/shared/components/molecules/navPanel/schemas';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
import styled from 'styled-components';

const NavPanelStyled = styled.div`
    margin-top: auto;
    width: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    align-self: flex-end;
    background: var(--bg-secondary);

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: var(--bg-sidebar);
    }
`;

export const NavPanel = () => {
    const { width } = useWindowSize();

    const getSizeIcon = () => {
        if (width <= 576) {
            return 'sm'
        } else if (width <= 768) {
            return 'md'
        }
        return 'lg';
    };

    return (
        <NavPanelStyled>
            {pathArr.map(({ icon, to, title }) => {
                return (
                    <NavIcon key={to} to={to} size={getSizeIcon()}>
                        {icon}
                        <span>{title}</span>
                    </NavIcon>
                );
            })}
        </NavPanelStyled>
    );
};
