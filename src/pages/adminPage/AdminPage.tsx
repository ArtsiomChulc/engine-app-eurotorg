import {
    useGetAdminDataUsersQuery,
    useGetAdminDataDirectorsQuery, useGetAdminDataEngineersQuery,
} from '@/api/admin-api';
import { Loader } from '@/shared/components/atoms/loader/Loader';
import { PageTitle } from '@/shared/components/molecules/pageTtitle/PageTitle';
import { Admin } from '@/shared/components/organizms/admin/Admin';

export const AdminPage = () => {
    const {data: userData, isLoading} = useGetAdminDataUsersQuery();
    const {data: directorsData} = useGetAdminDataDirectorsQuery();
    const {data: engineersData} = useGetAdminDataEngineersQuery();
    console.log('userData', userData);
    console.log('directorsData', directorsData);
    console.log('engineersData', engineersData);

    if (isLoading) return <Loader/>
    return (
        <div>
            <PageTitle title={'Admin'} />
            <Admin />
        </div>
    );
};
