export enum BalanceActionTypes {
    REDUCE_BALANCE = 'REDUCE_BALANCE',
}

export interface IAddTransaction {
    type: BalanceActionTypes;
    transactionAmount: number,
}


export interface IBalanceState {
    available: number,
    unallocated: number,
    allocated: number,
}


export type IBalanceActionTypes = IAddTransaction
