import { MainPage } from '@/pages/mainPage/MainPage';
import {
    NavPanel
} from '@/shared/components/molecules/navPanel/NavPanel';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../index.css';
import { BrowserRouter } from 'react-router';

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
            <BrowserRouter>
                <div
                    style={{
                        minWidth: '100%',
                        height: '100%',
                        background: 'var(--bg-secondary)',
                        margin: '0 auto',
                        padding: 10,
                    }}
                >
                    <Story />
                    <NavPanel/>
                </div>
            </BrowserRouter>
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
