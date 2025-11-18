import { Text } from '@/shared/components/atoms/text/Text';
import { NavLink } from 'react-router';
import styled from 'styled-components';

const NotFoundStyled = styled.div`
    width: 100%;
    height: 100vh;
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:  10px;
`

const TitleNotFound = styled.div`
    padding: 20px 25px;
    background: var(--bg-secondary);
    text-align: center;
    margin-bottom: 50px;
    border-radius: 8px;
`

const NavButton = styled.div`
    color: var(--text-light);
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid var(--text-light);
    margin-top: 50px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    background: transparent;
    
    &:hover {
        background: var(--hover);
        color: var(--text-blue);
        border: 1px solid var(--text-blue);
    }
`

export const NotFound = () => {
    return (
        <NotFoundStyled>
            <TitleNotFound>
                <Text size={'2xl'} color={'blue'} variant={'h2'}>Ошибка - 404</Text>
            </TitleNotFound>
            <Text size={'base'} color={'light'} variant={'p'}>Произошла ошибка. Чтобы продолжить:</Text>
            <Text size={'base'} color={'light'} variant={'p'}>* Вернитесь на домашнюю страницу.</Text>
            <NavButton>
                <NavLink to={'/'}>Домой</NavLink>
            </NavButton>
        </NotFoundStyled>
    )
        ;
};