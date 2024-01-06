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
                width: '95%',
                height: '100%',
                borderRadius: 20,

              }}>
            <View
                style={{

                  height: '25%',
                  display:'flex',
                  width:'95%',
                  justifyContent: 'center',
                  alignItems: 'flex-end',

                }}>
              <View style={    {
                backgroundColor: '#282828',
                width: 90,
                height: 25,
                borderRadius: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{color: '#E9EEEA', textAlign: 'center',fontSize: 15}}>
                  Available
                </Text>
              </View>
              <Text style={{color: '#555B6E', fontSize: 30, fontWeight: 'bold'}}>
                {props.periodSpentAmount}
              </Text>
            </View>
          </View>
        </View>
      </View>
  );
}

export default Graph;
