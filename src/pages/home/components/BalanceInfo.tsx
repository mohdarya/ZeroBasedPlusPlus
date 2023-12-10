import {StyleSheet, Text, View} from 'react-native';

interface balanceProps {
  balanceText: string;
  balanceAmount: number;
}

function BalanceInfo(props: balanceProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',
      height: '90%',
      marginLeft: '3%',
      marginRight: '3%',
      borderRadius: 15,
      backgroundColor: '#FAF9F9',
    },
    balanceTitleStyle: {
      marginLeft: '10%',
      fontSize: 20,
      color: '#555B6E',
    },
    balanceAmountStyle: {
      marginLeft: '10%',
      fontSize: 35,
      color: '#555B6E',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.balanceTitleStyle}>{props.balanceText}</Text>
      <Text style={styles.balanceAmountStyle}>{props.balanceAmount}</Text>
    </View>
  );
}

export default BalanceInfo;
