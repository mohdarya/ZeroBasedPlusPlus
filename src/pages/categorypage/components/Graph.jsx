import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

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
                  margin: 15,
                }}>
              <Text style={{color: '#555B6E', fontSize: 15, fontWeight: 'bold'}}>
                Spent This Month
              </Text>
              <Text style={{color: '#555B6E', fontSize: 15, fontWeight: 'bold'}}>
                {props.spentAmount}
              </Text>
            </View>
          </View>
        </View>
      </View>
  );
}

export default Graph;
