import { AuthForm } from '@/shared/components/organizms/authForm/AuthForm';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';

const meta = {
    component: AuthForm,
    title: 'UI/AuthForm',
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
                    background: '#f6f7f8',
                    margin: '0 auto',
                    padding: 10,
                }}
            >
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof AuthForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AuthFormStory: Story = {
    args: {
        authMode: 'register',
    },
    parameters: {
        layout: 'fullscreen',
    },
};
