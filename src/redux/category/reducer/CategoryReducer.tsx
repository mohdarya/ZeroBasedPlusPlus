import {
  CategoryActionTypes,
  ICategoryActionTypes,
  ICategoryItem,
} from '../types/CategoryTypes.tsx';

const initialState = {
  '0': {
    name: 'Available',
    dailySpent: 0.0,
    periodSpent: 0.0,
    monthlySpent: 0.0,
    available: 150.0,
    periodAvailable: 100.0,
    allocated: 300.0,
    icon: 'attach-money',
    frequency: 'available',
    budget: 100.0,
  },
};

export function categoryReducer(
  state: ICategoryItem = initialState,
  action: ICategoryActionTypes,
) {
  switch (action.type) {
    case CategoryActionTypes.ADD_CATEGORY:
      return {
        ...state,
        [action.categoryID]: {
          ...action,
        },
      };
    case CategoryActionTypes.CATEGORY_TRANSACTION_ACTION:
      return {
        ...state,
        [action.categoryID]: {
          ...state[action.categoryID],
          dailySpent: state[action.categoryID].dailySpent + action.amount,
          monthlySpent: state[action.categoryID].monthlySpent + action.amount,
          periodSpent: state[action.categoryID].periodSpent + action.amount,
          available: state[action.categoryID].available - action.amount,
        },
      };
    case CategoryActionTypes.ALLOCATE_MONEY_TO_CATEGORY:
      return {
        ...state,
        [action.categoryID]: {
          ...state[action.categoryID],
          available: state[action.categoryID].available + action.amount,
          periodAvailable:
            action.amount >= state[action.categoryID].budget
              ? state[action.categoryID].budget
              : action.amount,
          allocated: state[action.categoryID].allocated + action.amount,
        },
      };
    case CategoryActionTypes.UPDATE_CATEGORIES:
      return {
        ...state,
        ...action.categories,
      };
    default:
      return state;
  }
}
