import {StyleSheet, Text, View} from 'react-native';

interface balanceProps {
  availableAmount: number;
  unallocatedAmount: number;
}

function BalanceInfo(props: balanceProps) {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: '90%',
      height: '100%',

      borderRadius: 10,
    },
    spendingInfoTitleStyle: {
      fontSize: 20,
      color: '#282828',
    },
    spendingInfoAmountStyle: {
      fontSize: 36,
      color: '#282828',
    },
    textDetail: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.textDetail}>
        <Text style={styles.spendingInfoTitleStyle}>Available</Text>
        <Text style={styles.spendingInfoAmountStyle}>
          {props.availableAmount}
        </Text>
      </View>
      <View style={styles.textDetail}>
        <Text style={styles.spendingInfoTitleStyle}>Unallocated</Text>
        <Text style={styles.spendingInfoAmountStyle}>
          {props.unallocatedAmount}
        </Text>
      </View>
    </View>
  );
}

export default BalanceInfo;
