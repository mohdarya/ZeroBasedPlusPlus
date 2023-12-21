import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TopBar from './components/TopBar';
import BottomBar from '../shared/components/BottomBar';
import CategoryItem from './components/CategoryLIstItem';
import {useNavigation} from "@react-navigation/core";
import {
    clearData,
    IComponentCommunicationAction
} from "../../redux/componentCommunication/action/ComponentCommunicationAction.tsx";
import {connect} from "react-redux";
import {RootState} from "../../redux/rootReducer.tsx";
import {ICategoryItem} from "../../redux/category/reducer/CategoryReducer.tsx";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {addTransaction} from "../../redux/transactions/action/TransactionsActions.tsx";
import {ITransactionActionTypes, TransactionActionTypes} from "../../redux/transactions/types/transactionTypes.tsx";


interface TransactionAdditionProps {
    amount: number,
    categories: ICategoryItem,
    itemSelect: string,
    itemKey: string,
    payee: string,
    addTransaction: (data: ITransactionActionTypes) => {},
    clearData: (data: IComponentCommunicationAction) => {},
}

function TransactionAddition(props: TransactionAdditionProps) {

    const navigation = useNavigation();
    const [datePicker, setDatePicker] = useState(false);
    const [dateValue, setDateValue] = useState(new Date());

    const onChange = (event : any, selectedValue :any) => {
        setDatePicker(false);
        const currentDate = selectedValue || new Date();
        setDateValue(currentDate);

    };
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: 'flex',
            height: '100%',
            width: '100%',
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
        spendingInfoView:
            {
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '50%',
                width: '100%',

            }
        ,
        transactionListView:
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20%',
                width: '100%',
                marginBottom: '30%',

            },
        amountDetailView: {
            width: '90%',

            flexDirection: 'row',
            height: '20%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 5,
        },
        amountView: {
            borderRadius: 20,
            width: '55%',
            height: '100%',
            backgroundColor: '#FAF9F9',
        },
        frequencyView: {
            borderRadius: 20,
            width: '40%',
            height: '100%',
            backgroundColor: '#FAF9F9',
        },

    });

    return (
        <View style={styles.container}>
            <TopBar/>

            <View style={{width: '100%', height: '80%'}}>
                <View style={styles.spendingInfoView}>
                    <TouchableOpacity onPress={() => {
                        // @ts-ignore
                        navigation.navigate('NumberEntry')
                    }} style={{
                        backgroundColor: 'white',
                        height: '25%',
                        width: '60%',
                        borderRadius: 15,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>


                        <Text style={{width: '30%', textAlign: 'center', fontSize: 20}}>
                            Amount
                        </Text>
                        <Text style={{width: '30%', textAlign: 'center', fontSize: 20}}>
                            {props.amount}
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        // @ts-ignore
                        navigation.navigate('ListSelection',
                            {
                                list: Object.keys(props.categories).map((categoryKey: string) => ({
                                    name: props.categories[categoryKey].name,
                                    id: categoryKey
                                }))
                            })
                    }} style={{
                        backgroundColor: 'white',
                        height: '40%',
                        width: '90%',
                        borderRadius: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}>
                        <Text style={{
                            width: '100%',
                            textAlign: 'left',
                            fontSize: 20,
                            marginLeft: 20,
                        }}>
                            Category
                        </Text>


                        <View style={{width: '90%'}}>
                            <CategoryItem name={props.itemKey != '' ? props.categories[props.itemKey].name : "N/A"}
                                          frequency={props.itemKey != '' ? props.categories[props.itemKey].frequency : "N/A"}
                                          available={props.itemKey != '' ? props.categories[props.itemKey].available : "N/A"}/>
                        </View>
                    </TouchableOpacity>


                    <View style={styles.amountDetailView}>
                        <View style={styles.amountView}>
                            <TouchableOpacity onPress={() => {
                                setDatePicker(true)
                            }} style={{width: "100%", display: "flex"}}>
                                <Text style={{width: '100%', textAlign: 'left', fontSize: 20, marginLeft: 10}}>
                                    Date
                                </Text>
                                <Text style={{width: '100%', textAlign: 'left', fontSize: 20, marginLeft: 30}}>
                                    {dateValue.toISOString().split('T')[0]}
                                </Text>

                                {datePicker &&
                                    <RNDateTimePicker value={dateValue} onChange={onChange}
                                    />}
                            </TouchableOpacity>

                        </View>
                        <View style={styles.frequencyView}>
                            <TouchableOpacity onPress={() => {
                                // @ts-ignore
                                navigation.navigate('TextEntry',
                                    {
                                        placeHolderText: "Enter Payee Name",
                                        textInputName: "Payee"
                                    })
                            }} style={{width: "100%", display: "flex"}}>

                                <Text style={{width: '100%', textAlign: 'left', fontSize: 20, marginLeft: 10}}>
                                    Payee
                                </Text>
                                <Text style={{width: '100%', textAlign: 'left', fontSize: 20, marginLeft: 30}}>
                                    {props.payee ? props.payee : "N/A"}

                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
                <View style={styles.transactionListView}>
                    <View style={{    width: '100%',

                        flexDirection: 'row',
                        height: 45,
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        borderRadius: 5}}>
                        <TouchableOpacity onPress={() => {navigation.goBack()}} style={{ borderRadius: 5,
                            width: '40%',
                            height: '100%',
                            backgroundColor: '#FAF9F9',
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",}}>
                            <Text style={{width: "auto",fontSize: 20}}>
                                Cancel
                            </Text>
                        </TouchableOpacity>


                            <TouchableOpacity onPress={() => {
                                const transactionData : ITransactionActionTypes =
                                {
                                    amount: props.amount, category: props.itemKey, date:dateValue.toDateString(), payee: props.payee, type: TransactionActionTypes.ADD_TRANSACTION

                                }
                                const clearDataParameters: IComponentCommunicationAction = {
                                    date: "",
                                    itemSelected: "",
                                    payee: "",
                                    text: "",
                                    type: "",
                                    number: 0.0,
                                    itemKey: ""
                                };

                                props.addTransaction(transactionData);
                                props.clearData(clearDataParameters)
                                navigation.goBack();
                            }} style={{ borderRadius: 5,
                                width: '40%',
                                height: '100%',
                                backgroundColor: '#FAF9F9',
                                display: 'flex',
                                alignItems: "center",
                                justifyContent: "center",}}>
                                <Text style={{width: "auto", fontSize: 20}}>
                                    Add
                                </Text>
                            </TouchableOpacity>


                    </View>
                </View>
            </View>
            <View style={styles.bottomBarView}>
                <BottomBar page="TransactionAddition"/>
            </View>
        </View>
    );
}

const mapStateToProps = (state: RootState, ownProps: any) => {
    return {
        amount: state.communication.numeric,
        categories: state.categories,
        itemSelect: state.communication.itemSelected,
        itemKey: state.communication.itemKey,
        payee: state.communication.text,
    };
};


const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        addTransaction: (data: ITransactionActionTypes) => dispatch(addTransaction(data)),
        clearData: (data : IComponentCommunicationAction) => dispatch(clearData(data)),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(TransactionAddition);
