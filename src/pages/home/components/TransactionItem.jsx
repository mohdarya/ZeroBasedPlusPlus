import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {
  TransactionTypes
} from '../../../redux/transactions/types/transactionTypes';

function TransactionItem(props) {
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

  return (
    <View style={Styles.container}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      />
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: '90%',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            width: '70%',
          }}>
          <View>
            <Icon
              name="list"
              size={25}
              style={props.type === TransactionTypes.DEBIT ? {
                backgroundColor: '#FF7171',
                borderRadius: 100,
                padding: 6,
                color: '#282828',
              } : {
                backgroundColor: '#71FFAA',
                borderRadius: 100,
                padding: 6,
                color: '#282828',
              } }
            />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{color: '#555B6E', fontSize: 20, margin: 0}}>
              {props.name}
            </Text>
            <Text style={{color: '#555B6E', fontSize: 20, margin: 0}}>
              {props.date}
            </Text>
          </View>
        </View>

        <View>
          <Text style={{color: '#555B6E', fontSize: 20, margin: 0}}>
            {props.amount}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default TransactionItem;
