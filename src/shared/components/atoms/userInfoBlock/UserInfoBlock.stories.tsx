import { UserInfoBlock } from '@/shared/components/atoms/userInfoBlock/UserInfoBlock';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';
import { RiRoadMapFill } from 'react-icons/ri';

const meta = {
    component: UserInfoBlock,
    title: 'UI/UserInfoBlock',
    tags: ['autodocs'],
    parameters: {},
    argTypes: {},
    decorators: [
        Story => (
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    padding: '15px',
                }}
            >
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof UserInfoBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserInfoBlockStory: Story = {
    args: {
        title: 'Регион',
        subtitle: 'Оршанский',
        icon: <RiRoadMapFill />
    },
};
