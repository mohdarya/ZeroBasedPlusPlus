import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootState} from "../../../redux/rootReducer.tsx";
import {
    CategoryActionTypes,
    IAddCategory,
    IAllocateMoneyToCategory
} from "../../../redux/category/types/CategoryTypes.tsx";
import {allocateMoneyToCategoryAction} from "../../../redux/category/action/CategoryAction.tsx";
import {connect} from "react-redux";
import {
    clearData,
    IComponentCommunicationAction
} from "../../../redux/componentCommunication/action/ComponentCommunicationAction.tsx";
import {BalanceActionTypes, IAllocateMoney} from "../../../redux/balance/types/balanceTypes.tsx";
import Icon from "react-native-vector-icons/MaterialIcons";
import uuid from "react-native-uuid";
import React, {RefObject} from "react";
import {BottomSheetRefProps} from "../../shared/components/bottomSheet.tsx";

interface buttonsProps {
    from: string,
    amount: number,
    to: string,
    clearData: (data: IComponentCommunicationAction) => {},
    allocateMoneyToCategoryAction: (data: IAllocateMoneyToCategory) => {},
    bottomSheetRef: RefObject<BottomSheetRefProps>,
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
            height: 100,
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


                    <Icon name="close"   style={{color: '#E9EEEA', backgroundColor: '#282828', borderRadius: 100}}  onPress={() => {
                        const clearDataParameters: IComponentCommunicationAction = {
                            id: "",
                            index: 0,
                            from: "", to: "",
                            date: 0,
                            itemSelected: "",
                            payee: "",
                            text: "",
                            type: "",
                            number: 0.0,
                            itemKey: ""
                        };
                        props.clearData(clearDataParameters);
                        props.bottomSheetRef.current?.scrollTo(0);
                    }}  size={50}/>


                    <Icon name="done"   style={{color: '#E9EEEA', backgroundColor: '#282828', borderRadius: 100}} nPress={() => {
                        const clearDataParameters: IComponentCommunicationAction = {
                            id: "",
                            index: 0,
                            from: "", to: "",
                            date: 0,
                            itemSelected: "",
                            payee: "",
                            text: "",
                            type: "",
                            number: 0.0,
                            itemKey: ""
                        };
                        let amount : number  = props.amount

                        amount = 0 - amount;

                        const deallocateMoneyFromCategoryParameters: IAllocateMoneyToCategory = {
                            amount: amount, categoryID: props.from, type: CategoryActionTypes.ALLOCATE_MONEY_TO_CATEGORY

                        };

                        const allocateMoneyToCategoryParameters: IAllocateMoneyToCategory = {
                            amount: props.amount, categoryID: props.to, type: CategoryActionTypes.ALLOCATE_MONEY_TO_CATEGORY

                        };


                        props.allocateMoneyToCategoryAction(deallocateMoneyFromCategoryParameters);
                        props.allocateMoneyToCategoryAction(allocateMoneyToCategoryParameters);
                        props.clearData(clearDataParameters);
                        props.bottomSheetRef.current?.scrollTo(0);
                    }}   size={50}/>



            </View>
        </View>
    );
}
const mapStateToProps = (state: RootState) => {


    return {
        amount: state.communication.numeric,
        from: state.communication.from,
        to: state.communication.to,

    };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        clearData: (data: IComponentCommunicationAction) => dispatch(clearData(data)),
        allocateMoneyToCategoryAction: (data: IAllocateMoneyToCategory) => dispatch(allocateMoneyToCategoryAction(data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
