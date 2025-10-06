import { BlockForm } from '@/shared/components/atoms/blockForm/BlockForm';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';

const meta = {
    component: BlockForm,
    title: 'UI/BlockForm',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        authMode: {
            control: { type: 'select' },
            options: ['register', 'login'],
        },
    },
    decorators: [
        Story => (
            <div
                style={{
                    minWidth: '100%',
                    background: '#f6f7f8',
                    margin: '0 auto',
                    padding: 10,
                }}
            >
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof BlockForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlockFormRegisterStory: Story = {
    args: {
        authMode: 'register',
    },
    parameters: {
        layout: 'fullscreen',
    },
};

export const BlockFormLoginStory: Story = {
    args: {
        authMode: 'login',
    },
    parameters: {
        layout: 'fullscreen',
    },
};
