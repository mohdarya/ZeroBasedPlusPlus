import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import TransactionSection from './components/TransactionSection';
import Graph from './components/Graph';
import TopBar from './components/TopBar';
import BottomBar from '../shared/components/BottomBar';
import BalanceInfo from './components/BalanceInfo';
import {connect} from 'react-redux';
import BottomSheet, {BottomSheetRefProps} from '../shared/components/bottomSheet';
import {RootState} from "../../redux/rootReducer.tsx";
import {ICategoryItem} from "../../redux/category/types/CategoryTypes.tsx";
import CategoryCreationPage from "../categorycreation/CategoryCreationPage.tsx";
import BottomSheetSelection from "../shared/containers/BottomSheetSelection.tsx";


interface IHomepageProp {
  dailyRemaining: number,
  weeklyRemaining: number
}
function HomePage(props :IHomepageProp) {
  const ref = useRef<BottomSheetRefProps>(null);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#555B6E',
      justifyContent: 'space-between',
    },
    graphView: {
      width: '100%',
      height: '30%',
    },
    spendingLimitBarView: {
      width: '100%',
      height: '12%',
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
      height: 60,
      marginBottom: '5%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.spendingLimitBarView}>
        <BalanceInfo balanceAmount={props.dailyRemaining} balanceText={'Daily'} />
        <BalanceInfo balanceAmount={props.weeklyRemaining} balanceText={'Weekly'} />
      </View>
      <View style={styles.graphView}>
        <Graph graphName="Weekly Spending" />
      </View>

      <View style={styles.transactionSectionView}>
        <TransactionSection />
      </View>
      <View style={styles.bottomBarView}>
        <BottomBar  page={"HomePage"} bottomSheetRef={ref}/>
      </View>
      <BottomSheet ref={ref}>
        <BottomSheetSelection bottomSheetRef={ref}/>
      </BottomSheet>
    </View>
  );
}

const mapStateToProps = (state : RootState) => {


  return {
    dailyRemaining: Object.values(  Object.fromEntries(Object.entries(state.categories).filter( ([key, value]) => value.frequency ==='daily'))).reduce((accumulator, value) => {
      return accumulator + value.available;
    }, 0),
    weeklyRemaining: Object.values(  Object.fromEntries(Object.entries(state.categories).filter( ([key, value]) => value.frequency ==='weekly'))).reduce((accumulator, value) => {
      return accumulator + value.available;
    }, 0),
    transactions: state.transactions,
    amount: state.communication.numeric,
    categories: state.categories,
    itemSelect: state.communication.itemSelected,
    itemKey: state.communication.itemKey,
    payee: state.communication.text,
  };
};
export default connect(mapStateToProps)(HomePage);
