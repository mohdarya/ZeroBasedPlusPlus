import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/core";
import React, {RefObject, useState} from "react";
import {BottomSheetRefProps} from "../components/bottomSheet.tsx";
import {CategoryActionTypes, IAddCategory} from "../../../redux/category/types/CategoryTypes.tsx";
import uuid from "react-native-uuid";
import {
    IComponentCommunicationAction
} from "../../../redux/componentCommunication/action/ComponentCommunicationAction.tsx";
import CategoryCreationPage from "../../categorycreation/CategoryCreationPage.tsx";
import TransferPage from "../../transferpage/TransferPage";
import TransactionAddition from "../../transactionAddition/TransactionAddition.tsx";
import AllocationPage from "../../allocation/AllocationPage.tsx";

interface BottomSheetSelectionProp {
    bottomSheetRef: RefObject<BottomSheetRefProps>,
}

function BottomSheetSelection(props: BottomSheetSelectionProp) {
    const navigation = useNavigation();
    const { height: SCREEN_HEIGHT } = Dimensions.get('window');

    const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

    const [viewTrigger, setViewTrigger] = useState< {
        categoryCreation: boolean,
        transactionCreation: boolean,
        allocation: boolean,
        fundsTransfer: boolean
    } >({
        categoryCreation: false,
        transactionCreation: false,
        allocation: false,
        fundsTransfer: false
    } );
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: "flex",
            height: '100%',
            width: '100%',
            flexDirection: "column",
            backgroundColor: "#FAF9F9",
            marginTop: 25,
            justifyContent: "flex-start",
            alignItems: "center"

        },
        buttonSelection: {
            display: "flex",
            height: '10%',
            width: '90%',
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"

        },
        buttonStyle: {
            borderRadius: 5,
            width: 80,
            height: 40,
            backgroundColor: '#555B6E',
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
        },
        actionView :{

            height: '90%',
            width: '95%',
        }

    });

    return (
        <View style={styles.container}>
            <View style={styles.buttonSelection}>

            <TouchableOpacity onPress={() => {
                setViewTrigger( {
                    categoryCreation: true,
                        transactionCreation: false,
                        allocation: false,
                        fundsTransfer: false
                })
                    props.bottomSheetRef.current?.scrollTo( MAX_TRANSLATE_Y)
            }} style={styles.buttonStyle}>
                <Text style={{width: "auto", fontSize: 15, color: '#FAF9F9'}}>
                    Category
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setViewTrigger(   {
                    categoryCreation: false,
                    transactionCreation: true,
                    allocation: false,
                    fundsTransfer: false
                })
                props.bottomSheetRef.current?.scrollTo(MAX_TRANSLATE_Y)
            }} style={styles.buttonStyle}>
                <Text style={{width: "auto", fontSize: 13, color: '#FAF9F9'}}>
                    Transaction
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setViewTrigger(   {
                    categoryCreation: false,
                    transactionCreation: false,
                    allocation: true,
                    fundsTransfer: false
                })
                props.bottomSheetRef.current?.scrollTo(MAX_TRANSLATE_Y)

            }} style={styles.buttonStyle}>
                <Text style={{width: "auto", fontSize: 15, color: '#FAF9F9'}}>
                    Allocation
                </Text>
            </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setViewTrigger(  {
                        categoryCreation: false,
                        transactionCreation: false,
                        allocation: false,
                        fundsTransfer: true
                    })
                    props.bottomSheetRef.current?.scrollTo(MAX_TRANSLATE_Y)

                }} style={styles.buttonStyle}>
                    <Text style={{width: "auto", fontSize: 15, color: '#FAF9F9'}}>
                        Transfer
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.actionView}>

                {viewTrigger.categoryCreation &&
                <CategoryCreationPage/>}

                {viewTrigger.fundsTransfer &&
                    <TransferPage/>}

                {viewTrigger.allocation &&
                    <AllocationPage/>}
                {viewTrigger.transactionCreation &&
                    <TransactionAddition/>}
            </View>
        </View>
    );
}

export default BottomSheetSelection;
