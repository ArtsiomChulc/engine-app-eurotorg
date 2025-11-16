import { useGetMarketsQuery } from '@/api/markets-api';
import { Markets } from '@/pages/marketsPage/Markets';

export const MarketsPage = () => {
    const {data} = useGetMarketsQuery()
    return (
        <>
            <Markets markets={data} />
        </>
    );
};
