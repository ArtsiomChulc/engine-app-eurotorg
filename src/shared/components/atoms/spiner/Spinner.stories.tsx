import { Spinner } from '@/shared/components/atoms/spiner/Spinner';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';

const meta = {
    component: Spinner,
    title: 'UI/Loader/Spinner',
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        Story => (
            <div
                style={{ width: '100px', height: 100, margin: '10%' + ' auto' }}
            >
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderStory: Story = {
    args: {},
};