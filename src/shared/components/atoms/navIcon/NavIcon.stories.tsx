import { NavIcon } from '@/shared/components/atoms/navIcon/NavIcon';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';
import { BiObjectsHorizontalLeft } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BrowserRouter } from 'react-router';

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
            control: 'boolean',
        },
        onClick: { action: 'clicked' },
    },
    decorators: [
        Story => (
            <BrowserRouter>
                <div style={{ minWidth: '100%' }}>
                    <Story />
                </div>
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof NavIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeIconProfile: Story = {
    args: {
        size: 'lg',
        to: '/object',
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
        to: '/',
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
        to: '/',
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
        to: '/',
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
        to: '/',
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
        to: '/',
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
        to: '/',
        children: (
            <>
                <FaMapMarkerAlt />
                Объекты
            </>
        ),
    },
};
