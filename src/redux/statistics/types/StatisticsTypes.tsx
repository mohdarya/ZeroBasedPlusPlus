export enum StatisticsActionTypes {
    ADD_DAILY_STATISTICS = 'ADD_DAILY_STATISTICS',

}


export interface IStatisticsItem {
    value: number,
    timestamp: number
}

export interface IStatisticsState {
    daily: IStatisticsItem[],
    weekly:IStatisticsItem [],
    monthly: IStatisticsItem[]
}


export interface IAddDailyStatistics {
    type: StatisticsActionTypes;

}


export type IStatisticsActionTypes = IAddDailyStatistics