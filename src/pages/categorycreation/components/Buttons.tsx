import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import uuid from 'react-native-uuid';
import {
    ITransactionActionTypes,
    TransactionActionTypes,
    TransactionTypes
} from "../../../redux/transactions/types/transactionTypes.tsx";
import {
    clearData,
    IComponentCommunicationAction
} from "../../../redux/componentCommunication/action/ComponentCommunicationAction.tsx";
import React, {RefObject} from "react";
import {RootState} from "../../../redux/rootReducer.tsx";
import {addTransaction} from "../../../redux/transactions/action/TransactionsActions.tsx";
import {connect} from "react-redux";
import {useNavigation} from "@react-navigation/core";
import {addCategory} from "../../../redux/category/action/CategoryAction.tsx";
import {CategoryActionTypes, IAddCategory, ICategoryActionTypes} from "../../../redux/category/types/CategoryTypes.tsx";
import {BottomSheetRefProps} from "../../shared/components/bottomSheet.tsx";
import Icon from "react-native-vector-icons/MaterialIcons";
import {BalanceActionTypes, IAddTransaction} from "../../../redux/balance/types/balanceTypes.tsx";

interface buttonsProps {
    amount: number,
    itemSelect: string,
    itemKey: string,
    text: string,
    bottomSheetRef: RefObject<BottomSheetRefProps>,
    addCategory: (data: IAddCategory) => {},
    clearData: (data: IComponentCommunicationAction) => {},
    modalVisible: boolean,
    setModalVisible: any,
    categoryFrequency: string[],
    index: number,
    id: string
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

                <View style={{
                    width: '100%',

                    flexDirection: 'row',
                    height: 100,
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderRadius: 5
                }}>
                    <Icon name="close"   style={{color: '#E9EEEA', backgroundColor: '#282828', borderRadius: 100}}  onPress={() => {
                        const clearDataParameters: IComponentCommunicationAction = {
                            id: "",
                            index: 0,
                            from: "",
                            to: "",
                            date: 0,
                            itemSelected: "",
                            payee: "",
                            text: "",
                            type: "",
                            number: 0.0,
                            itemKey: ""
                        };
                        props.clearData(clearDataParameters)
                        props.bottomSheetRef.current?.scrollTo(0);
                    }}  size={50}/>


                    <Icon name="done"   style={{color: '#E9EEEA', backgroundColor: '#282828', borderRadius: 100}}  onPress={() => {

                        if(props.amount !== 0 && props.itemSelect !== ''  && props.text !== '')
                        {
                            const categoryData: IAddCategory =
                                {
                                    periodAvailable: 0,
                                    allocated: 0.00,
                                    available: 0.00,
                                    categoryID: props.id === '' ? uuid.v4()
                                                                      .toString() : props.id,
                                    frequency: props.categoryFrequency[props.index],
                                    dailySpent: 0.0,
                                    periodSpent: 0.0,
                                    monthlySpent: 0.0,
                                    name: props.text,
                                    type: CategoryActionTypes.ADD_CATEGORY,
                                    budget: props.amount,
                                    icon: props.itemSelect


                                }
                            const clearDataParameters: IComponentCommunicationAction = {
                                id: "",
                                index: 0,
                                from: "",
                                to: "",
                                date: 0,
                                itemSelected: "",
                                payee: "",
                                text: "",
                                type: "",
                                number: 0.0,
                                itemKey: ""
                            };

                            props.addCategory(categoryData);
                            props.clearData(clearDataParameters)
                            props.bottomSheetRef.current?.scrollTo(0);
                        }else
                        {
                            props.setModalVisible(!props.modalVisible)
                        }
                    }}  size={50}/>


                </View>
            </View>
        </View>
    );
}


const mapStateToProps = (state: RootState, ownProps: any) => {
    return {
        amount: state.communication.numeric,
        itemSelect: state.communication.itemSelected,
        itemKey: state.communication.itemKey,
        categoryFrequency: state.appDetail.categoryFrequency,
        text: state.communication.text,
        index: state.communication.index,
        id: state.communication.id,
    };
};


const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        addCategory: (data: IAddCategory) => dispatch(addCategory(data)),
        clearData: (data : IComponentCommunicationAction) => dispatch(clearData(data)),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Buttons);
