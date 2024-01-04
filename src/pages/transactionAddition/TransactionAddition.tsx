import React, {RefObject, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CategoryItem from './components/CategoryLIstItem.tsx';
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
import {
    ITransactionActionTypes,
    TransactionActionTypes,
    TransactionTypes
} from "../../redux/transactions/types/transactionTypes.tsx";
import {addBalance, addTransactionBalanceChange} from "../../redux/balance/actions/balanceActions.tsx";
import {BalanceActionTypes, IAddTransaction} from "../../redux/balance/types/balanceTypes.tsx";
import {categoryTransactionAction} from "../../redux/category/action/CategoryAction.tsx";
import {
    CategoryActionTypes,
    ICategoryActionTypes,
    ICategoryTransactionAction
} from "../../redux/category/types/CategoryTypes.tsx";
import {BottomSheetRefProps} from "../shared/components/bottomSheet.tsx";


interface TransactionAdditionProps {
    amount: number,
    categories: ICategoryItem,
    itemSelect: string,
    itemKey: string,
    payee: string,
    addTransaction: (data: ITransactionActionTypes) => {},
    clearData: (data: IComponentCommunicationAction) => {},
    reduceAvailable: (data: IAddTransaction) => {},
    addBalance: (data: IAddTransaction) => {},
    categoryTransactionAction: (data: ICategoryTransactionAction) => {},
    bottomSheetRef: RefObject<BottomSheetRefProps>,
}

function TransactionAddition(props: TransactionAdditionProps) {

    const navigation = useNavigation();
    const [datePicker, setDatePicker] = useState(false);
    const [dateValue, setDateValue] = useState(new Date());

    const onChange = (event: any, selectedValue: any) => {
        setDatePicker(false);
        const currentDate = selectedValue || new Date();
        setDateValue(currentDate);

    };
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: "flex",
            borderRadius: 25,
            marginBottom: 100,
            height: '100%',
            width: '100%',
            flexDirection: "column",
            backgroundColor: "#E9EEEA",
            justifyContent: "space-between",
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
                height: '60%',
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
            height: 60,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 5,
        },
        amountView: {
            marginTop: 40,

            width: '90%',
            height: '10%',
        },
        frequencyView: {
            borderRadius: 20,
            width: '100%',
            height: 60,

        },

    });

    return (
        <View style={styles.container}>



            <View style={{width: '100%', height: '100%'}}>
                <View style={styles.amountView}>
                    <TouchableOpacity onPress={() => {
                        setDatePicker(true)
                    }} style={{width: "100%", display: "flex"}}>

                        <View style={{display: 'flex', width: '100%', alignItems: 'flex-end'}}>
                            <View style={{
                                backgroundColor: '#282828',
                                width: 90,
                                height: 25,
                                borderRadius: 5,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{color: '#E9EEEA', textAlign: 'center', fontSize: 15}}>
                                    {dateValue.toISOString().split('T')[0]}
                                </Text>
                            </View>
                        </View>

                        {datePicker &&
                            <RNDateTimePicker value={dateValue} onChange={onChange}
                            />}
                    </TouchableOpacity>

                </View>
                <View style={styles.spendingInfoView}>
                    <TouchableOpacity onPress={() => {
                        // @ts-ignore
                        navigation.navigate('NumberEntry')
                    }} style={{
                        height: 110,
                        width: "90%",
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                    }}>


                        <Text style={{width: '100%', textAlign: 'left',fontSize: 20}}>
                            AED
                        </Text>
                        <Text style={{width: '100%', textAlign: 'left', fontSize: 96}}>
                            {props.amount}
                        </Text>

                    </TouchableOpacity>
                    <View style={styles.frequencyView}>
                        <TouchableOpacity onPress={() => {
                            // @ts-ignore
                            navigation.navigate('TextEntry',
                                {
                                    placeHolderText: "Enter Payee Name",
                                    textInputName: "Payee"
                                })
                        }} style={{width: "100%", display: "flex"}}>
                            <Text style={{width: '90%', textAlign: 'right', fontSize: 40}}>
                                {props.payee ? props.payee : "Payee"}

                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => {

                        let list = [
                            {
                                name: "available",
                                id: ""

                            }
                        ]

                        list = [...list,  ...Object.keys(props.categories).map((categoryKey: string) => ({
                            name: props.categories[categoryKey].name,
                            id: categoryKey
                        }))]



                        // @ts-ignore
                        navigation.navigate('ListSelection',
                            {
                                list
                            })
                    }} style={{
                        height: 100,
                        width: '90%',
                        borderRadius: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}>



                        <View style={{width: '90%'}}>
                            <CategoryItem name={props.itemKey != '' ? props.categories[props.itemKey].name : ""}
                                          frequency={props.itemKey != '' ? props.categories[props.itemKey].frequency : ""}
                                          available={props.itemKey != '' ? props.categories[props.itemKey].available : ""} spentThisMonth={props.itemKey != '' ? props.categories[props.itemKey].spentThisMonth : ""}/>
                        </View>
                    </TouchableOpacity>


                </View>
                <View style={styles.transactionListView}>
                    <View style={{
                        width: '100%',

                        flexDirection: 'row',
                        height: 45,
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        borderRadius: 5
                    }}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }} style={{
                            borderRadius: 5,
                            width: '40%',
                            height: '100%',
                            backgroundColor: '#FAF9F9',
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <Text style={{width: "auto", fontSize: 20}}>
                                Cancel
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {


                            const transactionData: ITransactionActionTypes =
                                {
                                    transactionType:props.itemSelect === "available" ? TransactionTypes.CREDIT :TransactionTypes.DEBIT,
                                    amount: props.amount,
                                    category: props.itemKey,
                                    date: dateValue.toLocaleDateString(),
                                    payee: props.payee,
                                    type: TransactionActionTypes.ADD_TRANSACTION

                                }


                            const balanceData: IAddTransaction =
                                {
                                    type: BalanceActionTypes.REDUCE_BALANCE,
                                    transactionAmount: props.amount

                                }


                            //@ts-ignore
                            const categoryData: ICategoryActionTypes =
                                {
                                    type: CategoryActionTypes.CATEGORY_TRANSACTION_ACTION,
                                    categoryID: props.itemKey,
                                    amount: props.amount,

                                }
                            const clearDataParameters: IComponentCommunicationAction = {
                                from: "", to: "",
                                date: "",
                                itemSelected: "",
                                payee: "",
                                text: "",
                                type: "",
                                number: 0.0,
                                itemKey: ""
                            };

                            if(props.itemSelect === "available") {
                                props.addBalance(balanceData);
                            }
                            else {
                                props.reduceAvailable(balanceData);
                                props.categoryTransactionAction(categoryData);
                            }

                            props.addTransaction(transactionData);

                            props.clearData(clearDataParameters);
                            props.bottomSheetRef.current?.scrollTo(0);
                        }} style={{
                            borderRadius: 5,
                            width: '40%',
                            height: '100%',
                            backgroundColor: '#FAF9F9',
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <Text style={{width: "auto", fontSize: 20}}>
                                Add
                            </Text>
                        </TouchableOpacity>


                    </View>
                </View>
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
        clearData: (data: IComponentCommunicationAction) => dispatch(clearData(data)),
        reduceAvailable: (data: IAddTransaction) => dispatch(addTransactionBalanceChange(data)),
        addBalance: (data: IAddTransaction) => dispatch(addBalance(data)),
        categoryTransactionAction: (data: ICategoryTransactionAction) => dispatch(categoryTransactionAction(data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionAddition);
