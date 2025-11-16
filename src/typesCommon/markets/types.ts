export type MarketsType = HandbookType;

export type HandbookType = {
    marketNumber?: string,
    address?: string,
    operatingMode?: string,
    region?: string,
    directorId?: number | null,
    engineerId?: number | null,
};

export type HandbookDetailsType = {
    region?: string;
    marketNumber: string;
    marketAddress: string;
    responsible: string;
    phoneNumber: string;
    district: string;
    boss: string;
};

export enum HeatingType {
    ELECTRO = 'электро',
    CENTRAL = 'центральное',
    PEAT = 'ТТ',
    PELLET = 'пеллеты',
    GAS = 'газ',
    NO = 'нет',
}

export enum SewerageType {
    CENTRAL = 'центральная',
    SEPTIC_TANK = 'септик',
    NO = 'нет',
}

export enum WaterSupply {
    YES = 'да',
    NO = 'нет',
}

type MeterNumbers = {
    id: string;
    nomination: string;
    number: string;
};

export type MarketDetailsType = {
    id: string;
    marketNumber: string;
    meterNumber: Array<MeterNumbers>;
    heating: HeatingType;
    waterSupply: WaterSupply;
    sewerage: SewerageType;
    installedCapacity: string;
    existingCapacity: string;
};

export type InputsRegisterMarket = Omit<MarketDetailsType, 'id'>;
