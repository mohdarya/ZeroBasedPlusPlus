import {ITransactionActionTypes, TransactionActionTypes, TransactionTypes} from "../types/transactionTypes.tsx";
import {act} from "react-test-renderer";

const initialState: ITransactionStateType = {
    transactions: [
        {
            category: '261d9e85-4a69-446e-aef6-3ce9df240190',
            amount: 200,
            date: new Date().getTime(),
            payee: 'test',
            type: TransactionTypes.DEBIT
        },
        {

            category: '7f405121-adf5-4479-a3cb-f97b85a514e9',
            amount: 300,
            date: new Date().getTime(),
            payee: 'test',
            type: TransactionTypes.DEBIT
        },
        {

            category: 'a15339ab-4d99-4d63-ad58-26e57379beb5',
            amount: 400,
            date: new Date().getTime(),
            payee: 'test',
            type: TransactionTypes.DEBIT
        },
    ],
};


interface ITransactionItemType {
    payee: string,
    amount: number,
    date: number,
    category: string,
    type: TransactionTypes
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
                type: action.transactionType
            })
            return {
                ...state,
                transactions,
            };
        default:
            return state;
    }
}
