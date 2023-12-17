import {StyleSheet, Text, View} from 'react-native';

interface InformationEntryProps {
}

function InformationEntry(props: InformationEntryProps) {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'column',
            width: '90%',
            height: '100%',
            borderRadius: 15,

        },
        spendingInfoTitleStyle: {

            fontSize: 18,
            color: '#555B6E',
        },
        spendingInfoAmountStyle: {
            fontSize: 25,
            color: '#555B6E',
        },
        textEntryView: {
            width:'100%',
            backgroundColor: '#FAF9F9',
            height: 55,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
        },
        amountDetailView: {
            width:'100%',

            flexDirection: 'row',
            height: 45,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 5,
        },
        amountView: {
            borderRadius: 5,
            width: '55%',
            height: '100%',
            backgroundColor: '#FAF9F9',
        },
        frequencyView: {
            borderRadius: 5,
            width: '40%',
            height: '100%',
            backgroundColor: '#FAF9F9',
        }

    });

    return (
        <View style={styles.container}>

            <View style={styles.textEntryView}>


            </View>
            <View style={styles.amountDetailView}>
                <View style={styles.amountView}>


                </View>
                <View style={styles.frequencyView}>


                </View>

            </View>

        </View>
    );
}
export default InformationEntry;
