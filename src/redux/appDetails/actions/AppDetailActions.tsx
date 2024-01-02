import {AppDetailActionTypes, ISetBalanceJobTime} from "../types/AppDetailTypes.tsx";


export function setBalanceJobTime(payload : ISetBalanceJobTime) {
    return {

        ...payload,
        type: AppDetailActionTypes.SET_BALANCE_JOB_TIME,
    };
}
