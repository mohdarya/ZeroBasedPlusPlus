import {CategoryActionTypes, ICategoryActionTypes, ICategoryItem} from "../types/CategoryTypes.tsx";

const initialState = {
    '261d9e85-4a69-446e-aef6-3ce9df240190': {
        type: '',
        name: 'category test 1',
        spentThisMonth: '600',
        available: '200',
        allocated: '200',
        unallocated: '0',
        frequency: 'weekly',
        budget: '0',
        categoryID: "261d9e85-4a69-446e-aef6-3ce9df240190",
    },
    '7f405121-adf5-4479-a3cb-f97b85a514e9': {
        type: '',
        name: 'category test 2',
        spentThisMonth: '700',
        available: '300',
        allocated: '300',
        unallocated: '0',
        frequency: 'monthly',
        budget: '0',
        categoryID: "7f405121-adf5-4479-a3cb-f97b85a514e9",
    },
    'a15339ab-4d99-4d63-ad58-26e57379beb5': {
        type: '',
        name: 'category test 3',
        spentThisMonth: '900',
        available: '300',
        allocated: '300',
        unallocated: '0',
        frequency: 'daily',
        budget: '0',
        categoryID: "a15339ab-4d99-4d63-ad58-26e57379beb5",
    },
};

export function categoryReducer(state: ICategoryItem = initialState, action: ICategoryActionTypes) {
    switch (action.type) {
        case CategoryActionTypes.ADD_CATEGORY:
            console.log(state)
            return {
                ...state,
                [action.categoryID]: {
                    ...action
                }
            }
        default:
            return state;
    }
}
