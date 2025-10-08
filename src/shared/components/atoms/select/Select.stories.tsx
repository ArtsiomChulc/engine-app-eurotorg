import {
    Select,
} from '@/shared/components/atoms/select/Select';
import {
    mockOptions
} from '@/shared/components/molecules/registerForm/RegisterForm';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';
import { IoIosArrowDown } from 'react-icons/io';

const meta = {
    component: Select,
    title: 'UI/Select',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
        },
    },
    decorators: [
        Story => (
            <div style={{ minWidth: '360px', width: '100%' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectStory: Story = {
    args: {
        options: mockOptions,
        icon: <IoIosArrowDown/>
    },
};

export const SelectDisabledStory: Story = {
    args: {
        options: mockOptions,
        disabled: true,
        icon: <IoIosArrowDown/>
    },
};