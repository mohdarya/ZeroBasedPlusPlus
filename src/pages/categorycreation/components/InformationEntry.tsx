import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {RootState} from "../../../redux/rootReducer.tsx";
import {ITransactionActionTypes} from "../../../redux/transactions/types/transactionTypes.tsx";
import {addTransaction} from "../../../redux/transactions/action/TransactionsActions.tsx";
import {
    clearData, ComponentCommunicationActionTypes,
    IComponentCommunicationAction, IReturnIndex, returnIndex
} from "../../../redux/componentCommunication/action/ComponentCommunicationAction.tsx";
import {connect} from "react-redux";
import {ICategoryItem} from "../../../redux/category/reducer/CategoryReducer.tsx";
import {useNavigation} from "@react-navigation/core";
import CategoryItem from "../../transactionAddition/components/CategoryLIstItem.tsx";
import Icon from "react-native-vector-icons/MaterialIcons";
import {useFont} from "@shopify/react-native-skia";

interface InformationEntryProps {
    amount: number,
    categories: ICategoryItem,
    itemSelect: string,
    itemKey: string,
    index: number,
    text: string,
    frequency: string[],
    addTransaction: (data: ITransactionActionTypes) => {},
    clearData: (data: IComponentCommunicationAction) => {},
    returnIndex: (data: IReturnIndex) => {},
    categoryIcons:string[],
    categoryFrequency:string[],
}

function InformationEntry(props: InformationEntryProps) {

    const [frequencyIndex, setFrequencyIndex] = useState(props.index !== undefined && props.index < props.categoryFrequency.length - 1 ? props.index : 0);


    useEffect(() =>
              {
                  let indexParameter : IReturnIndex = {
                      index: frequencyIndex,
                      type: ComponentCommunicationActionTypes.RETURN_INDEX


                  }
                  props.returnIndex(indexParameter);
              }, [frequencyIndex]);
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
            height: 80,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
        },
        amountDetailView: {
            width: '90%',


            flexDirection: 'row',
            height: 60,

            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderRadius: 5,
        },
        amountView: {
            borderRadius: 5,
            width: '50%',
            height: '100%',

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

            <View style={{display: 'flex', width: '100%', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => {
                setFrequencyIndex(frequencyIndex <  props.categoryFrequency.length  -1? frequencyIndex + 1: 0 )


            }} style={    {
                backgroundColor: '#282828',
                width: 90,
                height: 25,
                borderRadius: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{color: '#E9EEEA', textAlign: 'center',fontSize: 15}}>
                    {props.categoryFrequency[frequencyIndex]}
                </Text>
            </TouchableOpacity>
            </View>
            <View style={{display: 'flex', width: '100%', alignItems: 'flex-start'}}>
            <Icon

                onPress={() => {


                    // @ts-ignore
                    navigation.navigate('IconSelection',
                                        {
                                            list: props.categoryIcons
                                        })}}

                name={props.itemSelect === '' ? 'home' : props.itemSelect}
                size={30}
                style={{
                    backgroundColor: '#282828',
                    borderRadius: 100,
                    padding: 5,
                    color: '#E9EEEA',
                }}
            />
            </View>
            <View style={styles.textEntryView}>
                <TouchableOpacity onPress={() => {
                    // @ts-ignore
                    navigation.navigate('TextEntry',
                        {
                            placeHolderText: "Enter Category Name",
                            textInputName: "Category"
                        })
                }} style={{width: "100%", display: "flex"}}>


                    <Text style={{width: '100%', textAlign: 'left', fontSize: 64}}>
                        {props.text ? props.text : "Category"}

                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.amountDetailView}>

                <TouchableOpacity onPress={() => {
                    // @ts-ignore
                    navigation.navigate('NumberEntry')
                }} style={styles.amountView}>

                    <Text style={{width: '100%', textAlign: 'right', fontSize: 48}}>
                        {props.amount == 0 ? "Budget": props.amount}
                    </Text>

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
        categoryIcons: state.appDetail.categoryIconList,
        categoryFrequency: state.appDetail.categoryFrequency,
        index: state.communication.index

    };
};


const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        addTransaction: (data: ITransactionActionTypes) => dispatch(addTransaction(data)),
        clearData: (data: IComponentCommunicationAction) => dispatch(clearData(data)),
        returnIndex: (data: IReturnIndex) => dispatch(returnIndex(data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(InformationEntry);
