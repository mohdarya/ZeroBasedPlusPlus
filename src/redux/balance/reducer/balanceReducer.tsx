import {BalanceActionTypes, IBalanceActionTypes, IBalanceState} from '../types/balanceTypes';
import {act} from "react-test-renderer";

const initialState = {
  available: 1000.0,
  unallocated: 0.0,
  allocated: 0.0,
};

export function balanceReducer(state: IBalanceState = initialState, action: IBalanceActionTypes) {
  switch (action.type) {
    case BalanceActionTypes.REDUCE_BALANCE:
      return {
        ...state,
        available :state.available - action.transactionAmount
      };
    default:
      return state;
  }
}
