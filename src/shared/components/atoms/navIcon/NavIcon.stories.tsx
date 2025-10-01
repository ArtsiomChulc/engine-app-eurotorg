import { NavIcon } from '@/shared/components/atoms/navIcon/NavIcon';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';
import { BiObjectsHorizontalLeft } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaMapMarkerAlt } from 'react-icons/fa';

const meta = {
    component: NavIcon,
    title: 'UI/NavProfile',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        isPriming: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        active: {
            control: 'boolean'
        },
        onClick: { action: 'clicked' },
    },
    decorators: [
        Story => (
            <div style={{ minWidth: '100%' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof NavIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeIconProfile: Story = {
    args: {
        size: 'lg',
        children: (
            <>
                <CgProfile />
                Профиль
            </>
        ),
    },
};

export const IconProfileMd: Story = {
    args: {
        size: 'md',
        children: (
            <>
                <BiObjectsHorizontalLeft />
                Объекты
            </>
        ),
    },
};

export const IconProfileSm: Story = {
    args: {
        size: 'sm',
        children: (
            <>
                <FaMapMarkerAlt />
                Объекты
            </>
        ),
    },
};

export const IconProfilePrime: Story = {
    args: {
        size: 'sm',
        isPriming: true,
        children: (
            <>
                <FaMapMarkerAlt />
                Объекты
            </>
        ),
    },
};

export const IconProfileDisabled: Story = {
    args: {
        size: 'sm',
        isPriming: true,
        disabled: true,
        children: (
            <>
                <FaMapMarkerAlt />
                Объекты
            </>
        ),
    },
};

export const IconProfileActive: Story = {
    args: {
        size: 'sm',
        active: true,
        children: (
            <>
                <FaMapMarkerAlt />
                Объекты
            </>
        ),
    },
};

export const IconProfileActivePrime: Story = {
    args: {
        size: 'sm',
        isPriming: true,
        active: true,
        children: (
            <>
                <FaMapMarkerAlt />
                Объекты
            </>
        ),
    },
};
