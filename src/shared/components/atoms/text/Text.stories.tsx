import { Text } from '@/shared/components/atoms/text/Text';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';

const meta = {
    component: Text,
    title: 'UI/Typography/Text',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    decorators: [
        Story => (
            <div style={{ minWidth: 360, width: '100%' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text2xlStory: Story = {
    args: {
        variant: 'span',
        size: '2xl',
        color: 'primary',
        weight: 'bold',
        children: 'Text - choose variant, color and size',
    },
};
