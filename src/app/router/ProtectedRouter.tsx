import { Layout } from '@/app/layout/Layout';
import { Loader } from '@/shared/components/atoms/loader/Loader';
import { RootState } from '@/store/store';
import { PropsWithChildren, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';

export const ProtectedRouter = ({ children }: PropsWithChildren) => {
    const isAuth = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );
    const isLoading = useSelector((state: RootState) => state.auth.loading);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!isAuth && location.pathname !== '/auth-page') {
            navigate('/auth-page', { replace: true });
        } else if (isAuth && location.pathname === '/auth-page') {
            navigate('/', { replace: true });
        }
    }, [isAuth, isLoading, navigate, location.pathname]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <Layout>{children}</Layout>
        </>
    );
};
