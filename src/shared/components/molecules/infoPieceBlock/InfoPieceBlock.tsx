import {
    MarketDetailsType,
    HeatingType,
    SewerageType,
} from '@/entities/markets/types';
import { Button } from '@/shared/components/atoms/button/Button';
import { InfoPiece } from '@/shared/components/atoms/infoPiece/InfoPiece';
import { Skeleton } from '@/shared/components/atoms/skeleton/Skeleton';
import { Text } from '@/shared/components/atoms/text/Text';
import { useState, useEffect, FormEvent } from 'react';
import styled from 'styled-components';

type InfoPieceBlockProps = {
    data?: MarketDetailsType;
    isLoading?: boolean;
    edit?: boolean;
    onSave?: (updated: MarketDetailsType) => void;
};

const InfoPieceBlockStyled = styled.div<{ $loading: boolean }>`
    width: 100%;
    height: ${({ $loading }) => ($loading ? '300px' : 'auto')};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    button {
        margin-top: 20px;
    }
`;

const NoDataStyled = styled.h2`
    font-size: var(--text-2xl);
    color: var(--text-secondary);
`;

const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InfoPieceBlock = ({
    data,
    isLoading = false,
    edit = false,
    onSave,
}: InfoPieceBlockProps) => {
    const [formData, setFormData] = useState<MarketDetailsType>(
        data ?? ({} as MarketDetailsType)
    );

    useEffect(() => {
        if (data) setFormData(data);
    }, [data]);

    const handleChange = (field: keyof MarketDetailsType, value: string) => {
        setFormData(prev =>
            prev
                ? {
                      ...prev,
                      [field]: value,
                  }
                : prev
        );
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (onSave && formData) {
            onSave(formData);
        }
    };

    if (isLoading) {
        return (
            <InfoPieceBlockStyled $loading>
                <Skeleton isOverall />
                <Skeleton isOverall />
                <Skeleton isOverall />
                <Skeleton isOverall />
            </InfoPieceBlockStyled>
        );
    }

    if (!data || !formData) {
        return (
            <InfoPieceBlockStyled $loading={false}>
                <NoDataStyled>No data</NoDataStyled>
            </InfoPieceBlockStyled>
        );
    }

    const enumValuesHeat = Object.values(HeatingType);
    const enumValuesSewerage = Object.values(SewerageType);

    const getValuesOptions = (a: Array<HeatingType | SewerageType>) => {
        return a.map((value, index) => {
            return {
                item: value,
                id: `${index.toString()}asd${index.toString() + 1}`,
            };
        });
    };

    return (
        <InfoPieceBlockStyled $loading={false}>
            <FormContainer onSubmit={handleSubmit}>
                <InfoPiece
                    editable={edit}
                    title='Отопление'
                    text={formData.heating}
                    options={getValuesOptions(enumValuesHeat)}
                    onChange={v => handleChange('heating', v)}
                />
                <InfoPiece
                    title='Водоснабжение'
                    text={formData.waterSupply ? 'Есть' : 'Нет'}
                    editable={edit}
                    onChange={v => handleChange('waterSupply', v)}
                />
                <InfoPiece
                    title='Канализация'
                    text={formData.sewerage}
                    editable={edit}
                    options={getValuesOptions(enumValuesSewerage)}
                    onChange={v => handleChange('sewerage', v)}
                />
                <InfoPiece
                    title='Установленная мощность'
                    text={formData.installedCapacity}
                    editable={edit}
                    onChange={v => handleChange('installedCapacity', v)}
                />
                <InfoPiece
                    title='Существующая мощность'
                    text={formData.existingCapacity}
                    editable={edit}
                    onChange={v => handleChange('existingCapacity', v)}
                />

                {formData.meterNumber?.length > 0 && (
                    <>
                        <Text
                            size={'xl'}
                            color={'placeholder'}
                            variant={'h4'}
                            weight={'bold'}
                        >
                            Приборы учета:
                        </Text>
                        {formData.meterNumber.map((meter, index) => (
                            <InfoPiece
                                key={meter.id}
                                title={meter.nomination}
                                text={meter.number}
                                editable={edit}
                                onChange={v => {
                                    const updatedMeters = [
                                        ...formData.meterNumber,
                                    ];
                                    updatedMeters[index] = {
                                        ...meter,
                                        number: v,
                                    };
                                    setFormData(prev =>
                                        prev
                                            ? {
                                                  ...prev,
                                                  meterNumber: updatedMeters,
                                              }
                                            : prev
                                    );
                                }}
                            />
                        ))}
                    </>
                )}
                {edit && <Button type={'submit'}>Сохранить</Button>}
            </FormContainer>
        </InfoPieceBlockStyled>
    );
};
