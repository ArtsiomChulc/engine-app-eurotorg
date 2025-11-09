import { PATHS } from '@/app/paths/PATHS';
import { BiObjectsHorizontalLeft } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const pathArr = [
    {
        to: PATHS.home,
        icon: <FaMapMarkerAlt />,
        title: 'домашняя'
    },
    {
        to: PATHS.markets,
        icon: <BiObjectsHorizontalLeft />,
        title: 'объекты'
    },
    {
        to: PATHS.profile,
        icon: <CgProfile />,
        title: 'профиль'
    },
]