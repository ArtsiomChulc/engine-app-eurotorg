import { Layout } from '@/app/layout/Layout';
import { Loader } from '@/shared/components/atoms/loader/Loader';
import { RootState } from '@/store/store';
import { PropsWithChildren, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';

type ProtectedRouteProps = PropsWithChildren & {
    requiredRole: 'ADMIN' | 'ENGINEER' | 'USER' | null;
};

export const ProtectedRouter = ({ children, requiredRole }: ProtectedRouteProps) => {
    const { isAuthenticated, loading, user } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!isAuthenticated && location.pathname !== '/auth-page') {
            navigate('/auth-page', { replace: true });
            return;
        }

        if (isAuthenticated && location.pathname === '/auth-page') {
            navigate('/', { replace: true });
            return;
        }

        if (requiredRole && user?.role !== requiredRole) {
            navigate('/not-authorized', { replace: true });
        }
    }, [isAuthenticated, loading, user, requiredRole, navigate, location.pathname]);

    if (loading) {
        return <Loader />;
    }

    return <Layout>{children}</Layout>;
};
