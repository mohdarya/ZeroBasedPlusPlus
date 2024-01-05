import {combineReducers} from 'redux';
import {transactionReducer} from './transactions/reducer/transactionReducer.tsx';
import {balanceReducer} from './balance/reducer/balanceReducer.tsx';
import {ComponentCommunicationReducer} from './componentCommunication/reducer/componentCommunicationReducer.tsx';
import {categoryReducer} from './category/reducer/CategoryReducer.tsx';
import {AppDetailReducer} from "./appDetails/reducer/AppDetailsReducer.tsx";
import {StatisticsReducer} from "./statistics/reducer/StatisticsReducer.tsx";

const rootReducer = combineReducers({
  transactions: transactionReducer,
  balance: balanceReducer,
  communication: ComponentCommunicationReducer,
  categories: categoryReducer,
  appDetail: AppDetailReducer,
  statistics: StatisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
