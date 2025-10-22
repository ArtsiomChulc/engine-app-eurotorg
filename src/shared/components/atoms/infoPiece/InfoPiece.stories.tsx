import { Layout } from '@/app/layout/Layout';
import { InfoPiece } from '@/shared/components/atoms/infoPiece/InfoPiece';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';

const meta = {
    component: InfoPiece,
    title: 'UI/InfoPieceBlock/InfoPiece',
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        Story => (
            <Layout>
                <div style={{ minWidth: 360, width: '100%' }}>
                    <Story />
                </div>
            </Layout>
        ),
    ],
} satisfies Meta<typeof InfoPiece>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoPieceStory: Story = {
    args: {
        title: 'Отопление',
        text: 'Центральное',
    },
};

export const InfoPieceIsLoadingStory: Story = {
    args: {
        isLoading: true,
    },
};
