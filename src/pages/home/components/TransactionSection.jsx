import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TransactionItem from './TransactionItem';
import {connect} from 'react-redux';

function TransactionSection(props) {
  const Styles = StyleSheet.create({
    container: {
      height: 60,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  function loadData() {
    return props.transactions.map((value, key) => (
        <TransactionItem key={key} name={value.payee}  date={value.date} amount={value.amount} />
    ));
  }


  return (
    <View
      style={{
        borderRadius: 25,
        width: '90%',
        height: '95%',
      }}>
      <View style={{display: 'flex',flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems:'center'}}>
      <Text
        style={{
          color: '#555B6E',
          width: 110,
          fontSize: 18,
          marginTop: 10,
          marginLeft: 15,
          marginBottom: 15,
          fontWeight: 'bold',
        }}>
        Transactions
      </Text>
        <View style={{backgroundColor: '#282828', width: 80, height: 25,borderRadius: 5,  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#E9EEEA', textAlign: 'center'}}>
            View All
          </Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        {loadData()}
      </ScrollView>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions.transactions,
  };
};
export default connect(mapStateToProps)(TransactionSection);
