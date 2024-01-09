export enum StatisticsActionTypes {
    ADD_DAILY_STATISTICS = 'ADD_DAILY_STATISTICS',
    ADD_WEEKLY_STATISTICS = 'ADD_WEEKLY_STATISTICS',
    ADD_MONTHLY_STATISTICS = 'ADD_MONTHLY_STATISTICS',
    ADD_TOTAL_STATISTICS = 'ADD_TOTAL_STATISTICS',
    ADD_CATEGORY_STATISTICS = 'ADD_CATEGORY_STATISTICS',

}



export interface IStatisticsItem {
    value: number,
    timestamp: number
}


export interface ICategoryStatisticsItem {
    available: IStatisticsItem[],
    allocated: IStatisticsItem[],
    spent: IStatisticsItem[],
}

export interface IAddCategoryStatisticsItem {
    available: IStatisticsItem,
    allocated: IStatisticsItem,
    spent: IStatisticsItem,
}
export interface ICategoryStatistics {
    [key: string] : ICategoryStatisticsItem
}
export interface IStatisticsState {
    daily: IStatisticsItem[],
    weekly:IStatisticsItem [],
    monthly: IStatisticsItem[],
    total: IStatisticsItem[],
    categories: ICategoryStatistics,

}


export interface IAddStatistics {
    type: StatisticsActionTypes,
    value: number,
    timestamp: number

}

export interface IAddCategoryStatistics {
    type: StatisticsActionTypes,
    categoryId: string,
    data: IAddCategoryStatisticsItem,
}


export type IStatisticsActionTypes = IAddStatistics & IAddCategoryStatistics