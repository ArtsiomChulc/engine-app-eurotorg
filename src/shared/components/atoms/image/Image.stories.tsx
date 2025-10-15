import { Image } from '@/shared/components/atoms/image/Image';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router';
import exampleImg from '@/assets/example.jpg'
import '../../../../index.css';

const meta = {
    component: Image,
    title: 'UI/Image',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    decorators: [
        Story => (
            <BrowserRouter>
                <div style={{ width: '100%' }}>
                    <Story />
                </div>
            </BrowserRouter>
        ),
    ],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageStory: Story = {
    args: {
        src: exampleImg,
    },
};

export const ImageIsLoadingStory: Story = {
    args: {
        isLoading: true,
    },
};