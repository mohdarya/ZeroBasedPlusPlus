export enum CategoryActionTypes {
    ADD_CATEGORY = 'ADD_CATEGORY',
    CATEGORY_TRANSACTION_ACTION = 'CATEGORY_TRANSACTION_ACTION',
}
export interface ICategoryItemDetails {
    name: string,
    spentThisMonth: number,
    available: number,
    allocated: number,
    unallocated: number,
    frequency: string,
    budget: number,

}

export interface ICategoryItem {
    [key: string]: ICategoryItemDetails

}



export interface IAddCategory {
    type: CategoryActionTypes;
    name: string,
    spentThisMonth: number,
    available: number,
    allocated: number,
    unallocated: number,
    frequency: string,
    categoryID: string,
}

export interface ICategoryTransactionAction {
    type: CategoryActionTypes;
    categoryID: string,
    amount : number
}


export type ICategoryActionTypes = IAddCategory & ICategoryTransactionAction