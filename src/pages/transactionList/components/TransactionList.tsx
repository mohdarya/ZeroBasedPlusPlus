import {StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/core";

interface TransactionListProps {
}

function TransactionList(props: TransactionListProps) {
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            height: '100%',
            borderRadius: 15,
            backgroundColor: '#FAF9F9',
        },
    });

    return (
        <View style={styles.container}>
        </View>
    );
}

export default TransactionList;
