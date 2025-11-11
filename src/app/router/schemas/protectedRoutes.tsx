import { PATHS } from '@/app/paths/PATHS';
import { MainPage } from '@/pages/mainPage/MainPage';
import { Markets } from '@/pages/marketsPage/Markets';
import {ReactNode} from "react";

interface IProtectedRoutes {
    path: string;
    element: ReactNode;
}

export const protectedRoutes: IProtectedRoutes[] = [
    {
        path: PATHS.home, element: <MainPage/>
    },
    {
        path: PATHS.markets, element: <Markets/>
    },
    {
        path: PATHS.profile, element: <div>profile</div>
    },
]