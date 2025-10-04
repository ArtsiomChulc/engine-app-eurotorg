import { TextField } from '@/shared/components/atoms/textField/TextField';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const meta = {
    component: TextField,
    title: 'UI/TextField',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            control: 'text'
        },
        disabled: {
            control: 'boolean',
        },
        error: {
            control: 'text'
        },
        fullWidth: {
            control: 'boolean'
        }
    },
    decorators: [
        Story => (
            <div style={{ minWidth: '100%', padding: 20 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextFieldStory: Story = {
    args: {
        placeholder: 'Placeholder',
        label: 'Name',
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export const TextFieldErrorStory: Story = {
    args: {
        placeholder: 'Placeholder',
        label: 'Name',
        error: 'error'
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export const TextFieldDisabledStory: Story = {
    args: {
        placeholder: 'Placeholder',
        label: 'Name',
        disabled: true
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export const TextFieldIconStory: Story = {
    args: {
        placeholder: 'Placeholder',
        label: 'Name',
        icon: <FaMapMarkerAlt />,
    },
};