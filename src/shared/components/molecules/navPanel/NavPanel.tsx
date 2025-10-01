import { PATHS } from '@/app/paths/PATHS';
import { NavIcon } from '@/shared/components/atoms/navIcon/NavIcon';
import { BiObjectsHorizontalLeft } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styled from 'styled-components';

const pathArr = [
    {
        to: PATHS.regions,
        icon: <FaMapMarkerAlt />
    },
    {
        to: PATHS.home,
        icon: <CgProfile />
    },
    {
        to: PATHS.objects,
        icon: <BiObjectsHorizontalLeft />
    },
]

const NavPanelStyled = styled.div`
    margin-top: auto;
    width: 100%;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: var(--line-decor);
    }
`

export const NavPanel = () => {
    return (
        <NavPanelStyled>
            {pathArr.map(({icon, to}) => {
                return (
                    <NavIcon key={to} to={to}>
                        {icon}
                        Объекты
                    </NavIcon>
                )
            })}
        </NavPanelStyled>
    );
};