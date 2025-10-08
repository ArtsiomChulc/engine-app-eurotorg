import { Loader } from '@/shared/components/atoms/loader/Loader';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';

const meta = {
    component: Loader,
    title: 'UI/Loader',
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        Story => (
            <div style={{ width: '100px', height: 100, margin: '10%' +
                    ' auto',  }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderStory: Story = {
    args: {},
};