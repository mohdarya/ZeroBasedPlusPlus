import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import TransactionSection from './components/TransactionSection';
import Graph from './components/Graph';
import BottomBar from '../shared/components/BottomBar';
import BalanceInfo from './components/BalanceInfo';
import {connect} from 'react-redux';
import BottomSheet, {BottomSheetRefProps} from '../shared/components/bottomSheet';
import {RootState} from "../../redux/rootReducer.tsx";
import BottomSheetSelection from "../shared/containers/BottomSheetSelection.tsx";
import {useAppState} from "@react-native-community/hooks";
import {setBalanceJobTime} from "../../redux/appDetails/actions/AppDetailActions.tsx";
import {AppDetailActionTypes, ISetBalanceJobTime} from "../../redux/appDetails/types/AppDetailTypes.tsx";


interface IHomepageProp {
  dailyRemaining: number,
  weeklyRemaining: number,
  lastBalanceJob: number,
  setBalanceJobTime: (data: ISetBalanceJobTime) => {},
}
function HomePage(props :IHomepageProp) {
  const ref = useRef<BottomSheetRefProps>(null);
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
      bottom:0,
      display: 'flex',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  useEffect(() => {
    if(appState === "active")
    {
      let dateNow : Date = new Date();
      let date12Am : Date = new Date();
      date12Am.setHours(0,0,0,0)

        if(dateNow.getTime() - props.lastBalanceJob  > 86400000 ||  date12Am.getTime() > props.lastBalanceJob )
        {

        }
        
    }
  }, [appState]);

  return (
    <View style={styles.container}>


      <View style={styles.graphView}>
        <Graph graphName="Weekly Spending" />
      </View>
      <View style={styles.spendingLimitBarView}>
        <BalanceInfo balanceAmount={props.dailyRemaining} balanceText={'Daily Spent'} />
        <BalanceInfo balanceAmount={props.weeklyRemaining} balanceText={'Weekly Spent'} />
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
    available: state.balance.available,
    lastBalanceJob: state.appDetail.lastBalanceJob
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    setBalanceJobTime: (data: ISetBalanceJobTime) => dispatch(setBalanceJobTime(data)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
