import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

function Available() {
  const styles = StyleSheet.create({
    containerWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      height: 50,
      borderRadius: 20,
      backgroundColor: '#71FFAA',
    },
    detailView: {
      marginLeft: 10,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      width: '60%',
    },
    icon: {
      borderRadius: 100,
      padding: 5,
      color: '#282828',
    },
    text: {
      color: '#555B6E',
      fontSize: 15,
      marginLeft: 5,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.detailView}>
        <View>
          <Icon name="attach-money" size={25} style={styles.icon} />
        </View>
        <View>
          <Text style={styles.text}>Available</Text>
        </View>
      </View>
    </View>
  );
}

export default Available;
