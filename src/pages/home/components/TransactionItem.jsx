import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

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
              style={{
                backgroundColor: '#D63535',
                borderRadius: 100,
                padding: 5,
                color: 'white',
              }}
            />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{color: '#555B6E', fontSize: 20, margin: 0}}>
              {props.name}
            </Text>
            <Text style={{color: '#555B6E', fontSize: 20, margin: 0}}>
              {props.amount}
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
