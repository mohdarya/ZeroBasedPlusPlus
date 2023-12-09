import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

function TopBar(props) {
  const navigation = useNavigation();

  const Styles = StyleSheet.create({
    container: {
      height: 55,
      width: '100%',
      display: 'flex',

      flexDirection: 'row',
      backgroundColor: '#FAF9F9',
      alignItems: 'center',
      justifyContent: 'center',
    },

    pageNameContainer: {
      flex: 2,
      display: 'flex',

      flexDirection: 'row',
      paddingLeft: 10,
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
      <View style={Styles.pageNameContainer} />
      <View style={Styles.financeDataContainer} />
      <View style={Styles.settingPageContainer} />
    </View>
  );
}

export default TopBar;
