
import {BalanceActionTypes, IAddTransaction, IAllocateMoney} from "../types/balanceTypes.tsx";


export function addTransactionBalanceChange(payload : IAddTransaction) {
    return {

        ...payload,
        type: BalanceActionTypes.REDUCE_BALANCE,
    };
}export function addBalance(payload : IAddTransaction) {
    return {

        ...payload,
        type: BalanceActionTypes.ADD_BALANCE,
    };
}


export function allocateMoney(payload : IAllocateMoney) {
    return {

        ...payload,
        type: BalanceActionTypes.ALLOCATE_MONEY,
    };
}



