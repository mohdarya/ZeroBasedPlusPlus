import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {RootState} from '../../../redux/rootReducer.tsx';
import {connect} from 'react-redux';
import React from 'react';
import CategoryItem from './CategoryItem.tsx';
import {ICategoryItem} from '../../../redux/category/types/CategoryTypes.tsx';

interface TransactionListProps {
  categories: ICategoryItem;
  calculateAllocation: boolean;
  period: string;
  renderPeriod: boolean;
}

function CategoryList(props: TransactionListProps) {
  const navigation = useNavigation();

  function loadData() {
    let categoryArray = makeCategoryArray();
    return categoryArray.map((value, key) => (
      <TouchableOpacity
        key={key}
        onPress={() => {
          props.calculateAllocation
            ? // @ts-ignore
              navigation.navigate('AllocationAmountEntry', {
                categoryID: value.categoryID,
              })
            : // @ts-ignore
              navigation.navigate('CategoryPage', {
                categoryID: value.categoryID,
              });
        }}>
        <CategoryItem
          calculateAllocation={props.calculateAllocation}
          name={value.name}
          frequency={value.frequency}
          budget={value.budget}
          periodAvailable={value.periodAvailable}
          available={value.available}
          periodSpent={value.periodSpent}
          categoryIcon={value.icon}
        />
      </TouchableOpacity>
    ));
  }

  function makeCategoryArray() {
    let temp = [];
    for (let key in props.categories) {
      let tempItem = props.categories[key];
      tempItem = {
        ...tempItem,
        categoryID: key,
      };
      if (key !== '0' && !props.renderPeriod) {
        temp.push(tempItem);
      } else if (
        props.renderPeriod &&
        props.categories[key].frequency.toLowerCase() ===
          props.period.toLowerCase()
      ) {
        temp.push(tempItem);
      }
    }

    return temp;
  }

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'column',
      width: '90%',
      height: '100%',
      borderRadius: 15,
    },
    CategoryListScrollView: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.CategoryListScrollView}>
        {loadData()}
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    categories: state.categories,
  };
};
export default connect(mapStateToProps)(CategoryList);
