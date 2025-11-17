import { useGetMarketsQuery } from '@/api/markets-api';
import { Markets } from '@/shared/components/organizms/markets/Markets';

export const MarketsPage = () => {
    const {data, isLoading} = useGetMarketsQuery()
    return (
        <>
            <Markets markets={data} isLoading={isLoading} />
        </>
    );
};
