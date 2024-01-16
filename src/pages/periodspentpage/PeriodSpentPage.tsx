import {StyleSheet, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import BottomBar from '../shared/components/BottomBar.tsx';
import SpendingChart from './components/SpendingChart.tsx';
import CategoryList from '../shared/components/CategoryList.tsx';
import BottomSheet, {
  BottomSheetRefProps,
} from '../shared/components/bottomSheet.tsx';
import React, {useRef} from 'react';
import BottomSheetSelection from '../shared/containers/BottomSheetSelection.tsx';
import {RootState} from '../../redux/rootReducer.tsx';
import {connect} from 'react-redux';

function PeriodSpentPage() {
  const ref = useRef<BottomSheetRefProps>(null);
  const route = useRoute();
  // @ts-ignore
  const sourcePage = route.params.sourcePage;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      backgroundColor: '#E9EEEA',
      justifyContent: 'space-between',
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
    spendingInfoView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50%',
      width: '100%',
    },
    transactionListView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50%',
      width: '100%',
    },

    button: {
      height: 50,
      borderRadius: 25,
      aspectRatio: 1,
      backgroundColor: 'white',
      opacity: 0.6,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.spendingInfoView}>
        <SpendingChart period={sourcePage} />
      </View>
      <View style={styles.transactionListView}>
        <CategoryList renderPeriod={true} period={sourcePage} />
      </View>
      <View style={styles.bottomBarView}>
        <BottomBar bottomSheetRef={ref} page="CategoryListPage" />
      </View>
      <BottomSheet ref={ref}>
        <BottomSheetSelection bottomSheetRef={ref} />
      </BottomSheet>
    </View>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    amount: state.communication.numeric,
    categories: state.categories,
    itemSelect: state.communication.itemSelected,
    itemKey: state.communication.itemKey,
    payee: state.communication.text,
  };
};
export default connect(mapStateToProps)(PeriodSpentPage);
