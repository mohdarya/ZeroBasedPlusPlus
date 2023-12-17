import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Graph(props) {
  return (
    <View style={{margin: 10}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#FAF9F9',
            width: '95%',
            height: '100%',
            borderRadius: 20,
          }}>
          <View
            style={{
              height: '25%',
            }}>
            <Text style={{color: '#555B6E', fontSize: 15, fontWeight: 'bold'}}>
              Available
            </Text>
            <Text style={{color: '#555B6E', fontSize: 15, fontWeight: 'bold'}}>
              1000000
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Graph;
