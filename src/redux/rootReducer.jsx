import {combineReducers} from 'redux';
import {transactionReducer} from './transactions/reducer/transactionReducer';
import {balanceReducer} from './balance/reducer/balanceReducer';
import {ComponentCommunicationReducer} from './componentCommunication/reducer/componentCommunicationReducer';
import {categoryReducer} from './category/reducer/CategoryReducer';

const rootReducer = combineReducers({
  transactions: transactionReducer,
  balance: balanceReducer,
  communication: ComponentCommunicationReducer,
  categories: categoryReducer,
});

export default rootReducer;
