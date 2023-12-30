import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

function TopBar(props) {
  const Styles = StyleSheet.create({
    container: {
      height: 30,
      width: '100%',
      display: 'flex',

      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    pageNameContainer: {
      flex: 3,
      display: 'flex',

      height: '100%',
      flexDirection: 'column',
      paddingLeft: 10,

    },

  });

  return (
    <View style={Styles.container}>
      <View style={Styles.pageNameContainer}>
        <Text style={{color: '#282828', fontSize: 25}}>{props.categoryName}</Text>
        <Text style={{color: '#282828', fontSize: 15}}>{props.categoryFrequency}</Text>
      </View>

    </View>
  );
}

const mapStateToProps = state => {
  return {
    available: state.balance.available,
  };
};
export default connect(mapStateToProps)(TopBar);
