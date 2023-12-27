
import {BalanceActionTypes, IAddTransaction} from "../types/balanceTypes.tsx";


export function addTransactionBalanceChange(payload : IAddTransaction) {
    return {

        ...payload,
        type: BalanceActionTypes.REDUCE_BALANCE,
    };
}


