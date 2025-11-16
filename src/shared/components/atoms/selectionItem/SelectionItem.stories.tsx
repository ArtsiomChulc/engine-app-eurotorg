import { SelectionItem } from '@/shared/components/atoms/selectionItem/SelectionItem';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';

const meta = {
    component: SelectionItem,
    title: 'UI/SelectionItem',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        background: 'var(--bg-secondary)',
    },
    argTypes: {},
    decorators: [
        Story => (
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    padding: '20px',
                    background: 'var(--bg-primary)',
                }}
            >
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof SelectionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectionItemStory: Story = {
    args: {
        marketNumber: '494',
        marketAddress: 'Адрес магазина',
        to: '/to-item',
    },
};
