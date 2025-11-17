import { PATHS } from '@/app/paths/PATHS';
import { AdminPage } from '@/pages/adminPage/AdminPage';
import { MainPage } from '@/pages/mainPage/MainPage';
import { MarketsPage } from '@/pages/marketsPage/MarketsPage';
import { UserProfile } from '@/pages/userProfile/UserProfile';
import { RolesType } from '@/typesCommon/authTypes';
import { ReactNode } from 'react';

interface IProtectedRoutes {
    path: string;
    element: ReactNode;
    role: RolesType;
}

export const protectedRoutes: IProtectedRoutes[] = [
    {
        path: PATHS.home,
        element: <MainPage />,
        role: null,
    },
    {
        path: PATHS.markets,
        element: <MarketsPage />,
        role: null,
    },
    {
        path: `${PATHS.profile}/admin`,
        element: <AdminPage />,
        role: 'ADMIN',
    },
    {
        path: PATHS.profile,
        element: <UserProfile />,
        role: null,
    },
];
