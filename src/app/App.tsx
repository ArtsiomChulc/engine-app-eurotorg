import '../App.css';
import { Layout } from '@/app/layout/Layout';
import {
    HeatingType,
    SewerageType,
    WaterSupply,
} from '@/entities/markets/types';
import { AuthPage } from '@/pages/authPage/AuthPage';
import {
    MarketDetails
} from '@/pages/marketsPage/marketDetails/MarketDetails';

function App() {
    return (
        <Layout>
            {/*<AuthPage />*/}
            <MarketDetails details={{
                id: '123',
                marketNumber: '803',
                meterNumber: [
                    {
                        id: '1234',
                        nomination: 'электро',
                        number: '08798273r98273r98273r'
                    },
                    {
                        id: '12344445',
                        nomination: 'вода',
                        number: '0879ывсыв8273r98273asdw98273r'
                    },
                    {
                        id: '12344445ascasdc',
                        nomination: 'тепло',
                        number: '087982ывс73r98273asdw98273r'
                    },
                    {
                        id: '12344445qqqwwweerrr',
                        nomination: 'газ',
                        number: '08798273r9827фывс3asdw98273r'
                    }
                ],
                heating: HeatingType.ELECTRO,
                waterSupply: WaterSupply.NO,
                sewerage: SewerageType.CENTRAL,
                installedCapacity: '120',
                existingCapacity: '90'
            }
            }/>
        </Layout>
    );
}

export default App;
