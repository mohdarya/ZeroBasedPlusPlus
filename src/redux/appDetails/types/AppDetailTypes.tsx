export enum AppDetailActionTypes {
  SET_DAILY_BALANCE_JOB_TIME = 'SET_DAILY_BALANCE_JOB_TIME',
  SET_WEEKLY_BALANCE_JOB_TIME = 'SET_WEEKLY_BALANCE_JOB_TIME',
  SET_MONTHLY_BALANCE_JOB_TIME = 'SET_MONTHLY_BALANCE_JOB_TIME',
}

export interface ISetBalanceJobTime {
  type: AppDetailActionTypes;
  time: number;
}

export type IAppDetailActionTypes = ISetBalanceJobTime;
