import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import uuid from 'react-native-uuid';
import {ITransactionActionTypes, TransactionActionTypes} from "../../../redux/transactions/types/transactionTypes.tsx";
import {
    clearData,
    IComponentCommunicationAction
} from "../../../redux/componentCommunication/action/ComponentCommunicationAction.tsx";
import React from "react";
import {RootState} from "../../../redux/rootReducer.tsx";
import {addTransaction} from "../../../redux/transactions/action/TransactionsActions.tsx";
import {connect} from "react-redux";
import {useNavigation} from "@react-navigation/core";
import {addCategory} from "../../../redux/category/action/CategoryAction.tsx";
import {CategoryActionTypes, IAddCategory} from "../../../redux/category/types/CategoryTypes.tsx";

interface buttonsProps {
    amount: number,
    itemSelect: string,
    itemKey: string,
    text: string,
    addCategory: (data: IAddCategory) => {},
    clearData: (data: IComponentCommunicationAction) => {},
}

function Buttons(props: buttonsProps) {
    const navigation = useNavigation();
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
                    const categoryData : IAddCategory =
                        {
                            allocated: "0",
                            available: "0",
                            categoryID: uuid.v4().toString(),
                            frequency: props.itemSelect,
                            name: props.text,
                            spentThisMonth: "0",
                            type: CategoryActionTypes.ADD_CATEGORY,
                            unallocated: "0"


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

                    props.addCategory(categoryData);
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
    );
}


const mapStateToProps = (state: RootState, ownProps: any) => {
    return {
        amount: state.communication.numeric,
        itemSelect: state.communication.itemSelected,
        itemKey: state.communication.itemKey,
        text: state.communication.text,
    };
};


const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        addCategory: (data: IAddCategory) => dispatch(addCategory(data)),
        clearData: (data : IComponentCommunicationAction) => dispatch(clearData(data)),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Buttons);
