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
        available: state.available - action.transactionAmount,
      };
    case BalanceActionTypes.ADD_BALANCE:
      return {
        ...state,
        available: state.available + action.transactionAmount,
        unallocated: state.unallocated + action.transactionAmount,
      };
    case BalanceActionTypes.ALLOCATE_MONEY:
      return {
        ...state,
        unallocated: state.unallocated - action.allocationAmount,
      };
    default:
      return state;
  }
}
