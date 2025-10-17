import { AuthForm } from '@/shared/components/organizms/authForm/AuthForm';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../index.css';

const meta = {
    component: AuthForm,
    title: 'UI/Pages/AuthPage',
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
                    height: '100vh',
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
    args: {},
    parameters: {
        layout: 'fullscreen',
    },
};
