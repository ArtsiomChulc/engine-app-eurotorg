import {
    Skeleton
} from '@/shared/components/atoms/skeleton/Skeleton';
import { Text } from '@/shared/components/atoms/text/Text';
import styled from 'styled-components';

type PageTitleProps = {
    title: string;
    isLoading?: boolean;
}

const PageTitleContainer = styled.div`
    width: 100%;
    padding: 15px;
    background: var(--bg-primary);
`

export const PageTitle = ({title, isLoading}: PageTitleProps) => {
    return (
        <PageTitleContainer>
            {isLoading && <Skeleton/>}
            <Text variant={'h1'} size={'2xl'} weight={'bold'} isTitle>
                {title}
            </Text>
        </PageTitleContainer>
    );
};