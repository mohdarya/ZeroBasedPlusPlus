export enum TransactionActionTypes {
    ADD_TRANSACTION = 'ADD_TRANSACTION',
}

interface IAddTransaction {
    type: TransactionActionTypes.ADD_TRANSACTION;
    payee : string,
    amount: number,
    date: string,
    category: string,
}


export type ITransactionActionTypes = IAddTransaction