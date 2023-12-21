import {CategoryActionTypes, IAddCategory, ICategoryItemDetails} from "../types/CategoryTypes.tsx";


export function addCategory(payload : IAddCategory) {
  return {

    ...payload,
    type: CategoryActionTypes.ADD_CATEGORY,
  };
}


