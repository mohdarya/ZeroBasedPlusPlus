import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

function Graph(props) {
  return (
    <View style={{}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#FAF9F9',
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
            <Text style={{color: '#555B6E', fontSize: 20}}>
              Available
            </Text>
            <Text style={{color: '#555B6E', fontSize: 35}}>
              {props.available}
            </Text>
          </View>
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
