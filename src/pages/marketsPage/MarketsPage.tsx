import { useGetMarketsQuery } from '@/api/markets-api';
import { Markets } from '@/shared/components/organizms/markets/Markets';

export const MarketsPage = () => {
    const {data} = useGetMarketsQuery()
    return (
        <>
            <Markets markets={data} />
        </>
    );
};
