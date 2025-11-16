import { Layout } from '@/app/layout/Layout';
import {
    HeatingType,
    SewerageType,
    WaterSupply,
} from '@/typesCommon/markets/types';
import { MarketDetails } from '@/shared/components/organizms/markets/marketDetails/MarketDetails';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../../index.css';

const meta = {
    component: MarketDetails,
    title: 'UI/Pages/Markets/MarketsDetailsPage',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        Story => (
            <div
                style={{
                    minWidth: '100%',
                    height: '100%',
                    background: 'var(--bg-secondary)',
                    margin: '0 auto',
                    padding: 10,
                }}
            >
                <Layout>
                    <Story />
                </Layout>
            </div>
        ),
    ],
} satisfies Meta<typeof MarketDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MarketDetailsPageStory: Story = {
    args: {
        details: {
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
    },
    parameters: {
        layout: 'fullscreen',
    },
};
