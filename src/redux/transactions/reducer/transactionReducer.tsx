import {ITransactionActionTypes, TransactionActionTypes} from "../types/transactionTypes.tsx";

const initialState: ITransactionStateType = {
    transactions: [
        {
            category: '261d9e85-4a69-446e-aef6-3ce9df240190',
            amount: 200,
            date: '12/27/2023',
            payee: 'test',
        },
        {

            category: '7f405121-adf5-4479-a3cb-f97b85a514e9',
            amount: 300,
            date: '12/27/2023',
            payee: 'test',
        },
        {

            category: 'a15339ab-4d99-4d63-ad58-26e57379beb5',
            amount: 400,
            date: '12/27/2023',
            payee: 'test',
        },
    ],
};


interface ITransactionItemType {
    payee: string,
    amount: number,
    date: string,
    category: string,
}


export interface ITransactionStateType {
    transactions: ITransactionItemType[]
}

export function transactionReducer(state: ITransactionStateType = initialState,
                                   action: ITransactionActionTypes) {
    switch (action.type) {
        case TransactionActionTypes.ADD_TRANSACTION:
            let transactions = [...state.transactions];
            transactions.push({
                payee: action.payee,
                category: action.category,
                amount: action.amount,
                date: action.date,
            })
            return {
                ...state,
                transactions,
            };
        default:
            return state;
    }
}
