import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
          width: 50,
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <View
        style={{
          display: 'flex',
          marginLeft: '5%',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'column',
          width: '80%',
        }}>
        <Text style={{color: '#BEE3DB', fontSize: 20, margin: 0}}>
          {props.name}
        </Text>
        <Text style={{color: '#BEE3DB', fontSize: 20, margin: 0}}>
          {props.amount}
        </Text>
      </View>
    </View>
  );
}

export default TransactionItem;
