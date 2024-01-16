import {
  AppDetailActionTypes,
  ISetBalanceJobTime,
} from '../types/AppDetailTypes.tsx';

export function setDailyBalanceJobTime(payload: ISetBalanceJobTime) {
  return {
    ...payload,
    type: AppDetailActionTypes.SET_DAILY_BALANCE_JOB_TIME,
  };
}

export function setWeeklyBalanceJobTime(payload: ISetBalanceJobTime) {
  return {
    ...payload,
    type: AppDetailActionTypes.SET_WEEKLY_BALANCE_JOB_TIME,
  };
}

export function setMonthlyBalanceJobTime(payload: ISetBalanceJobTime) {
  return {
    ...payload,
    type: AppDetailActionTypes.SET_MONTHLY_BALANCE_JOB_TIME,
  };
}
