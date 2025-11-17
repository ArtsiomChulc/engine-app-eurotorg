import { useLogoutMutation } from '@/api/auth-api';
import { Button } from '@/shared/components/atoms/button/Button';
import { Text } from '@/shared/components/atoms/text/Text';
import {
    PageTitle
} from '@/shared/components/molecules/pageTtitle/PageTitle';
import { selectUser, logout } from '@/store/slices/auth-slice';
import { RootState } from '@/store/store';
import { UserRole } from '@/typesCommon/authTypes';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router';
import { LuLogOut } from 'react-icons/lu';
import styled from 'styled-components';

const UserProfileStyled = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
`;

const UserProfileHeader = styled.div`
    width: 100%;
    padding: 20px 15px;
    background: var(--bg-secondary);
`;

const UserInfoWrapper = styled.div`
    flex: 0 1 auto;
    margin-bottom: auto;
`;

export const UserProfile = () => {
    const [logoutReq] = useLogoutMutation();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    if (!user) return <div>No data</div>;

    const role = (role: string) => {
        if (role === UserRole.USER) return 'Пользователь';
        if (role === UserRole.ENGINEER) return 'Инженер-энергетик';
        if (role === UserRole.ADMIN) return 'Админ';
    };

    const logoutHandler = () => {
        logoutReq();
        dispatch(logout());
    };

    return (
        <UserProfileStyled>
            <PageTitle title={'Профиль'}/>
            <UserInfoWrapper>
                <Text variant={'h2'}>{user.name}</Text>
                <Text variant={'h2'}>{user.lastName}</Text>
                <Text variant={'h2'}>{user.email}</Text>
                <Text variant={'h2'}>{role(user.role)}</Text>
                {user.role === UserRole.ADMIN && (
                    <NavLink to={'admin'}>Админ</NavLink>
                )}
            </UserInfoWrapper>

            <Button variant={'primary'} size={'lg'} onClick={logoutHandler}>
                Log out <LuLogOut title={'logout'} />
            </Button>
        </UserProfileStyled>
    );
};
