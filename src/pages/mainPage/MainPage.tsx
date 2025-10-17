import { BlockInfo } from '@/shared/components/atoms/blockInfo/BlockInfo';
import { Text } from '@/shared/components/atoms/text/Text';
import { FaBook } from 'react-icons/fa';
import { GrWorkshop } from 'react-icons/gr';
import { TbEngineOff } from 'react-icons/tb';
import styled from 'styled-components';

const MainPageContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;    
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const MainPage = () => {
    return (
        <>
            <Text variant={'h1'} size={'2xl'} weight={'bold'}>
                Главная
            </Text>
            <MainPageContainer>
                <BlockInfo
                    to={'hand-book'}
                    title={'Справочник' + ' магазинов'}
                    description={
                        'Получите доступ к' +
                        ' контактной информации о всех магазинах.'
                    }
                    icon={<FaBook size={150} color={'var(--bg-primary)'} />}
                />
                <BlockInfo
                    to={'engine-contact'}
                    title={'Информация об инженерном отделе'}
                    description={'Ознакомьтесь с контактной информацией ОЭиРИС'}
                    icon={
                        <TbEngineOff size={150} color={'var(--bg-primary)'} />
                    }
                />
                <BlockInfo
                    to={'markets-info'}
                    title={'Информация о магазинах'}
                    description={'Просматривайте, редактируйте' +
                        ' информацию о магазинах (инженерные сети' +
                        ' и тд.'}
                    icon={
                        <GrWorkshop size={150} color={'var(--bg-primary)'} />
                    }
                />
            </MainPageContainer>
        </>
    );
};
