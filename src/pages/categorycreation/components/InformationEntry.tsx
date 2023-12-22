import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from "react";
import {RootState} from "../../../redux/rootReducer.tsx";
import {ITransactionActionTypes} from "../../../redux/transactions/types/transactionTypes.tsx";
import {addTransaction} from "../../../redux/transactions/action/TransactionsActions.tsx";
import {
    clearData,
    IComponentCommunicationAction
} from "../../../redux/componentCommunication/action/ComponentCommunicationAction.tsx";
import {connect} from "react-redux";
import {ICategoryItem} from "../../../redux/category/reducer/CategoryReducer.tsx";
import {useNavigation} from "@react-navigation/core";
import CategoryItem from "../../transactionAddition/components/CategoryLIstItem";

interface InformationEntryProps {
    amount: number,
    categories: ICategoryItem,
    itemSelect: string,
    itemKey: string,
    text: string,
    frequency: string[],
    addTransaction: (data: ITransactionActionTypes) => {},
    clearData: (data: IComponentCommunicationAction) => {},
}

function InformationEntry(props: InformationEntryProps) {

    const navigation = useNavigation();
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
            width: '100%',
            backgroundColor: '#FAF9F9',
            height: 55,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
        },
        amountDetailView: {
            width: '100%',

            flexDirection: 'row',
            height: 50,
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
                <TouchableOpacity onPress={() => {
                    // @ts-ignore
                    navigation.navigate('TextEntry',
                        {
                            placeHolderText: "Enter Category Name",
                            textInputName: "Category"
                        })
                }} style={{width: "100%", display: "flex"}}>

                    <Text style={{width: '100%', textAlign: 'left', fontSize: 15, marginLeft: 10}}>
                        Category Name
                    </Text>
                    <Text style={{width: '100%', textAlign: 'left', fontSize: 20, marginLeft: 30}}>
                        {props.text ? props.text : ""}

                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.amountDetailView}>

                <TouchableOpacity onPress={() => {
                    // @ts-ignore
                    navigation.navigate('NumberEntry')
                }} style={styles.amountView}>


                    <Text style={{width: '90%', textAlign: 'left', fontSize: 15, marginLeft: 10}}>
                        Budget
                    </Text>
                    <Text style={{width: '90%', textAlign: 'left', fontSize: 20, marginLeft: 30}}>
                        {props.amount}
                    </Text>

                </TouchableOpacity>



                    <TouchableOpacity onPress={() => {
                        // @ts-ignore
                        navigation.navigate('ListSelection',
                            {
                                list: Object.keys(props.frequency).map((value, index, array) => ({
                                    name: props.frequency[index],
                                    id: props.frequency[index]
                                }))
                            })
                    }}  style={styles.frequencyView}>
                        <Text style={{
                            width: '90%', textAlign: 'left', fontSize: 15, marginLeft: 10
                        }}>
                            Frequency
                        </Text>


                        <View style={{width: '90%'}}>
                            <Text style={{width: '90%', textAlign: 'left', fontSize: 20, marginLeft: 30}}>
                                {props.itemSelect}
                            </Text>
                        </View>
                    </TouchableOpacity>


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
        text: state.communication.text,
        frequency: state.appDetail.categoryFrequency,
    };
};


const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        addTransaction: (data: ITransactionActionTypes) => dispatch(addTransaction(data)),
        clearData: (data: IComponentCommunicationAction) => dispatch(clearData(data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(InformationEntry);
