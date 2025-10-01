import { PATHS } from '@/app/paths/PATHS';
import { BiObjectsHorizontalLeft } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const pathArr = [
    {
        to: PATHS.regions,
        icon: <FaMapMarkerAlt />,
        title: 'регионы'
    },
    {
        to: PATHS.objects,
        icon: <BiObjectsHorizontalLeft />,
        title: 'объекты'
    },
    {
        to: PATHS.home,
        icon: <CgProfile />,
        title: 'профиль'
    },
]