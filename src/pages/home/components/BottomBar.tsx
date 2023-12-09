import {StyleSheet, View} from 'react-native';

interface bottomBarProps {
  balanceText: string;
  balanceAmount: number;
}

function BottomBar(props: bottomBarProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '95%',
      height: '100%',
      borderRadius: 25,
      backgroundColor: '#FAF9F9',
    },
    balanceTitleStyle: {
      fontSize: 20,
    },
    balanceAmountStyle: {
      fontSize: 35,
    },
  });

  return <View style={styles.container} />;
}

export default BottomBar;
