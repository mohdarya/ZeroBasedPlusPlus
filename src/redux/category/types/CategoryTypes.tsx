export enum CategoryActionTypes {
    ADD_CATEGORY = 'ADD_CATEGORY',
}
export interface ICategoryItemDetails {

    type: string,
    name: string,
    spentThisMonth: number,
    available: number,
    allocated: number,
    unallocated: number,
    frequency: string,
    categoryID: string,
    budget: number,

}

export interface ICategoryItem {
    [key: string]: ICategoryItemDetails

}



export interface IAddCategory {
    type: CategoryActionTypes.ADD_CATEGORY;
    name: string,
    spentThisMonth: number,
    available: number,
    allocated: number,
    unallocated: number,
    frequency: string,
    categoryID: string,
}


export type ICategoryActionTypes = IAddCategory
