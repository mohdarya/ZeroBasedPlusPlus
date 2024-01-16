import React, {RefObject} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Buttons from './components/Buttons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/core';
import {RootState} from '../../redux/rootReducer.tsx';
import {connect} from 'react-redux';
import {
  IAllocateMoneyToCategory,
  ICategoryItem,
} from '../../redux/category/types/CategoryTypes.tsx';
import {allocateMoneyToCategoryAction} from '../../redux/category/action/CategoryAction.tsx';
import {BottomSheetRefProps} from '../shared/components/bottomSheet.tsx';
import CategoryItem from '../shared/components/CategoryItem.tsx';

interface TransferPageProp {
  amount: number;
  itemKey: string;
  categories: ICategoryItem;
  from: string;
  to: string;
  allocateMoneyToCategoryAction: (data: IAllocateMoneyToCategory) => {};
  bottomSheetRef: RefObject<BottomSheetRefProps>;
}

function TransferPage(props: TransferPageProp) {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      borderRadius: 25,
      marginBottom: 100,
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      backgroundColor: '#E9EEEA',
      justifyContent: 'space-between',
    },
    bottomBarView: {
      height: 60,
      marginBottom: '5%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    spendingInfoView: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 30,
      height: '65%',
      width: '100%',
    },
    transactionListView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '10%',
      width: '100%',
      marginBottom: '30%',
    },
    amountDetailView: {
      width: '90%',

      flexDirection: 'row',
      height: '20%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 5,
    },
    amountView: {
      borderRadius: 20,
      width: '55%',
      height: '100%',
      backgroundColor: '#FAF9F9',
    },
    frequencyView: {
      borderRadius: 20,
      width: '40%',
      height: '100%',
      backgroundColor: '#FAF9F9',
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View style={styles.spendingInfoView}>
          <TouchableOpacity
            onPress={() => {
              // @ts-ignore
              navigation.navigate('NumberEntry');
            }}
            style={{
              height: 110,
              width: '90%',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                width: '100%',
                textAlign: 'left',
                fontSize: 20,
              }}>
              AED
            </Text>
            <Text
              style={{
                width: '100%',
                textAlign: 'left',
                fontSize: 90,
              }}>
              {props.amount == 0 ? 'Amount' : props.amount}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: 130,
              width: '95%',
              borderRadius: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: '#CFE1CB',
            }}>
            <View
              style={{
                height: '40%',
                width: '90%',
                borderRadius: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={() => {
                  // @ts-ignore
                  navigation.navigate('ListSelection', {
                    list: Object.keys(props.categories).map(
                      (categoryKey: string) => ({
                        name: props.categories[categoryKey].name,
                        id: categoryKey,
                      }),
                    ),
                    stateVariable: 'from',
                  });
                }}
                style={{width: '100%'}}>
                <CategoryItem
                  transferPage={true}
                  name={
                    props.from != '' ? props.categories[props.from].name : ''
                  }
                  frequency={
                    props.from != ''
                      ? props.categories[props.from].frequency
                      : ''
                  }
                  budget={
                    props.from != '' ? props.categories[props.from].budget : 0
                  }
                  periodAvailable={
                    props.from != ''
                      ? props.categories[props.from].periodAvailable
                      : 0
                  }
                  available={
                    props.from != ''
                      ? props.categories[props.from].available
                      : 0
                  }
                  periodSpent={
                    props.from != ''
                      ? props.categories[props.from].periodSpent
                      : 0
                  }
                  categoryIcon={
                    props.from != '' ? props.categories[props.from].icon : ''
                  }
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: '10%',
                width: '100%',

                display: 'flex',
                alignItems: 'center',

                justifyContent: 'space-around',
                backgroundColor: '#B1BBAE',
              }}>
              <Icon
                name="arrow-downward"
                size={25}
                style={{
                  zIndex: 2,
                  position: 'absolute',
                  top: -10,
                  backgroundColor: 'black',
                  borderRadius: 100,
                  padding: 5,
                  color: 'white',
                }}
              />
            </View>
            <View
              style={{
                height: '40%',
                width: '90%',
                borderRadius: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={() => {
                  // @ts-ignore
                  navigation.navigate('ListSelection', {
                    list: Object.keys(props.categories).map(
                      (categoryKey: string) => ({
                        name: props.categories[categoryKey].name,
                        id: categoryKey,
                      }),
                    ),
                    stateVariable: 'to',
                  });
                }}
                style={{width: '100%'}}>
                <CategoryItem
                  transferPage={true}
                  name={props.to != '' ? props.categories[props.to].name : ''}
                  frequency={
                    props.to != '' ? props.categories[props.to].frequency : ''
                  }
                  budget={
                    props.to != '' ? props.categories[props.to].budget : 0
                  }
                  periodAvailable={
                    props.to != ''
                      ? props.categories[props.to].periodAvailable
                      : 0
                  }
                  available={
                    props.to != '' ? props.categories[props.to].available : 0
                  }
                  periodSpent={
                    props.to != '' ? props.categories[props.to].periodSpent : 0
                  }
                  categoryIcon={
                    props.to != '' ? props.categories[props.to].icon : ''
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.transactionListView}>
          <Buttons bottomSheetRef={props.bottomSheetRef} />
        </View>
      </View>
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
    from: state.communication.from,
    to: state.communication.to,
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    allocateMoneyToCategoryAction: (data: IAllocateMoneyToCategory) =>
      dispatch(allocateMoneyToCategoryAction(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TransferPage);
