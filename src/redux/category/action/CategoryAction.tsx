import {
  CategoryActionTypes,
  IAddCategory,
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


