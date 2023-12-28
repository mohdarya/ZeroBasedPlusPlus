import {StyleSheet, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/core";
import TopBar from "./components/TopBar";
import BottomBar from "../shared/components/BottomBar.tsx";
import SpendingChart from "./components/SpendingChart.tsx";
import CategoryList from "./components/CategoryList.tsx";
import BottomSheet, {BottomSheetRefProps} from "../shared/components/bottomSheet.tsx";
import React, {useCallback, useRef} from "react";
import TransactionAddition from "../transactionAddition/TransactionAddition.tsx";
import CategoryCreationPage from "../categorycreation/CategoryCreationPage.tsx";
import AllocationPage from "../allocation/AllocationPage.tsx";
import BottomSheetSelection from "../shared/containers/BottomSheetSelection.tsx";
import {RootState} from "../../redux/rootReducer.tsx";
import {connect} from "react-redux";

interface CategoryListPageProps {
}

function CategoryListPage(props: CategoryListPageProps) {
    const navigation = useNavigation();
    const ref = useRef<BottomSheetRefProps>(null);


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: "flex",
            height: '100%',
            width: '100%',
            flexDirection: "column",
            backgroundColor: "#555B6E",
            justifyContent: "space-between"
        },
        bottomBarView: {
            height: 60,
            marginBottom: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        spendingInfoView:
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '25%',
                width: '100%'

            }
        ,
        transactionListView:
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '48%',
                width: '100%',

            },

        button: {
            height: 50,
            borderRadius: 25,
            aspectRatio: 1,
            backgroundColor: 'white',
            opacity: 0.6,
        },

    });

    return (
        <View style={styles.container}>
            <TopBar />

            <View style={styles.spendingInfoView}>
                <SpendingChart/>
            </View >
            <View  style={styles.transactionListView}>
                <CategoryList/>
            </View>
            <View style={styles.bottomBarView}>
                <BottomBar bottomSheetRef={ref} page="CategoryListPage" />
            </View>
            <BottomSheet ref={ref}>
                <BottomSheetSelection bottomSheetRef={ref}/>
            </BottomSheet>
        </View>
    );
}

const mapStateToProps = (state : RootState) => {


    return {
        amount: state.communication.numeric,
        categories: state.categories,
        itemSelect: state.communication.itemSelected,
        itemKey: state.communication.itemKey,
        payee: state.communication.text,
    };
};
export default connect(mapStateToProps)(CategoryListPage);
