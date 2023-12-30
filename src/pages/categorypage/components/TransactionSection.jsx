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
    monthContainerBean: {
      backgroundColor: '#CFE1CB',
      width: 55,
      height: 20,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  function loadData() {
    return props.transactions.map((value, key) => (
        <TransactionItem key={key} name={value.payee} date={value.date}
                         amount={value.amount}/>
    ));
  }

  return (
      <View
          style={{
            borderRadius: 25,
            width: '90%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        <View style={{
          backgroundColor: '#B1BBAE',
          width: '100%',
          height: 35,
          borderRadius: 10,
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
          <View style={Styles.monthContainerBean}>
            <Text style={{color: '#282828', textAlign: 'center'}}>
              AUG
            </Text>
          </View>
          <View style={Styles.monthContainerBean}>
            <Text style={{color: '#282828', textAlign: 'center'}}>
              SEP
            </Text>
          </View>
          <View style={Styles.monthContainerBean}>
            <Text style={{color: '#282828', textAlign: 'center'}}>
              OCT
            </Text>
          </View>
          <View style={Styles.monthContainerBean}>
            <Text style={{color: '#282828', textAlign: 'center'}}>
              NOV
            </Text>
          </View> <View style={Styles.monthContainerBean}>
          <Text style={{color: '#282828', textAlign: 'center'}}>
            DEC
          </Text>
        </View>

        </View>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
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
