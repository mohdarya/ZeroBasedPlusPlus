import {StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/core";

import BottomBar from "../shared/components/BottomBar.tsx";
import TopBar from "./components/TopBar";
import AllocationInfo from "./components/AllocationInfo.tsx";
import CategoryList from "./components/CategoryList.tsx";


interface AllocationPageProps {
}

function AllocationPage(props: AllocationPageProps) {
    const navigation = useNavigation();

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
                height: 60,
                width: '100%'

            }
        ,
        transactionListView:
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '60%',
                width: '100%',

            }

    });

    return (
        <View style={styles.container}>

            <TopBar categoryName={"CategoryA"} categoryFrequency={"Daily"}/>

            <View style={styles.spendingInfoView}>
                <AllocationInfo availableAmount={100} balanceAmount={100}/>
            </View>
            <View style={styles.transactionListView}>
                <CategoryList/>
            </View>
            <View style={styles.bottomBarView}>
                <BottomBar page="AllocationPage"/>
            </View>
        </View>
    );
}

export default AllocationPage;
