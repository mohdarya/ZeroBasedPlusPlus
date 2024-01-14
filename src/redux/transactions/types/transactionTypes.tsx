export enum TransactionActionTypes {
    ADD_TRANSACTION = 'ADD_TRANSACTION',
}

export enum TransactionTypes {
    DEBIT = 'DEBIT',
    CREDIT= 'CREDIT',
}

interface IAddTransaction {
    type: TransactionActionTypes.ADD_TRANSACTION;
    payee : string,
    amount: number,
    date: number,
    category: string,
    id: string,
    transactionType: TransactionTypes,
}


export type ITransactionActionTypes = IAddTransaction