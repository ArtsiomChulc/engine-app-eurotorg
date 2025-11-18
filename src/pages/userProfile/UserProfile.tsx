import { useLogoutMutation } from '@/api/auth-api';
import { Button } from '@/shared/components/atoms/button/Button';
import { Text } from '@/shared/components/atoms/text/Text';
import {
    UserInfoBlock
} from '@/shared/components/atoms/userInfoBlock/UserInfoBlock';
import {
    PageTitle
} from '@/shared/components/molecules/pageTtitle/PageTitle';
import { selectUser, logout } from '@/store/slices/auth-slice';
import { RootState } from '@/store/store';
import { UserRole } from '@/typesCommon/authTypes';
import { AiOutlineProfile } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';
import { RiRoadMapFill } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router';
import { LuLogOut } from 'react-icons/lu';
import styled from 'styled-components';

const UserProfileStyled = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
    
    > button {
        align-self: center;
    }
`;

const UserInfoWrapper = styled.div`
    flex: 1 1 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const UserProfile = () => {
    const [logoutReq] = useLogoutMutation();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    if (!user) return <div>No data</div>;

    const logoutHandler = () => {
        logoutReq();
        dispatch(logout());
    };

    return (
        <UserProfileStyled>
            <PageTitle title={'Профиль'}/>
            <UserInfoWrapper>
                <UserInfoBlock title={'Регион'} subtitle={user.region} icon={<RiRoadMapFill size={20} />} />
                <UserInfoBlock title={'Имя'} subtitle={user.name} icon={<AiOutlineProfile size={20} />} />
                <UserInfoBlock title={'Фамилия'} subtitle={user.lastName} icon={<AiOutlineProfile size={20} />} />
                <UserInfoBlock title={'Почта'} subtitle={user.email} icon={<MdAlternateEmail size={20} />} />
                {user.role === UserRole.ADMIN && (
                    <NavLink to={'admin'} style={{
                        border: '1px solid',
                        borderRadius: 8,
                        padding: '10px 15px',
                        cursor: 'pointer',
                        color: 'var(--text-light)',
                        background: 'var(--primary)'
                    }}>Админ</NavLink>
                )}
            </UserInfoWrapper>

            <Button variant={'primary'} size={'lg'} onClick={logoutHandler}>
                Log out <LuLogOut title={'logout'} />
            </Button>
        </UserProfileStyled>
    );
};
