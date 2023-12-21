import {StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/core";
import TopBar from "./components/TopBar";
import BottomBar from "../shared/components/BottomBar.tsx";
import SpendingChart from "./components/SpendingChart.tsx";
import CategoryList from "./components/CategoryList.tsx";

interface CategoryListPageProps {
}

function CategoryListPage(props: CategoryListPageProps) {
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

            }

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
                <BottomBar page="CategoryListPage" />
            </View>
        </View>
    );
}

export default CategoryListPage;
