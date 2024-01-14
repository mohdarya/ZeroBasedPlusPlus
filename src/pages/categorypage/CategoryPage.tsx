import {StyleSheet, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/core";

import BottomBar from "../shared/components/BottomBar.tsx";
import TopBar from "./components/TopBar";
import AllocationInfo from "./components/AllocationInfo.tsx";
import CategoryList from "./components/CategoryList.tsx";
import BalanceInfo from "../home/components/BalanceInfo.tsx";
import React, {useRef} from "react";
import {RootState} from "../../redux/rootReducer.tsx";
import {connect} from "react-redux";
import {ICategoryItem} from "../../redux/category/reducer/CategoryReducer.tsx";
import TransactionSection from "./components/TransactionSection.tsx";
import Graph from "./components/Graph.tsx";
import {ICategoryStatistics} from "../../redux/statistics/types/StatisticsTypes.tsx";
import BottomSheet, {BottomSheetRefProps} from "../shared/components/bottomSheet.tsx";
import BottomSheetSelection from "../shared/containers/BottomSheetSelection.tsx";


interface CategoryPageProps {
    categories: ICategoryItem
    statistics: ICategoryStatistics
}

function CategoryPage(props: CategoryPageProps) {

    const route = useRoute();
    const ref = useRef<BottomSheetRefProps>(null);
    // @ts-ignore
    const categoryID = route.params.categoryID;
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: "#E9EEEA",
            justifyContent: 'space-around',
        },
        graphView: {
            width: '100%',
            height: '30%',
        },
        transactionSectionView: {
            width: '100%',
            height: '70%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        bottomBarView: {
            height: 65,
            marginBottom: '2%',
            width: '100%',
            bottom:0,
            display: 'flex',
            position: 'absolute',
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

            <View style={{height: "90%", display: 'flex', justifyContent: 'space-around'}}>
                <View style={styles.graphView}>
                    <Graph graphName="Weekly Spending" categoryData={props.categories[categoryID]} categoryID={categoryID} statistics={props.statistics}/>
                </View>

                <View style={styles.transactionSectionView}>
                    <TransactionSection categoryId={categoryID}/>
                </View>

            </View>
                <View style={styles.bottomBarView}>
                    <BottomBar page="CategoryPage" bottomSheetRef={ref}/>
                </View>

            <BottomSheet ref={ref}>
                <BottomSheetSelection bottomSheetRef={ref}/>
            </BottomSheet>
        </View>
    );
}
const mapStateToProps = (state: RootState) => {
    return {
        categories: state.categories,
        statistics: state.statistics.categories
    };
};
export default connect(mapStateToProps)(CategoryPage);
