import {StyleSheet, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import {forSlideLeft} from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators";
import {useNavigation} from "@react-navigation/core";

interface balanceProps {
  balanceText: string;
  balanceAmount: number;
}

function BalanceInfo(props: balanceProps) {
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
    balanceTitleStyle: {
      width: '50%',
      marginTop: 15,
      marginLeft: '10%',
      fontSize: 24,
      color: '#282828',
    },
    balanceAmountStyle: {
      marginLeft: '10%',
      fontSize: 36,
      color: '#282828',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.balanceTitleStyle}>{props.balanceText}</Text>
      <Text style={styles.balanceAmountStyle}>{props.balanceAmount}</Text>
      <View style={{width: '90%', display: 'flex', justifyContent: 'flex-end', flexDirection: 'row'}}>
      <Icon
          onPress={()=> {   navigation.navigate('PeriodSpentPage',{sourcePage: props.balanceText.split(" " )[0]})}}
          name="arrow-forward"
          size={20}
          style={{
            backgroundColor: '#E9EEEA',
            borderRadius: 100,
            padding: 5,
            color: '#282828',
          }}
      />
      </View>
    </View>
  );
}

export default BalanceInfo;
5