import { Layout } from '@/app/layout/Layout';
import { HandBook } from '@/shared/components/molecules/handBook/HandBook';
import { HandbookType } from '@/typesCommon/markets/types';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';

const mockData: HandbookType[] = [
    {
        id: '1',
        marketAddress: 'Орша, ул. Хренулица, 38',
        marketNumber: '444',
    },
    {
        id: '2',
        marketAddress: 'Орша, ул. Хренулица, 38',
        marketNumber: '555',
    },
    {
        id: '3',
        marketAddress: 'Орша, ул. Хренулица, 38',
        marketNumber: '222',
    },
];

const meta = {
    component: HandBook,
    title: 'UI/HandBook',
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        Story => (
            <div
                style={{
                    minWidth: '100%',
                    height: '100%',
                    background: 'var(--bg-primary)',
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
} satisfies Meta<typeof HandBook>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HandBookStory: Story = {
    args: {
        items: mockData,
    },
};