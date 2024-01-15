import {CategoryActionTypes, ICategoryActionTypes, ICategoryItem} from "../types/CategoryTypes.tsx";

const initialState = {
    '0': {
        name: 'Available',
        dailySpent: 0.0,
        periodSpent: 0.0,
        monthlySpent: 0.0,
        available: 150.00,
        allocated: 300.00,
        icon: 'attach-money',
        frequency: 'available',
        budget: 100.00
    },
    '261d9e85-4a69-446e-aef6-3ce9df240190': {
        name: 'category test 1',
        dailySpent: 0.0,
        periodSpent: 0.0,
        monthlySpent: 0.0,
        available: 150.00,
        allocated: 300.00,
        icon: 'cake',
        frequency: 'weekly',
        budget: 100.00
    },
    '7f405121-adf5-4479-a3cb-f97b85a514e9': {

        name: 'category test 2',
        dailySpent: 0.0,
        periodSpent: 0.0,
        monthlySpent: 0.0,
        available: 300.00,
        allocated: 300.00,
        icon: 'mood',
        frequency: 'monthly',
        budget: 300.00
    },
    'a15339ab-4d99-4d63-ad58-26e57379beb5': {

        name: 'category test 3',
        dailySpent: 0.0,
        periodSpent: 0.0,
        monthlySpent: 0.0,
        available: 100.00,
        allocated: 300.00,
        icon: 'yard',
        frequency: 'daily',
        budget: 5.00
    },
    'a15339ab-4d99-4d63-ad58-26e573792eb5': {
        name: 'category test 4',
        dailySpent: 0.0,
        periodSpent: 0.0,
        monthlySpent: 0.0,
        available: 210.0,
        allocated: 300.00,
        icon: 'person',
        frequency: 'daily',
        budget: 10.00
    },
};

export function categoryReducer(state: ICategoryItem = initialState, action: ICategoryActionTypes)
{
    switch (action.type)
    {
        case CategoryActionTypes.ADD_CATEGORY:
            return {
                ...state,
                [action.categoryID]: {
                    ...action
                }
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
                }
            };
        case CategoryActionTypes.ALLOCATE_MONEY_TO_CATEGORY:
            return {
                ...state,
                [action.categoryID]: {
                    ...state[action.categoryID],
                    available: state[action.categoryID].available + action.amount,
                    allocated: state[action.categoryID].allocated + action.amount,
                }
            }
        case CategoryActionTypes.UPDATE_CATEGORIES:
            return {
                ...state,
                ...action.categories
            }
        default:
            return state;
    }
}
