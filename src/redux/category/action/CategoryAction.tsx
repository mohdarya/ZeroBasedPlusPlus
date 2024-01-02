import {
  CategoryActionTypes,
  IAddCategory, IAllocateMoney, IAllocateMoneyToCategory,
  ICategoryItemDetails,
  ICategoryTransactionAction
} from "../types/CategoryTypes.tsx";


export function addCategory(payload : IAddCategory) {
  return {

    ...payload,
    type: CategoryActionTypes.ADD_CATEGORY,
  };
}

export function categoryTransactionAction(payload : ICategoryTransactionAction) {
  return {

    ...payload,
    type: CategoryActionTypes.CATEGORY_TRANSACTION_ACTION,
  };
}
export function allocateMoneyToCategoryAction(payload : IAllocateMoneyToCategory) {
  return {

    ...payload,
    type: CategoryActionTypes.ALLOCATE_MONEY_TO_CATEGORY,
  };
}


