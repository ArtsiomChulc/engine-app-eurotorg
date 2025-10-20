import { Layout } from '@/app/layout/Layout';
import { Regions } from '@/pages/regions/Regions';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../index.css';

const meta = {
    component: Regions,
    title: 'UI/Pages/Regions',
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
} satisfies Meta<typeof Regions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegionsPageStory: Story = {
    args: {},
    parameters: {
        layout: 'fullscreen',
    },
};
