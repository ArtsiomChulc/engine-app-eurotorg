import { Select } from '@/shared/components/atoms/select/Select';
import { SelectionItem } from '@/shared/components/atoms/selectionItem/SelectionItem';
import { options } from '@/shared/components/molecules/registerForm/schemas/optionsData';
import { HandbookType } from '@/typesCommon/markets/types';
import styled from 'styled-components';

type HandBookProps = {
    items?: HandbookType[];
};

const HandBookContainer = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > div:first-child {
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
    }
`;

const ItemsWrapper = styled.div`
    width: 100%;
    :not(:last-child) {
        margin-bottom: 6px;
    }
`;

export const HandBook = ({ items }: HandBookProps) => {
    return (
        <HandBookContainer>
            <Select options={options} />
            <ItemsWrapper>
                {items &&
                    items.map(
                        ({
                            marketAddress,
                            marketNumber,
                        }) => {
                            return (
                                <SelectionItem
                                    key={marketNumber}
                                    marketAddress={marketAddress}
                                    to={marketNumber}
                                    marketNumber={marketNumber}
                                />
                            );
                        }
                    )}
            </ItemsWrapper>
        </HandBookContainer>
    );
};
