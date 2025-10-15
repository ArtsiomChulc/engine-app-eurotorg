import { InfoPieceBlock } from '@/shared/components/molecules/infoPieceBlock/InfoPieceBlock';
import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../../../index.css';

const mockData = [
    {id: '1', title: 'Номер учета ЭЭ', text: '029229039393939393393939'},
    {id: '2', title: 'Отопление', text: 'центральное'},
    {id: '3', title: 'Водоснабжение', text: 'Да'},
    {id: '4', title: 'канализация', text: 'Да'},
    {id: '5', title: 'Установленная мощность', text: '35'},
    {id: '6', title: 'Существующая нагрузка', text: '20'}
]

const meta = {
    component: InfoPieceBlock,
    title: 'UI/InfoPieceBlock',
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
} satisfies Meta<typeof InfoPieceBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoPieceBlockStory: Story = {
    args: {
        data: mockData
    },
};

export const InfoPieceBlockNoDataStory: Story = {
    args: {
        data: []
    },
};

export const InfoPieceBlockIsLoadingStory: Story = {
    args: {
        data: [],
        isLoading: true,
    },
};
