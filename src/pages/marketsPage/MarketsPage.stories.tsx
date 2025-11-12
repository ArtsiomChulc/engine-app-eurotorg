import { Layout } from '@/app/layout/Layout';
import { Markets } from '@/pages/marketsPage/Markets';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../index.css';

const mockData = [
    {
        marketNumber: '803',
        marketAddress: 'Орша, ул. 4-й пер. Чернышевского, 4',
    },
    {
        marketNumber: '6072',
        marketAddress: 'Дубровно, ул. Почтовая, 4',
    },
    {
        marketNumber: '6325',
        marketAddress: 'Толочин, ул. Энгельса, 79/2',
    },
    {
        marketNumber: '6072',
        marketAddress: 'Дубровно, ул. Почтовая, 4',
    },
    {
        marketNumber: '6072',
        marketAddress: 'Дубровно, ул. Почтовая, 4',
    },
    {
        marketNumber: '6072',
        marketAddress: 'Дубровно, ул. Почтовая, 4',
    },
    {
        marketNumber: '6072',
        marketAddress: 'Дубровно, ул. Почтовая, 4',
    },
    {
        marketNumber: '6072',
        marketAddress: 'Дубровно, ул. Почтовая, 4',
    },
    {
        marketNumber: '6072',
        marketAddress: 'Дубровно, ул. Почтовая, 4',
    },
];

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
        markets: mockData,
    },
    parameters: {
        layout: 'fullscreen',
    },
};
