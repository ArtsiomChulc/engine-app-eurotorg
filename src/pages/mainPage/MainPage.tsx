import { manePageData } from '@/pages/mainPage/schemas/manePageData';
import { BlockInfo } from '@/shared/components/atoms/blockInfo/BlockInfo';
import { Text } from '@/shared/components/atoms/text/Text';
import { MainPageContainer } from '@/shared/components/organizms/mainPageContainer/MainPageContainer';

export const MainPage = () => {
    return (
        <>
            <Text variant={'h1'} size={'2xl'} weight={'bold'}>
                Главная
            </Text>
            <MainPageContainer>
                {manePageData.map(({ icon, to, title, description, id }) => {
                    return (
                        <BlockInfo
                            key={id}
                            to={to}
                            icon={icon}
                            title={title}
                            description={description}
                        />
                    );
                })}
            </MainPageContainer>
        </>
    );
};
