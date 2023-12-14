import {StyleSheet, Text, View} from 'react-native';

interface balanceProps {
  balanceText: string;
  balanceAmount: number;
}

function BalanceInfo(props: balanceProps) {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: '90%',
      marginTop: 20,
      height: 60,
      marginLeft: '3%',
      marginRight: '3%',
      borderRadius: 15,
      backgroundColor: '#FAF9F9',
    },
    spendingInfoTitleStyle: {

      fontSize: 18,
      color: '#555B6E',
    },
    spendingInfoAmountStyle: {
      fontSize: 25,
      color: '#555B6E',
    },
    textDetail: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.textDetail}>
        <Text style={styles.spendingInfoTitleStyle}>Day</Text>
        <Text style={styles.spendingInfoAmountStyle}>{props.balanceAmount}</Text>
      </View>
      <View style={styles.textDetail}>
        <Text style={styles.spendingInfoTitleStyle}>Week</Text>
        <Text style={styles.spendingInfoAmountStyle}>{props.balanceAmount}</Text>
      </View>

      <View style={styles.textDetail}>
        <Text style={styles.spendingInfoTitleStyle}>Month</Text>
        <Text style={styles.spendingInfoAmountStyle}>{props.balanceAmount}</Text>
      </View>
    </View>
  );
}

export default BalanceInfo;
