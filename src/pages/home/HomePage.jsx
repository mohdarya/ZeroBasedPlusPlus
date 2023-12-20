import React from 'react';
import {StyleSheet, View} from 'react-native';
import TransactionSection from './components/TransactionSection';
import Graph from './components/Graph';
import TopBar from './components/TopBar';
import BottomBar from '../shared/components/BottomBar';
import BalanceInfo from './components/BalanceInfo';
import {connect} from 'react-redux';

function HomePage(props) {
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
        <BottomBar />
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    dailyRemaining: state.balance.dailyRemaining,
    weeklyRemaining: state.balance.weeklyRemaining,
    transactions: state.transactions
  };
};
export default connect(mapStateToProps)(HomePage);
