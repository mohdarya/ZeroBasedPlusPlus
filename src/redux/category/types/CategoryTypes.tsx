export enum CategoryActionTypes {
    ADD_CATEGORY = 'ADD_CATEGORY',
    CATEGORY_TRANSACTION_ACTION = 'CATEGORY_TRANSACTION_ACTION',
    ALLOCATE_MONEY_TO_CATEGORY = 'ALLOCATE_MONEY_TO_CATEGORY',
}
export interface ICategoryItemDetails {
    name: string,
    spent: number,
    available: number,
    allocated: number,
    frequency: string,
    budget: number,

}

export interface ICategoryItem {
    [key: string]: ICategoryItemDetails

}



export interface IAddCategory {
    type: CategoryActionTypes;
    name: string,
    spent: number,
    available: number,
    allocated: number,
    frequency: string,
    categoryID: string,
    budget: number,
}

export interface ICategoryTransactionAction {
    type: CategoryActionTypes;
    categoryID: string,
    amount : number
}


export interface IAllocateMoneyToCategory {
    type: CategoryActionTypes;
    categoryID: string,
    amount : number
}


export type ICategoryActionTypes = IAddCategory & ICategoryTransactionAction& IAllocateMoneyToCategory