import { Button } from '@/shared/components/atoms/button/Button';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SlWrench } from "react-icons/sl";
import '../../../../index.css';

const meta = {
    component: Button,
    title: 'UI/Button',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'error'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        fullWidth: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        onClick: { action: 'clicked' },
    },
    decorators: [
        (Story) => (
            <div style={{minWidth: '100%'}}>
                <Story/>
            </div>
        )
    ]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Button',
        size: 'sm',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Button secondary',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        children: 'Button error',
        fullWidth: false,
    },
};

export const Small: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Small Button',

    },
};

export const MdBtn: Story = {
    args: {
        variant: 'secondary',
        size: 'md',
        children: 'Medium Button',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        children: 'Large Button',
    },
};

export const FullWidth: Story = {
    args: {
        fullWidth: true,
        children: 'Full Width Button',
    },
    parameters: {
        layout: 'fullscreen',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Disabled Button',
        type: 'button',
    },
};

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <SlWrench/>
                Button with Icon
            </>
        ),
    },
};
