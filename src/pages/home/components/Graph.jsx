import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

function Graph(props) {
  return (

        <View
          style={{
            backgroundColor: '#D8DFE9',
            width: '100%',
            height: '100%',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <View
            style={{
              height: '25%',
              margin: 15,
            }}>
            <Text style={{color: '#282828', fontSize: 20}}>
              Available
            </Text>
            <Text style={{color: '#282828', fontSize: 35}}>
              {props.available}
            </Text>
          </View>
          <View style={{height: '50%'}}>

          </View>
          <View style={{display: 'flex',flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center'}}>
            <View style={{backgroundColor: '#282828', width: 80, height: 25,borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#E9EEEA', textAlign: 'center'}}>
                Month
              </Text>
            </View>
            <View style={{backgroundColor: '#282828', width: 80, height: 25,borderRadius: 5,  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#E9EEEA', textAlign: 'center'}}>
                Week
              </Text>
            </View>
            <View style={{backgroundColor: '#282828', width: 80, height: 25,borderRadius: 5,  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#E9EEEA', textAlign: 'center'}}>
                Day
              </Text>
            </View>
          </View>
        </View>
  );
}
const mapStateToProps = state => {
  return {
    available: state.balance.available,
  };
};
export default connect(mapStateToProps)(Graph);
