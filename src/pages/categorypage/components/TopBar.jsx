import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

function TopBar(props) {
  const Styles = StyleSheet.create({
    container: {
      height: 20,
      width: '100%',
      display: 'flex',
      marginTop: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    pageNameContainer: {
      flex: 2,
      display: 'flex',

      height: '100%',
      flexDirection: 'column',
      paddingLeft: 10,
      marginTop: 10,
    },
    financeDataContainer: {
      flex: 4,
      display: 'flex',

      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    settingPageContainer: {
      flex: 2,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      paddingRight: 10,

      flexDirection: 'row',
    },
  });

  return (
    <View style={Styles.container}>
      <View style={Styles.pageNameContainer}>
        <Text style={{color: '#FAF9F9', fontSize: 15}}>{props.categoryName}</Text>
        <Text style={{color: '#FAF9F9', fontSize: 15}}>#{props.categoryFrequency}</Text>
      </View>

      <View style={Styles.settingPageContainer} />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    available: state.balance.available,
  };
};
export default connect(mapStateToProps)(TopBar);
