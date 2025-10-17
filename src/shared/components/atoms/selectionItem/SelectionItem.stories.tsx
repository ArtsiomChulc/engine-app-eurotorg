import { SelectionItem } from '@/shared/components/atoms/selectionItem/SelectionItem';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';
import { BrowserRouter } from 'react-router';

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
            <BrowserRouter>
                <div
                    style={{
                        width: '100vw',
                        height: '100vh',
                        padding: '20px',
                        background: 'var(--bg-secondary)',
                    }}
                >
                    <Story />
                </div>
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof SelectionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoPieceStory: Story = {
    args: {
        title: 'Магазин №494',
        address: 'Адрес магазина',
        to: 'to-item'
    },
};

export const InfoPieceWithoutAddressStory: Story = {
    args: {
        title: 'Оршанский район',
        to: 'to-item'
    },
};
