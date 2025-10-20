import { FaBook } from 'react-icons/fa';
import { GrWorkshop } from 'react-icons/gr';
import { TbEngineOff } from 'react-icons/tb';

export const manePageData = [
    {
        id: 1,
        to: 'hand-book',
        title: 'Справочник магазинов',
        description:
            'Получите доступ к' + ' контактной информации о всех магазинах.',
        icon: <FaBook size={150} color={'var(--bg-primary)'} />,
    },
    {
        id: 2,
        to: 'engine-contact',
        title: 'Информация об инженерном отделе',
        description: 'Ознакомьтесь с контактной информацией ОЭиРИС',
        icon: <TbEngineOff size={150} color={'var(--bg-primary)'} />,
    },
    {
        id: 3,
        to: 'markets-info',
        title: 'Информация о магазинах',
        description:
            'Просматривайте, редактируйте' +
            ' информацию о магазинах (инженерные сети' +
            ' и тд.',
        icon: <GrWorkshop size={150} color={'var(--bg-primary)'} />,
    },
];
