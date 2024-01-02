export enum AppDetailActionTypes {
    SET_BALANCE_JOB_TIME = 'SET_BALANCE_JOB_TIME',
}

export interface ISetBalanceJobTime {
    type: AppDetailActionTypes,
    time: number,
}

export type IAppDetailActionTypes = ISetBalanceJobTime
