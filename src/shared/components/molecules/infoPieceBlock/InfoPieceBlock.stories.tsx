import { Layout } from '@/app/layout/Layout';
import {
    MarketDetailsType,
    HeatingType,
    SewerageType, WaterSupply,
} from '@/typesCommon/markets/types';
import { InfoPieceBlock } from '@/shared/components/molecules/infoPieceBlock/InfoPieceBlock';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';
import { action } from 'storybook/actions';

const mockData: MarketDetailsType = {
    id: '101010',
    marketNumber: '803',
    meterNumber: [
        {
            id: '345',
            nomination: 'eee',
            number: '459595959',
        },
    ],
    heating: HeatingType.CENTRAL,
    installedCapacity: '200',
    waterSupply: WaterSupply.NO,
    sewerage: SewerageType.SEPTIC_TANK,
    existingCapacity: '140',
};

const meta = {
    component: InfoPieceBlock,
    title: 'UI/InfoPieceBlock',
    tags: ['autodocs'],
    argTypes: {
        edit: {
            control: 'boolean',
        },
    },
    decorators: [
        Story => (
            <div
                style={{
                    minWidth: '100%',
                    height: '100%',
                    background: 'var(--bg-secondary)',
                    margin: '0 auto',
                    padding: 10,
                }}
            >
                <Layout>
                    <Story />
                </Layout>
            </div>
        ),
    ],
} satisfies Meta<typeof InfoPieceBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoPieceBlockStory: Story = {
    args: {
        data: mockData,
        edit: false,
    },
};

export const InfoPieceBlockNoDataStory: Story = {
    args: {
        edit: false,
    },
};

export const InfoPieceBlockIsLoadingStory: Story = {
    args: {
        edit: false,
        isLoading: true,
    },
};

export const InfoPieceBlockEditStory: Story = {
    args: {
        data: mockData,
        edit: true,
        onSave: action('onSave called!'),
    },
};
