import '../App.css';
import { ProtectedRouter } from '@/app/router/ProtectedRouter';
import { protectedRoutes } from '@/app/router/schemas/protectedRoutes';
import { AuthPage } from '@/pages/authPage/AuthPage';
import { Loader } from '@/shared/components/atoms/loader/Loader';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';

function App() {
    const appLoading = useSelector((state: RootState) => state.app.isLoading);

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

    return <>{appLoading ? <Loader /> : <RouterProvider router={router} />}</>;
}

export default App;
