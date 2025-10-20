import { Layout } from '@/app/layout/Layout';
import { MainPage } from '@/pages/mainPage/MainPage';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../index.css';

const meta = {
    component: MainPage,
    title: 'UI/Pages/MainPage',
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
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPageStory: Story = {
    args: {},
    parameters: {
        layout: 'fullscreen',
    },
};
