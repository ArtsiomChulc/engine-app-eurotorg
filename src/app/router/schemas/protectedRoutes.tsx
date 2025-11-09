import { PATHS } from '@/app/paths/PATHS';
import {ReactNode} from "react";

interface IProtectedRoutes {
    path: string;
    element: ReactNode;
}

export const protectedRoutes: IProtectedRoutes[] = [
    {
        path: PATHS.home, element: <div>home</div>
    },
    {
        path: PATHS.markets, element: <div>markets</div>
    },
    {
        path: PATHS.profile, element: <div>profile</div>
    },
]