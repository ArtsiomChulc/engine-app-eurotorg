import { PATHS } from '@/app/paths/PATHS';
import { MainPage } from '@/pages/mainPage/MainPage';
import { MarketsPage } from '@/pages/marketsPage/MarketsPage';
import { ReactNode } from 'react';

interface IProtectedRoutes {
    path: string;
    element: ReactNode;
}

export const protectedRoutes: IProtectedRoutes[] = [
    {
        path: PATHS.home,
        element: <MainPage />,
    },
    {
        path: PATHS.markets,
        element: <MarketsPage />,
    },
    {
        path: PATHS.profile,
        element: <div>profile</div>,
    },
];