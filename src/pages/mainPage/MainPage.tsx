import { manePageData } from '@/pages/mainPage/schemas/manePageData';
import { BlockInfo } from '@/shared/components/atoms/blockInfo/BlockInfo';
import { Text } from '@/shared/components/atoms/text/Text';
import {
    PageTitle
} from '@/shared/components/molecules/pageTtitle/PageTitle';
import { MainPageContainer } from '@/shared/components/organizms/mainPageContainer/MainPageContainer';

export const MainPage = () => {
    return (
        <>
            <PageTitle title={'Главная'}/>
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
