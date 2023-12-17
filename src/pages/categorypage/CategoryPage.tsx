import {StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/core";

import BottomBar from "../shared/components/BottomBar.tsx";
import TopBar from "./components/TopBar";
import AllocationInfo from "./components/AllocationInfo.tsx";
import CategoryList from "./components/CategoryList.tsx";
import BalanceInfo from "../home/components/BalanceInfo.tsx";
import Graph from "../home/components/Graph";
import TransactionSection from "../home/components/TransactionSection";
import React from "react";


interface CategoryPagProps {
}

function CategoryPage(props: CategoryPagProps) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#555B6E',
            justifyContent: 'space-between',
        },
        graphView: {
            width: '100%',
            height: '34%',
        },
        transactionSectionView: {
            width: '100%',
            height: '48%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        bottomBarView: {
            height: 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        spendingInfoView:
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 60,
                width: '100%'

            }


    });

    return (
        <View style={styles.container}>

            <TopBar categoryName={"CategoryA"} categoryFrequency={"Daily"}/>

            <View style={{height: "80%", display: 'flex', justifyContent: 'space-around'}}>
                <View style={styles.spendingInfoView}>
                    <AllocationInfo availableAmount={100} balanceAmount={100}/>
                </View>
                <View style={styles.graphView}>
                    <Graph graphName="Weekly Spending"/>
                </View>

                <View style={styles.transactionSectionView}>
                    <TransactionSection/>
                </View>

            </View>
                <View style={styles.bottomBarView}>
                    <BottomBar balanceAmount={200} balanceText={"test"}/>
                </View>
        </View>
    );
}

export default CategoryPage;
