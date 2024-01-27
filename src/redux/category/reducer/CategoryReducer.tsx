import {
  CategoryActionTypes,
  ICategoryActionTypes,
  ICategoryItem,
} from '../types/CategoryTypes.tsx';
import {act} from 'react-test-renderer';

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
          dailySpent: Number(
            (state[action.categoryID].dailySpent + action.amount).toFixed(2),
          ),
          monthlySpent: Number(
            (state[action.categoryID].monthlySpent + action.amount).toFixed(2),
          ),
          periodSpent: Number(
            (state[action.categoryID].periodSpent + action.amount).toFixed(2),
          ),
          available: Number(
            (state[action.categoryID].available - action.amount).toFixed(2),
          ),
        },
      };
    case CategoryActionTypes.CATEGORY_TRANSACTION_ACTION_OUT_OF_TIME_FRAME:
      return {
        ...state,
        [action.categoryID]: {
          ...state[action.categoryID],
          available: Number(
            (state[action.categoryID].available - action.amount).toFixed(2),
          ),
        },
      };
    case CategoryActionTypes.ALLOCATE_MONEY_TO_CATEGORY:
      return {
        ...state,
        [action.categoryID]: {
          ...state[action.categoryID],
          available: Number(
            (state[action.categoryID].available + action.amount).toFixed(2),
          ),
          periodAvailable:
            action.amount >= state[action.categoryID].budget
              ? state[action.categoryID].budget
              : state[action.categoryID].periodAvailable <
                state[action.categoryID].budget
              ? state[action.categoryID].periodAvailable + action.amount
              : action.amount,
          allocated: Number(
            (state[action.categoryID].allocated + action.amount).toFixed(2),
          ),
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
