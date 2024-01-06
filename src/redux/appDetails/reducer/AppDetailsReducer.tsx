import {AppDetailActionTypes, IAppDetailActionTypes} from "../types/AppDetailTypes.tsx";
import {act} from "react-test-renderer";

interface IAppDetails {

    categoryFrequency: string[]
    lastDailyBalanceJob: number,
    lastWeeklyBalanceJob: number,
    lastMonthlyJob: number,





}


const initialState = {
    categoryFrequency: [
        'Daily',
        'Weekly',
        'Monthly',
        'No-Limit'
    ],
    lastDailyBalanceJob: 0,
    lastWeeklyBalanceJob: 0,
    lastMonthlyJob: 0,
};

export function AppDetailReducer(state: IAppDetails = initialState, action: IAppDetailActionTypes) {
    switch (action.type) {
        case AppDetailActionTypes.SET_DAILY_BALANCE_JOB_TIME:
            return {
                ...state,
                lastDailyBalanceJob: action.time,
            }
        case AppDetailActionTypes.SET_WEEKLY_BALANCE_JOB_TIME:
            return {
                ...state,
                lastWeeklyBalanceJob: action.time,
            }
        case AppDetailActionTypes.SET_MONTHLY_BALANCE_JOB_TIME:
            return {
                ...state,
                lastMonthlyJob: action.time,
            }
        default:
            return state;
    }
}
