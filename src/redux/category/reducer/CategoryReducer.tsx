import {CategoryActionTypes, ICategoryActionTypes, ICategoryItem} from "../types/CategoryTypes.tsx";

const initialState = {
    '261d9e85-4a69-446e-aef6-3ce9df240190': {
        name: 'category test 1',
        spent: 80.00,
        available: 300.00,
        allocated: 300.00,
        frequency: 'weekly',
        budget: 0
    },
    '7f405121-adf5-4479-a3cb-f97b85a514e9': {

        name: 'category test 2',
        spent: 50.00,
        available: 300.00,
        allocated: 300.00,
        frequency: 'monthly',
        budget: 0
    },
    'a15339ab-4d99-4d63-ad58-26e57379beb5': {

        name: 'category test 3',
        spent: 150.00,
        available: 300.00,
        allocated: 300.00,
        frequency: 'daily',
        budget: 0
    },
    'a15339ab-4d99-4d63-ad58-26e573792eb5': {
        name: 'category test 4',
        spent: 180.00,
        available: 300.00,
        allocated: 300.00,
        frequency: 'daily',
        budget: 0
    },
};

export function categoryReducer(state: ICategoryItem = initialState, action: ICategoryActionTypes) {
    switch (action.type) {
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
                    spent: state[action.categoryID].spent + action.amount,
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
            };
        default:
            return state;
    }
}
