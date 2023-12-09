import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import {useNavigation} from '@react-navigation/core';
import {connect} from 'react-redux';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {
  clearData,
  returnNumeric,
} from '../../redux/componentCommunication/action/ComponentCommunicationAction';
import {addTransaction} from '../../redux/transactions/action/TransactionsActions';

function TransactionAddition(props) {
  const navigation = useNavigation();
  const [datePicker, setDatePicker] = useState(false);
  const [dateValue, setDateValue] = useState(new Date());

  const carasoulItmes = ['monthly', 'daily', 'weekly', 'yearly'];
  const onChange = (event, selectedValue) => {
    setDatePicker(false);
    const currentDate = selectedValue || new Date();
    setDateValue(currentDate);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#555B6E',
      justifyContent: 'flex-start',
    },
    bottomBarView: {
      height: 100,
    },
    amountStyle: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    otherPartsStyle: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      flex: 5,
    },
    otherPartsSectionStyle: {
      marginTop: 40,

      width: '50%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
  });

  const findCategoryID = name => {
    for (const [key, value] of Object.entries(props.categories)) {
      if (value.name === name) {
        return key;
      }
    }
  };

  return (
    <View style={styles.container}>
      <TopBar
        available={
          props.itemSelect
            ? props.categories[findCategoryID(props.itemSelect)].available
            : 'N/A'
        }
      />

      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignContent: 'space-between',
          margin: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NumberEntry');
          }}
          style={styles.amountStyle}>
          <View style={{flex: 1, display: 'flex', alignItems: 'center'}}>
            <Text
              style={{color: '#BEE3DB', fontSize: 45, alignSelf: 'flex-start'}}>
              Amount
            </Text>
            <Text style={{color: '#BEE3DB', fontSize: 40}}>{props.amount}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.otherPartsStyle}>
          <View style={styles.otherPartsSectionStyle}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TextEntry', {
                  placeHolderText: 'Enter Payee Name',
                  textInputName: 'Payee',
                });
              }}
              style={{width: '100%', display: 'flex'}}>
              <Text
                style={{
                  color: '#BEE3DB',
                  fontSize: 20,
                  alignSelf: 'flex-start',
                  marginTop: 5,
                }}>
                Payee
              </Text>
              <Text style={{color: '#BEE3DB', fontSize: 25, marginTop: 5}}>
                {props.payeeName ? props.payeeName : 'N/A'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListSelection', {
                  list: Object.keys(props.categories).map(
                    categoryKey => props.categories[categoryKey].name,
                  ),
                });
              }}
              style={{width: '100%', display: 'flex'}}>
              <Text
                style={{
                  color: '#BEE3DB',
                  fontSize: 20,
                  alignSelf: 'flex-start',
                  marginTop: 5,
                }}>
                Category
              </Text>
              <Text style={{color: '#BEE3DB', fontSize: 25, marginTop: 5}}>
                {props.itemSelect ? props.itemSelect : 'N/A'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.otherPartsSectionStyle}>
            <TouchableOpacity
              onPress={() => {
                setDatePicker(true);
              }}
              style={{width: '100%', display: 'flex'}}>
              <Text
                style={{
                  color: '#BEE3DB',
                  fontSize: 20,
                  alignSelf: 'flex-start',
                  marginTop: 5,
                }}>
                Date
              </Text>
              <Text style={{color: '#BEE3DB', fontSize: 25, marginTop: 5}}>
                {dateValue.toISOString().split('T')[0]}
              </Text>

              {datePicker && (
                <RNDateTimePicker value={dateValue} onChange={onChange} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                props.addTransaction(
                  props.amount,
                  dateValue,
                  props.itemSelect,
                  props.payeeName,
                );
                props.clearData();
                navigation.goBack();
              }}
              style={{
                width: 150,
                height: 50,
                display: 'flex',
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <BottomBar />
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    amount: state.communication.numeric,
    payeeName: state.communication.text,
    itemSelect: state.communication.itemSelected,
    categories: state.categories,
    transactions: state.transactions,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTransaction: (amount, date, category, payee) =>
      dispatch(addTransaction(payee, amount, date, category)),
    clearData: () => dispatch(clearData()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionAddition);
