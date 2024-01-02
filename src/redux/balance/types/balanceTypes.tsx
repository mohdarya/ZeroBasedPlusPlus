export enum BalanceActionTypes {
    REDUCE_BALANCE = 'REDUCE_BALANCE',
    ALLOCATE_MONEY = 'ALLOCATE_MONEY',
    ADD_BALANCE= "ADD_BALANCE",
}

export interface IAddTransaction {
    type: BalanceActionTypes;
    transactionAmount: number,
}

export interface IAllocateMoney {
    type: BalanceActionTypes;
    allocationAmount: number,
}


export interface IBalanceState {
    available: number,
    unallocated: number,
    allocated: number,
}


export type IBalanceActionTypes = IAddTransaction & IAllocateMoney
