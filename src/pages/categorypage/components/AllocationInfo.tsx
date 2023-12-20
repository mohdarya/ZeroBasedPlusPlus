import {StyleSheet, Text, View} from 'react-native';

interface balanceProps {
    availableAmount: string;
    spentAmount: string;
}

function BalanceInfo(props: balanceProps) {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            width: '90%',
            height: 60,

            borderRadius: 10,
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
            width: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.textDetail}>
                <Text style={styles.spendingInfoTitleStyle}>Available</Text>
                <Text style={styles.spendingInfoAmountStyle}>{props.availableAmount}</Text>
            </View>
            <View style={styles.textDetail}>
                <Text style={styles.spendingInfoTitleStyle}>Spent</Text>
                <Text style={styles.spendingInfoAmountStyle}>{props.spentAmount}</Text>
            </View>
        </View>
    );
}

export default BalanceInfo;
