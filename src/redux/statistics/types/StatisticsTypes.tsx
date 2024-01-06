export enum StatisticsActionTypes {
    ADD_DAILY_STATISTICS = 'ADD_DAILY_STATISTICS',
    ADD_WEEKLY_STATISTICS = 'ADD_WEEKLY_STATISTICS',
    ADD_MONTHLY_STATISTICS = 'ADD_MONTHLY_STATISTICS',
    ADD_TOTAL_STATISTICS = 'ADD_TOTAL_STATISTICS',

}



export interface IStatisticsItem {
    value: number,
    timestamp: number
}

export interface IStatisticsState {
    daily: IStatisticsItem[],
    weekly:IStatisticsItem [],
    monthly: IStatisticsItem[],
    total: IStatisticsItem[]
}


export interface IAddStatistics {
    type: StatisticsActionTypes,
    value: number,
    timestamp: number

}


export type IStatisticsActionTypes = IAddStatistics