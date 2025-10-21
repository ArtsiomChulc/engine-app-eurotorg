import { Layout } from '@/app/layout/Layout';
import { Markets } from '@/pages/marketsPage/Markets';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../index.css';

const meta = {
    component: Markets,
    title: 'UI/Pages/Markets/MarketsPage',
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
} satisfies Meta<typeof Markets>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MarketsPageStory: Story = {
    args: {
        markets: [
            {
                marketName: '574',
                address: 'Орша, ул. Молокова',
                id: '123',
            },
            {
                marketName: '803',
                address: 'Орша, ул. 4-й пер. Чернышевского, 4',
                id: '124',
            },
            {
                marketName: '6072',
                address: 'Дубровно, ул. Почтовая, 4',
                id: '125',
            },
            {
                marketName: '6325',
                address: 'Толочин, ул. Энгельса, 79/2',
                id: '126',
            },
            {
                marketName: '6072',
                address: 'Дубровно, ул. Почтовая, 4',
                id: '127',
            },
            {
                marketName: '6072',
                address: 'Дубровно, ул. Почтовая, 4',
                id: '128',
            },
            {
                marketName: '6072',
                address: 'Дубровно, ул. Почтовая, 4',
                id: '129',
            },
            {
                marketName: '6072',
                address: 'Дубровно, ул. Почтовая, 4',
                id: '130',
            },
            {
                marketName: '6072',
                address: 'Дубровно, ул. Почтовая, 4',
                id: '131',
            },
            {
                marketName: '6072',
                address: 'Дубровно, ул. Почтовая, 4',
                id: '132',
            },
        ],
    },
    parameters: {
        layout: 'fullscreen',
    },
};
