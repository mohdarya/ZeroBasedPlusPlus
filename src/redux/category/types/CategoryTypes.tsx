export enum CategoryActionTypes {
    ADD_CATEGORY = 'ADD_CATEGORY',
}
export interface ICategoryItemDetails {

    type: string,
    name: string,
    spentThisMonth: string,
    available: string,
    allocated: string,
    unallocated: string,
    frequency: string,
    categoryID: string,
    budget: string,

}

export interface ICategoryItem {
    [key: string]: ICategoryItemDetails

}



export interface IAddCategory {
    type: CategoryActionTypes.ADD_CATEGORY;
    name: string,
    spentThisMonth: string,
    available: string,
    allocated: string,
    unallocated: string,
    frequency: string,
    categoryID: string,
}


export type ICategoryActionTypes = IAddCategory
