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
    let categoryArray = makeCategoryArray();
    return categoryArray.map((value, key) => (
      <TransactionItem key={key} name={value.name} amount={value.amount} />
    ));
  }

  function makeCategoryArray() {
    let temp = [];
    for (let key in props.transactions) {
      let tempItem = props.transactions[key];
      tempItem = {
        ...tempItem,
        categoryID: key,
      };
      temp.push(tempItem);
    }

    return temp;
  }

  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 25,
        width: '90%',
        height: '88%',
      }}>
      <Text
        style={{
          color: '#555B6E',
          fontSize: 18,
          marginTop: 10,
          marginLeft: 15,
          marginBottom: 10,
          fontWeight: 'bold',
        }}>
        Transactions
      </Text>
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
