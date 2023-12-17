import {StyleSheet, Text, View} from 'react-native';

interface buttonsProps {
}

function Buttons(props: buttonsProps) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
            height: '90%',
            marginLeft: '3%',
            marginRight: '3%',
            borderRadius: 15,
        },
        amountDetailView: {
            width: '100%',

            flexDirection: 'row',
            height: 45,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: 5,
        },
        amountView: {
            borderRadius: 5,
            width: '40%',
            height: '100%',
            backgroundColor: '#FAF9F9',
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
    }
    });

    return (
        <View style={styles.container}>
            <View style={styles.amountDetailView}>
                <View style={styles.amountView}>
                    <Text style={{width: "auto",fontSize: 20}}>
                        Cancel
                    </Text>
                </View>
                <View style={styles.amountView}>
                    <Text style={{width: "auto", fontSize: 20}}>
                        Add
                    </Text>

                </View>

            </View>
        </View>
    );
}

export default Buttons;
