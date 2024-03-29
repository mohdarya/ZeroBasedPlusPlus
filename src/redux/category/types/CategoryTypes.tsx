export enum CategoryActionTypes {
  ADD_CATEGORY = 'ADD_CATEGORY',
  CATEGORY_TRANSACTION_ACTION = 'CATEGORY_TRANSACTION_ACTION',
  CATEGORY_TRANSACTION_ACTION_OUT_OF_TIME_FRAME = 'CATEGORY_TRANSACTION_ACTION_OUT_OF_TIME_FRAME',
  ALLOCATE_MONEY_TO_CATEGORY = 'ALLOCATE_MONEY_TO_CATEGORY',
  UPDATE_CATEGORIES = 'UPDATE_CATEGORIES',
}
export interface ICategoryItemDetails {
  name: string;
  dailySpent: number;
  periodSpent: number;
  monthlySpent: number;
  available: number;
  periodAvailable: number;
  allocated: number;
  frequency: string;
  budget: number;
  icon: string;
}

export interface ICategoryItem {
  [key: string]: ICategoryItemDetails;
}
export interface IUpdateCategoryAction {
  categories: ICategoryItem;
  type: CategoryActionTypes;
}

export interface IAddCategory {
  type: CategoryActionTypes;
  name: string;
  dailySpent: number;
  periodSpent: number;
  monthlySpent: number;
  available: number;
  periodAvailable: number;
  allocated: number;
  frequency: string;
  categoryID: string;
  icon: string;
  budget: number;
}

export interface ICategoryTransactionAction {
  type: CategoryActionTypes;
  categoryID: string;
  amount: number;
}

export interface IAllocateMoneyToCategory {
  type: CategoryActionTypes;
  categoryID: string;
  amount: number;
}

export type ICategoryActionTypes = IAddCategory &
  ICategoryTransactionAction &
  IAllocateMoneyToCategory &
  IUpdateCategoryAction;
