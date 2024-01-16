import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import BottomBar from '../shared/components/BottomBar.tsx';
import SpendingChart from './components/SpendingChart.tsx';
import BottomSheet, {
  BottomSheetRefProps,
} from '../shared/components/bottomSheet.tsx';
import React, {useRef, useState} from 'react';
import BottomSheetSelection from '../shared/containers/BottomSheetSelection.tsx';
import {RootState} from '../../redux/rootReducer.tsx';
import {connect} from 'react-redux';
import {ICategoryItem} from '../../redux/category/types/CategoryTypes.tsx';
import CategoryList from '../shared/components/CategoryList.tsx';

interface CategoryListPageProps {
  name: string;
  allocated: number;
  available: number;
  periodSpent: number;
  categories: ICategoryItem;
}

function CategoryListPage(props: CategoryListPageProps) {
  const navigation = useNavigation();
  const ref = useRef<BottomSheetRefProps>(null);

  const [graphData, setGraphData] = useState(
    Object.values(Object.fromEntries(Object.entries(props.categories)))
      .map((value, index) => {
        return {
          value: value.monthlySpent,
          name: value.name,
        };
      })
      .filter(value => value.name.toLowerCase() !== 'available'),
  );

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
    spendingGraphView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '40%',
      width: '100%',
    },
    categoryListView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60%',
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
      <View style={styles.spendingGraphView}>
        <SpendingChart data={graphData} />
      </View>
      <View style={styles.categoryListView}>
        <CategoryList enderPeriod={false} calculateAllocation={false} />
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
export default connect(mapStateToProps)(CategoryListPage);
