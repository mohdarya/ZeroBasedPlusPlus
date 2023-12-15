enum ActionTypes {
    addTransaction = 'ADD_TRANSACTION',
}

interface IAddTransaction {
    type: ActionTypes.addTransaction;
    payee : string,
    amount: number,
    date: string,
    category: string,
}


type ITransactionActionTypes = IAddTransaction