import { Layout } from '@/app/layout/Layout';
import { SewerageType, HeatingType } from '@/entities/markets/types';
import { RadioBtn } from '@/shared/components/atoms/radioBtn/RadioBtn';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';

const meta = {
    component: RadioBtn,
    title: 'UI/RadioBtn',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
    decorators: [
        Story => (
            <Layout>
                <div style={{ minWidth: 360, width: '100%' }}>
                    <Story />
                </div>
            </Layout>
        ),
    ],
} satisfies Meta<typeof RadioBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioBtnStory: Story = {
    args: {
        name: '',
        options: Object.keys(HeatingType),
        value: 'HeatingType',
        id: 'HeatingType',
    },
};

export const RadioBtnsStory: Story = {
    args: {
        name: '',
        options: Object.keys(SewerageType),
        value: 'SewerageType',
        id: 'SewerageType',
    },
};
