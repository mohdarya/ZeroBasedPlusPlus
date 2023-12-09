import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Graph(props) {
  return (
    <View style={{margin: 10}}>
      <Text style={{color: '#BEE3DB', fontSize: 24, margin: 0}}>
        {props.graphName}
      </Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#FFD6BA',
            width: '90%',
            height: '90%',
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
}

export default Graph;
