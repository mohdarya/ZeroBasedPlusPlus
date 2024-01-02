import {AppDetailActionTypes, IAppDetailActionTypes} from "../types/AppDetailTypes.tsx";

interface IAppDetails {

    categoryFrequency: string[]
    lastBalanceJob: number,


}


const initialState = {
    categoryFrequency: [
        'Daily',
        'Weekly',
        'Monthly',
        'No-Limit'
    ],
    lastBalanceJob: 0
};

export function AppDetailReducer(state: IAppDetails = initialState, action: IAppDetailActionTypes) {
    switch (action.type) {
        case AppDetailActionTypes.SET_BALANCE_JOB_TIME:
            return {
                ...state,
                lastBalanceJob: action.time
            }
        default:
            return state;
    }
}
