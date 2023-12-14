import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/core';
import TopBar from './components/TopBar';
import SpendingInfo from './components/SpendingInfo.tsx';
import BottomBar from '../shared/components/BottomBar.tsx';

interface TransactionListPageProps {}

function TransactionListPage(props: TransactionListPageProps) {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#555B6E',
      justifyContent: 'space-between',
    },
    bottomBarView: {
      height: 60,
      marginBottom: '5%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <TopBar />

      <SpendingInfo balanceText={'test'} balanceAmount={10} />
      <View style={styles.bottomBarView}>
        <BottomBar balanceText={'test'} balanceAmount={100} />
      </View>
    </View>
  );
}

export default TransactionListPage;
