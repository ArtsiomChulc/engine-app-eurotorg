import {
    PageTitle
} from '@/shared/components/molecules/pageTtitle/PageTitle';
import { Admin } from '@/shared/components/organizms/admin/Admin';

export const AdminPage = () => {
    return (
        <div>
            <PageTitle title={'Admin'}/>
            <Admin/>
        </div>
    );
};