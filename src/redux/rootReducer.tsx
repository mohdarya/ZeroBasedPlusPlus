import {combineReducers} from 'redux';
import {transactionReducer} from './transactions/reducer/transactionReducer.tsx';
import {balanceReducer} from './balance/reducer/balanceReducer';
import {ComponentCommunicationReducer} from './componentCommunication/reducer/componentCommunicationReducer.tsx';
import {categoryReducer} from './category/reducer/CategoryReducer.tsx';
import {AppDetailReducer} from "./appDetails/reducer/AppDetailsReducer.tsx";

const rootReducer = combineReducers({
  transactions: transactionReducer,
  balance: balanceReducer,
  communication: ComponentCommunicationReducer,
  categories: categoryReducer,
  appDetail: AppDetailReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
