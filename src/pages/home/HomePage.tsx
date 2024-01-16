import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import TransactionSection from './components/TransactionSection';
import Graph from './components/Graph.tsx';
import BottomBar from '../shared/components/BottomBar';
import BalanceInfo from './components/BalanceInfo';
import {connect} from 'react-redux';
import BottomSheet, {
  BottomSheetRefProps,
} from '../shared/components/bottomSheet';
import {RootState} from '../../redux/rootReducer.tsx';
import BottomSheetSelection from '../shared/containers/BottomSheetSelection.tsx';
import {useAppState} from '@react-native-community/hooks';
import {
  setDailyBalanceJobTime,
  setMonthlyBalanceJobTime,
  setWeeklyBalanceJobTime,
} from '../../redux/appDetails/actions/AppDetailActions.tsx';
import {
  AppDetailActionTypes,
  ISetBalanceJobTime,
} from '../../redux/appDetails/types/AppDetailTypes.tsx';
import {
  CategoryActionTypes,
  ICategoryItem,
  ICategoryTransactionAction,
  IUpdateCategoryAction,
} from '../../redux/category/types/CategoryTypes.tsx';
import {
  addCategoryStatistics,
  addDailyStatistics,
  addMonthlyStatistics,
  addTotalStatistics,
  addWeeklyStatistics,
} from '../../redux/statistics/action/StatisticsActions.tsx';
import {
  IAddCategoryStatistics,
  IAddCategoryStatisticsItem,
  IAddStatistics,
  StatisticsActionTypes,
} from '../../redux/statistics/types/StatisticsTypes.tsx';
import {
  categoryTransactionAction,
  updateCategoriesState,
} from '../../redux/category/action/CategoryAction.tsx';
import {IDeleteTransaction} from '../../redux/transactions/types/transactionTypes.tsx';
import {deleteTransaction} from '../../redux/transactions/action/TransactionsActions.tsx';
import {IAddTransaction} from '../../redux/balance/types/balanceTypes.tsx';
import {ITransactionStateType} from '../../redux/transactions/reducer/transactionReducer.tsx';
import {
  addBalance,
  addTransactionBalanceChange,
} from '../../redux/balance/actions/balanceActions.tsx';
import {
  clearData,
  IComponentCommunicationAction,
} from '../../redux/componentCommunication/action/ComponentCommunicationAction.tsx';
import TransactionEdit from '../shared/components/TransactionEdit.tsx';

interface IHomepageProp {
  dailyRemaining: number;
  weeklyRemaining: number;
  monthlyRemaining: number;

  dailyCategoriesDailySpent: number;
  weeklyCategoriesDailySpent: number;
  monthlyCategoriesDailySpent: number;

  lastDailyBalanceJob: number;
  lastWeeklyBalanceJob: number;
  lastMonthlyJob: number;

  setDailyBalanceJobTime: (data: ISetBalanceJobTime) => {};
  setWeeklyBalanceJobTime: (data: ISetBalanceJobTime) => {};
  setMonthlyBalanceJobTime: (data: ISetBalanceJobTime) => {};

  addDailyStatistics: (data: IAddStatistics) => {};
  addWeeklyStatistics: (data: IAddStatistics) => {};
  addMonthlyStatistics: (data: IAddStatistics) => {};
  addTotalStatistics: (data: IAddStatistics) => {};
  updateCategoriesState: (data: IUpdateCategoryAction) => {};
  addCategoryStatistics: (data: IAddCategoryStatistics) => {};

  deleteTransaction: (data: IDeleteTransaction) => {};

  categories: ICategoryItem;
  available: number;

  transactions: ITransactionStateType;

  clearData: (data: IComponentCommunicationAction) => {};
  reduceAvailable: (data: IAddTransaction) => {};
  addBalance: (data: IAddTransaction) => {};
  categoryTransactionAction: (data: ICategoryTransactionAction) => {};

  id: string;
  itemKey: string;
  amount: number;
}
function HomePage(props: IHomepageProp) {
  const ref = useRef<BottomSheetRefProps>(null);
  const transactionEditingRef = useRef<BottomSheetRefProps>(null);
  const appState = useAppState();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#E9EEEA',
      justifyContent: 'space-between',
    },
    graphView: {
      width: '100%',
      height: '35%',
    },
    spendingLimitBarView: {
      width: '100%',
      height: 176,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    transactionSectionView: {
      width: '100%',
      height: '40%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomBarView: {
      height: 65,
      marginBottom: '2%',
      width: '100%',
      bottom: 0,
      display: 'flex',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  useEffect(() => {
    let dateNow: Date = new Date();
    let date12Am: Date = new Date();
    let dateMonday: Date = new Date();
    let dateLastMonday: Date = new Date();
    let updated: boolean = false;
    let categories = props.categories;
    date12Am.setHours(0, 0, 0, 0);
    let target = 1;
    if (dateNow.getDay() !== 1) {
      dateMonday.setDate(
        dateNow.getDate() -
          (dateNow.getDay() == target
            ? 7
            : (dateNow.getDay() + (7 - target)) % 7),
      );
    }
    dateMonday.setHours(0, 0, 0, 0);

    dateLastMonday.setDate(
      dateNow.getDate() -
        (dateNow.getDay() == target
          ? 7
          : (dateNow.getDay() + (7 - target)) % 7),
    );
    dateLastMonday.setHours(0, 0, 0, 0);

    if (
      (dateNow.getTime() - props.lastDailyBalanceJob > 86400000 &&
        props.lastDailyBalanceJob !== 0) ||
      (dateNow.getTime() >= date12Am.getTime() &&
        props.lastDailyBalanceJob === 0)
    ) {
      Object.values(
        Object.fromEntries(
          Object.entries(categories).filter(
            ([key, value]) => value.frequency.toLowerCase() === 'daily',
          ),
        ),
      ).map((value, index) => {
        value.periodSpent = 0;
      });
      Object.values(
        Object.fromEntries(
          Object.entries(categories).filter(
            ([key, value]) => value.frequency.toLowerCase() === 'daily',
          ),
        ),
      ).map((value, index) => {
        value.budget <= value.available
          ? (value.periodAvailable = value.budget)
          : (value.periodAvailable = value.available);
      });
      const balanceVariable: ISetBalanceJobTime = {
        time: date12Am.getTime(),
        type: AppDetailActionTypes.SET_DAILY_BALANCE_JOB_TIME,
      };
      const dailyStatisticsVariable: IAddStatistics = {
        type: StatisticsActionTypes.ADD_DAILY_STATISTICS,
        value: props.dailyCategoriesDailySpent,
        timestamp: date12Am.getTime(),
      };

      const weeklyStatisticsVariable: IAddStatistics = {
        type: StatisticsActionTypes.ADD_WEEKLY_STATISTICS,
        value: props.weeklyCategoriesDailySpent,
        timestamp: date12Am.getTime(),
      };

      const totalStatisticsVariable: IAddStatistics = {
        type: StatisticsActionTypes.ADD_TOTAL_STATISTICS,
        value: props.available,
        timestamp: date12Am.getTime(),
      };

      const monthlyStatisticsVariable: IAddStatistics = {
        type: StatisticsActionTypes.ADD_MONTHLY_STATISTICS,
        value: props.monthlyCategoriesDailySpent,
        timestamp: date12Am.getTime(),
      };

      props.addMonthlyStatistics(monthlyStatisticsVariable);
      props.addWeeklyStatistics(weeklyStatisticsVariable);
      props.addDailyStatistics(dailyStatisticsVariable);
      props.addTotalStatistics(totalStatisticsVariable);

      props.setDailyBalanceJobTime(balanceVariable);
      Object.values(Object.fromEntries(Object.entries(categories))).map(
        (value, index) => {
          value.dailySpent = 0;
        },
      );
      updated = true;
    }
    if (
      (dateNow.getTime() - props.lastWeeklyBalanceJob > 604800000 &&
        props.lastWeeklyBalanceJob !== 0) ||
      (dateNow.getTime() - dateLastMonday.getTime() > 604800000 &&
        props.lastWeeklyBalanceJob === 0)
    ) {
      Object.values(
        Object.fromEntries(
          Object.entries(categories).filter(
            ([key, value]) => value.frequency.toLowerCase() === 'weekly',
          ),
        ),
      ).map((value, index) => {
        value.periodSpent = 0;
      });
      Object.values(
        Object.fromEntries(
          Object.entries(categories).filter(
            ([key, value]) => value.frequency.toLowerCase() === 'weekly',
          ),
        ),
      ).map((value, index) => {
        value.budget <= value.available
          ? (value.periodAvailable = value.budget)
          : (value.periodAvailable = value.available);
      });

      const balanceVariable: ISetBalanceJobTime = {
        time:
          dateNow.getDay() === 1 ? dateNow.getTime() : dateLastMonday.getTime(),
        type: AppDetailActionTypes.SET_WEEKLY_BALANCE_JOB_TIME,
      };

      props.setWeeklyBalanceJobTime(balanceVariable);

      updated = true;
    }
    if (
      (dateNow.getTime() - props.lastMonthlyJob >
        new Date(dateNow.getFullYear(), dateNow.getMonth(), 0).getDate() *
          86400000 &&
        props.lastMonthlyJob !== 0) ||
      (dateNow.getDate() >= 1 && props.lastMonthlyJob === 0)
    ) {
      Object.values(
        Object.fromEntries(
          Object.entries(categories).filter(
            ([key, value]) => value.frequency.toLowerCase() === 'monthly',
          ),
        ),
      ).map((value, index) => {
        value.periodSpent = 0;
      });
      Object.values(
        Object.fromEntries(
          Object.entries(categories).filter(
            ([key, value]) => value.frequency.toLowerCase() === 'monthly',
          ),
        ),
      ).map((value, index) => {
        value.budget <= value.available
          ? (value.periodAvailable = value.budget)
          : (value.periodAvailable = value.available);
      });
      const balanceVariable: ISetBalanceJobTime = {
        time: new Date(dateNow.getFullYear(), dateNow.getMonth(), 0).getTime(),
        type: AppDetailActionTypes.SET_MONTHLY_BALANCE_JOB_TIME,
      };
      Object.values(Object.fromEntries(Object.entries(categories))).map(
        (value, index) => {
          const categoryStatistics: IAddCategoryStatisticsItem = {
            allocated: {
              value: value.allocated,
              timestamp: new Date(
                dateNow.getFullYear(),
                dateNow.getMonth(),
                0,
              ).getTime(),
            },
            available: {
              value: value.available,
              timestamp: new Date(
                dateNow.getFullYear(),
                dateNow.getMonth(),
                0,
              ).getTime(),
            },
            spent: {
              value: value.monthlySpent,
              timestamp: new Date(
                dateNow.getFullYear(),
                dateNow.getMonth(),
                0,
              ).getTime(),
            },
          };
          const addCategoryStatistics: IAddCategoryStatistics = {
            categoryId: Object.keys(categories)[index],
            data: categoryStatistics,
            type: StatisticsActionTypes.ADD_CATEGORY_STATISTICS,
          };
          props.addCategoryStatistics(addCategoryStatistics);
        },
      );

      Object.values(Object.fromEntries(Object.entries(categories))).map(
        (value, index) => {
          value.allocated = 0;
        },
      );
      Object.values(Object.fromEntries(Object.entries(categories))).map(
        (value, index) => {
          value.monthlySpent = 0;
        },
      );
      props.setMonthlyBalanceJobTime(balanceVariable);
      updated = true;
    }

    if (updated) {
      const categoryActionVariable: IUpdateCategoryAction = {
        categories: categories,
        type: CategoryActionTypes.UPDATE_CATEGORIES,
      };
      props.updateCategoriesState(categoryActionVariable);
    }
  }, [appState]);

  return (
    <View style={styles.container}>
      <View style={styles.graphView}>
        <Graph graphName="Weekly Spending" />
      </View>
      <View style={styles.spendingLimitBarView}>
        <BalanceInfo
          balanceAmount={props.dailyRemaining}
          balanceText={'Daily Spent'}
        />
        <BalanceInfo
          balanceAmount={props.weeklyRemaining}
          balanceText={'Weekly Spent'}
        />
      </View>
      <View style={styles.transactionSectionView}>
        <TransactionSection transactionEditingRef={transactionEditingRef} />
      </View>
      <View style={styles.bottomBarView}>
        <BottomBar page={'HomePage'} bottomSheetRef={ref} />
      </View>
      <BottomSheet ref={ref}>
        <BottomSheetSelection bottomSheetRef={ref} />
      </BottomSheet>
      <BottomSheet ref={transactionEditingRef}>
        <TransactionEdit transactionEditingRef={transactionEditingRef} />
      </BottomSheet>
    </View>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    dailyRemaining: Object.values(
      Object.fromEntries(
        Object.entries(state.categories).filter(
          ([key, value]) => value.frequency.toLowerCase() === 'daily',
        ),
      ),
    ).reduce((accumulator, value) => {
      return accumulator + value.periodSpent;
    }, 0),
    weeklyRemaining: Object.values(
      Object.fromEntries(
        Object.entries(state.categories).filter(
          ([key, value]) => value.frequency.toLowerCase() === 'weekly',
        ),
      ),
    ).reduce((accumulator, value) => {
      return accumulator + value.periodSpent;
    }, 0),
    monthlyRemaining: Object.values(
      Object.fromEntries(
        Object.entries(state.categories).filter(
          ([key, value]) => value.frequency.toLowerCase() === 'monthly',
        ),
      ),
    ).reduce((accumulator, value) => {
      return accumulator + value.periodSpent;
    }, 0),
    dailyCategoriesDailySpent: Object.values(
      Object.fromEntries(
        Object.entries(state.categories).filter(
          ([key, value]) => value.frequency.toLowerCase() === 'daily',
        ),
      ),
    ).reduce((accumulator, value) => {
      return accumulator + value.dailySpent;
    }, 0),
    weeklyCategoriesDailySpent: Object.values(
      Object.fromEntries(
        Object.entries(state.categories).filter(
          ([key, value]) => value.frequency.toLowerCase() === 'weekly',
        ),
      ),
    ).reduce((accumulator, value) => {
      return accumulator + value.dailySpent;
    }, 0),
    monthlyCategoriesDailySpent: Object.values(
      Object.fromEntries(
        Object.entries(state.categories).filter(
          ([key, value]) => value.frequency.toLowerCase() === 'monthly',
        ),
      ),
    ).reduce((accumulator, value) => {
      return accumulator + value.dailySpent;
    }, 0),
    transactions: state.transactions,
    amount: state.communication.numeric,
    categories: state.categories,
    itemSelect: state.communication.itemSelected,
    itemKey: state.communication.itemKey,
    payee: state.communication.text,
    available: state.balance.available,
    lastDailyBalanceJob: state.appDetail.lastDailyBalanceJob,
    lastWeeklyBalanceJob: state.appDetail.lastWeeklyBalanceJob,
    lastMonthlyJob: state.appDetail.lastMonthlyJob,
    from: state.communication.from,
    to: state.communication.to,
    date: state.communication.date,
    id: state.communication.id,
    communication: state.communication,
    statistics: state.statistics,
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    setDailyBalanceJobTime: (data: ISetBalanceJobTime) =>
      dispatch(setDailyBalanceJobTime(data)),
    setWeeklyBalanceJobTime: (data: ISetBalanceJobTime) =>
      dispatch(setWeeklyBalanceJobTime(data)),
    setMonthlyBalanceJobTime: (data: ISetBalanceJobTime) =>
      dispatch(setMonthlyBalanceJobTime(data)),

    addDailyStatistics: (data: IAddStatistics) =>
      dispatch(addDailyStatistics(data)),
    addWeeklyStatistics: (data: IAddStatistics) =>
      dispatch(addWeeklyStatistics(data)),
    addMonthlyStatistics: (data: IAddStatistics) =>
      dispatch(addMonthlyStatistics(data)),
    addTotalStatistics: (data: IAddStatistics) =>
      dispatch(addTotalStatistics(data)),

    updateCategoriesState: (data: IUpdateCategoryAction) =>
      dispatch(updateCategoriesState(data)),
    addCategoryStatistics: (data: IAddCategoryStatistics) =>
      dispatch(addCategoryStatistics(data)),

    deleteTransaction: (data: IDeleteTransaction) =>
      dispatch(deleteTransaction(data)),

    clearData: (data: IComponentCommunicationAction) =>
      dispatch(clearData(data)),
    reduceAvailable: (data: IAddTransaction) =>
      dispatch(addTransactionBalanceChange(data)),
    addBalance: (data: IAddTransaction) => dispatch(addBalance(data)),
    categoryTransactionAction: (data: ICategoryTransactionAction) =>
      dispatch(categoryTransactionAction(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
