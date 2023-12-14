import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/core';

interface bottomBarProps {
  balanceText: string;
  balanceAmount: number;
}

function BottomBar(props: bottomBarProps) {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
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

  return (
    <View style={styles.container}>
      <Icon name="list" size={35} />
      <Icon name="home" size={35} />
      <Icon
        name="add-to-list"
        onPress={() => navigation.navigate('NumberEntry')}
        size={35}
      />
    </View>
  );
}

export default BottomBar;
