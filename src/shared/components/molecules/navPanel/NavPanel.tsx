import { NavIcon } from '@/shared/components/atoms/navIcon/NavIcon';
import { pathArr } from '@/shared/components/molecules/navPanel/schemas';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
import styled from 'styled-components';

const NavPanelStyled = styled.div`
    margin-top: auto;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    align-self: flex-end;

    &:after {
        content: '';
        position: absolute;
        top: -5px;
        left: 0;
        width: 100%;
        height: 1px;
        background: var(--line-decor);
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
            {pathArr.map(({ icon, to }) => {
                return (
                    <NavIcon key={to} to={to} size={getSizeIcon()}>
                        {icon}
                        Объекты
                    </NavIcon>
                );
            })}
        </NavPanelStyled>
    );
};
