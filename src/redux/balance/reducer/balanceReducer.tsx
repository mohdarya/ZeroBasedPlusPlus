import {
  BalanceActionTypes,
  IBalanceActionTypes,
  IBalanceState,
} from '../types/balanceTypes';

const initialState = {
  available: 0.0,
  unallocated: 0.0,
  allocated: 0.0,
};

export function balanceReducer(
  state: IBalanceState = initialState,
  action: IBalanceActionTypes,
) {
  switch (action.type) {
    case BalanceActionTypes.REDUCE_BALANCE:
      return {
        ...state,
        available: Number(
          (state.available - action.transactionAmount).toFixed(2),
        ),
      };
    case BalanceActionTypes.ADD_BALANCE:
      return {
        ...state,
        available: Number(
          (state.available + action.transactionAmount).toFixed(2),
        ),
        unallocated: Number(
          (state.unallocated + action.transactionAmount).toFixed(2),
        ),
      };
    case BalanceActionTypes.ALLOCATE_MONEY:
      return {
        ...state,
        unallocated: Number(
          (state.unallocated - action.allocationAmount).toFixed(2),
        ),
      };
    default:
      return state;
  }
}
