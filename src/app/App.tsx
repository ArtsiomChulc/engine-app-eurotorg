import '../App.css';
import { useRefreshMutation } from '@/api/auth-api';
import { ProtectedRouter } from '@/app/router/ProtectedRouter';
import { protectedRoutes } from '@/app/router/schemas/protectedRoutes';
import { AuthPage } from '@/pages/authPage/AuthPage';
import { Loader } from '@/shared/components/atoms/loader/Loader';
import { setInitialized, refreshTokens } from '@/store/slices/auth-slice';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';

function App() {
    const { initialized } = useSelector((state: RootState) => state.auth);
    const [refresh] = useRefreshMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        refresh()
            .unwrap()
            .then(data => {
                dispatch(refreshTokens(data));
            })
            .catch(() => {
                dispatch(setInitialized());
            });
    }, [dispatch, refresh]);

    const router = createBrowserRouter([
        ...protectedRoutes.map(route => ({
            path: route.path,
            element: <ProtectedRouter>{route.element}</ProtectedRouter>,
        })),
        {
            path: 'auth-page',
            element: <AuthPage />,
        },
        {
            path: '*',
            element: <div>not found</div>,
        },
    ]);

    if (!initialized) return <Loader />;

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
