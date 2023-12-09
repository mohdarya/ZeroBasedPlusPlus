import {act} from 'react-test-renderer';

const initialState = {
  transactions: [
    {
      name: 'test',
      category: 'test',
      amount: '200',
    },
    {
      name: 'test',
      category: 'test',
      amount: '300',
    },
    {
      name: 'test',
      category: 'test',
      amount: '400',
    },
  ],
};

export function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            name: action.payee,
            category: action.category,
            amount: action.amount,
            date: action.date,
          },
        ],
      };
    default:
      return state;
  }
}
