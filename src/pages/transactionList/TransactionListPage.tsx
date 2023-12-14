import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import TopBar from './components/TopBar';

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
  });

  return (
    <View style={styles.container}>
      <TopBar />
    </View>
  );
}

export default TransactionListPage;
