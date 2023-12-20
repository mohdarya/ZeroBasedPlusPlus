import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {connect} from 'react-redux';
import {RootState} from "../../../redux/rootReducer.tsx";
import {
    IComponentCommunicationAction,
    returnNumeric
} from "../../../redux/componentCommunication/action/ComponentCommunicationAction.tsx";

function money_round(num: string) {
    if (!isNaN(parseInt(num))) {
        return Math.floor(Number(num)* 100) / 100;
    }else {
        return 0.0
    }
}

interface  NumberEntryProp{
    amount: number,
    returnNumeric: (IComponentCommunicationAction: IComponentCommunicationAction) => {},
}


function NumberEntry(props : NumberEntryProp) {
    const navigation = useNavigation();
    const [amount, setAmount] = useState(0.0);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#555B6E',
            justifyContent: 'flex-start',
        },
        bottomBarView: {
            height: 100,
        },
        amountStyle: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        otherPartsStyle: {
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            flex: 5,
        },
        otherPartsSectionStyle: {
            marginTop: 20,

            width: '50%',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'row',
        },
    });

    return (
        <View style={styles.container}>
            <View
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignContent: 'space-between',
                    margin: 20,
                    marginTop: '50%',
                }}>
                <View style={styles.amountStyle}>
                    <View style={{flex: 1, display: 'flex', alignItems: 'center'}}>
                        <Text style={{color: '#BEE3DB', fontSize: 50, alignSelf: 'center'}}>
                            Amount Test
                        </Text>
                        <View>
                            <TextInput
                                defaultValue={String(props.amount === 0.0 ? '' : props.amount)}
                                pointerEvents={'none'}
                                placeholder={'0.00'}
                                selectTextOnFocus={true}
                                autoFocus={true}
                                onSubmitEditing={event => {
                                }}
                                onEndEditing={event => {
                                    navigation.goBack();
                                }}
                                onChangeText={text => {
                                    const returnNumericParameter: IComponentCommunicationAction = {
                                        date: "",
                                        itemSelected: "",
                                        payee: "",
                                        text: "",
                                        type: "",
                                        number: money_round(text),
                                        itemKey: ""
                                    };

                                        props.returnNumeric(returnNumericParameter);

                                }}
                                keyboardType={'numeric'}
                                style={{
                                    color: '#BEE3DB',
                                    fontSize: 45,
                                    textAlign: 'center',
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const mapStateToProps = (state: RootState, ownProps: any) => {
    return {
        amount: state.communication.numeric,
    };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        returnNumeric: (numeric: IComponentCommunicationAction) => dispatch(returnNumeric(numeric)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(NumberEntry);
