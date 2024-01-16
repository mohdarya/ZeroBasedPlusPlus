import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {useNavigation} from '@react-navigation/core';

interface balanceProps {
  periodSpentText: string;
  periodSpentAmount: number;
}

function PeriodSpentInfo(props: balanceProps) {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      width: 165,
      height: 165,
      marginLeft: '3%',
      marginRight: '3%',
      borderRadius: 15,
      backgroundColor: '#CFE1CB',
    },
    periodSpentTitle: {
      width: '50%',
      marginTop: 15,
      marginLeft: '10%',
      fontSize: 24,
      color: '#282828',
    },
    periodSpentAmount: {
      marginLeft: '10%',
      fontSize: 36,
      color: '#282828',
    },
    periodSpentIcon: {
      backgroundColor: '#E9EEEA',
      borderRadius: 100,
      padding: 5,
      color: '#282828',
    },
    periodSpentWrapperView: {
      width: '90%',
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.periodSpentTitle}>{props.periodSpentText}</Text>
      <Text style={styles.periodSpentAmount}>{props.periodSpentAmount}</Text>
      <View style={styles.periodSpentWrapperView}>
        <Icon
          onPress={() => {
            navigation.navigate('PeriodSpentPage', {
              sourcePage: props.periodSpentText.split(' ')[0],
            });
          }}
          name="arrow-forward"
          size={20}
          style={styles.periodSpentIcon}
        />
      </View>
    </View>
  );
}

export default PeriodSpentInfo;
