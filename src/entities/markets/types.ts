export type MarketsType = {
    marketName: string;
    address: string;
    id: string;
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


type MeterNumbers = {
    id: string;
    nomination: string;
    number: string;
};

export type MarketDetailsType = {
    id: string;
    meterNumber: Array<MeterNumbers>;
    heating: HeatingType;
    waterSupply: boolean;
    sewerage: SewerageType;
    installedCapacity: string;
    existingCapacity: string;
};
