import {StyleSheet, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/core";

import BottomBar from "../shared/components/BottomBar.tsx";
import TopBar from "./components/TopBar";
import AllocationInfo from "./components/AllocationInfo.tsx";
import CategoryList from "./components/CategoryList.tsx";
import BalanceInfo from "../home/components/BalanceInfo.tsx";
import Graph from "../home/components/Graph";
import TransactionSection from "../home/components/TransactionSection";
import React from "react";
import {RootState} from "../../redux/rootReducer.tsx";
import {connect} from "react-redux";
import {ICategoryItem} from "../../redux/category/reducer/CategoryReducer.tsx";


interface CategoryPageProps {
    categories:ICategoryItem
}

function CategoryPage(props: CategoryPageProps) {

    const route = useRoute();

    // @ts-ignore
    const categoryID = route.params.categoryID;
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#555B6E',
            justifyContent: 'space-around',
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

            <TopBar categoryName={props.categories[categoryID].name} categoryFrequency={props.categories[categoryID].frequency}/>

            <View style={{height: "70%", display: 'flex', justifyContent: 'space-around'}}>
                <View style={styles.spendingInfoView}>
                    <AllocationInfo availableAmount={props.categories[categoryID].available} spentAmount={props.categories[categoryID].spentThisMonth}/>
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
const mapStateToProps = (state: RootState) => {
    return {
        categories: state.categories,
    };
};
export default connect(mapStateToProps)(CategoryPage);
