import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/core';

import BottomBar from '../shared/components/BottomBar.tsx';
import TopBar from './components/TopBar.tsx';
import React, {useRef} from 'react';
import {RootState} from '../../redux/rootReducer.tsx';
import {connect} from 'react-redux';
import {ICategoryItem} from '../../redux/category/reducer/CategoryReducer.tsx';
import TransactionSection from '../shared/components/TransactionSection.tsx';
import Graph from './components/Graph.tsx';
import {ICategoryStatistics} from '../../redux/statistics/types/StatisticsTypes.tsx';
import BottomSheet, {
  BottomSheetRefProps,
} from '../shared/components/bottomSheet.tsx';
import BottomSheetSelection from '../shared/containers/BottomSheetSelection.tsx';
import TransactionEdit from '../shared/components/TransactionEdit.tsx';
import CategoryEdit from '../shared/components/categoryEdit.tsx';

interface CategoryPageProps {
  categories: ICategoryItem;
  statistics: ICategoryStatistics;
}

function CategoryPage(props: CategoryPageProps) {
  const route = useRoute();
  const ref = useRef<BottomSheetRefProps>(null);
  const transactionEditingRef = useRef<BottomSheetRefProps>(null);
  const categoryEditingRef = useRef<BottomSheetRefProps>(null);
  // @ts-ignore
  const categoryID = route.params.categoryID;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#E9EEEA',
      justifyContent: 'space-around',
    },
    graphView: {
      width: '100%',
      height: '30%',
    },
    transactionSectionView: {
      width: '100%',
      height: '70%',
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
    pageDetailView: {
      height: '90%',
      display: 'flex',
      justifyContent: 'space-around',
    },
  });

  return (
    <View style={styles.container}>
      <TopBar
        categoryEditingRef={categoryEditingRef}
        categoryId={categoryID}
        categoryName={props.categories[categoryID].name}
        categoryFrequency={props.categories[categoryID].frequency}
      />

      <View style={styles.pageDetailView}>
        <View style={styles.graphView}>
          <Graph
            graphName="Weekly Spending"
            categoryData={props.categories[categoryID]}
            categoryID={categoryID}
            statistics={props.statistics}
          />
        </View>

        <View style={styles.transactionSectionView}>
          <TransactionSection
            renderMonths={true}
            filterCategory={true}
            categoryId={categoryID}
            transactionEditingRef={transactionEditingRef}
          />
        </View>
      </View>
      <View style={styles.bottomBarView}>
        <BottomBar page="CategoryPage" bottomSheetRef={ref} />
      </View>

      <BottomSheet ref={ref}>
        <BottomSheetSelection bottomSheetRef={ref} />
      </BottomSheet>
      <BottomSheet ref={transactionEditingRef}>
        <TransactionEdit transactionEditingRef={transactionEditingRef} />
      </BottomSheet>

      <BottomSheet ref={categoryEditingRef}>
        <CategoryEdit categoryEditingRef={categoryEditingRef} />
      </BottomSheet>
    </View>
  );
}
const mapStateToProps = (state: RootState) => {
  return {
    categories: state.categories,
    date: state.communication.date,
    statistics: state.statistics.categories,
    transactions: state.transactions,
    amount: state.communication.numeric,
    itemSelect: state.communication.itemSelected,
    itemKey: state.communication.itemKey,
    text: state.communication.text,
    frequency: state.appDetail.categoryFrequency,
    categoryIcons: state.appDetail.categoryIconList,
    categoryFrequency: state.appDetail.categoryFrequency,
    index: state.communication.index,
  };
};
export default connect(mapStateToProps)(CategoryPage);
