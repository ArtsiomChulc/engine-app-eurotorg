import { BlockInfo } from '@/shared/components/atoms/blockInfo/BlockInfo';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FaBook } from 'react-icons/fa';
import '../../../../index.css';
import { BrowserRouter } from 'react-router';

const meta = {
    component: BlockInfo,
    title: 'UI/BlockInfo',
    tags: ['autodocs'],
    parameters: {
      layout: 'centered'
    },
    argTypes: {},
    decorators: [
        Story => (
            <BrowserRouter>
                <div
                    style={{ width: '100%'}}
                >
                    <Story />
                </div>
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof BlockInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlockInfoStory: Story = {
    args: {
        to: '/markets',
        icon: <FaBook size={150} color={'var(--bg-primary)'}/>,
        title: 'Это заголовок блока',
        description: 'Это описание блока с информацией'
    },
};

export const BlockInfoIsLoadingStory: Story = {
    args: {
        isLoading: true,
    },
};