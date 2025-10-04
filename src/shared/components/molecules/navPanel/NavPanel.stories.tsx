import { NavPanel } from '@/shared/components/molecules/navPanel/NavPanel';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';
import { BrowserRouter } from 'react-router';

const meta = {
    component: NavPanel,
    title: 'UI/NavPanel',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        isPriming: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        active: {
            control: 'boolean',
        },
        onClick: { action: 'clicked' },
    },
    decorators: [
        Story => (
            <BrowserRouter>
                <div
                    style={{
                        minWidth: '100%',
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'flex-end',
                    }}
                >
                    <Story />
                </div>
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof NavPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavPanelStory: Story = {
    args: {
        size: 'lg',
        to: '/object',
    },
    parameters: {
        layout: 'fullscreen',
    },
};
