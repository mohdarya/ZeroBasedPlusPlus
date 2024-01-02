import {StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/core";

import BottomBar from "../shared/components/BottomBar.tsx";
import TopBar from "./components/TopBar";
import AllocationInfo from "./components/AllocationInfo.tsx";
import CategoryList from "./components/CategoryList.tsx";
import {RootState} from "../../redux/rootReducer.tsx";
import {connect} from "react-redux";


interface AllocationPageProps {
    available: number,
    unallocated: number
}

function AllocationPage(props: AllocationPageProps) {
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: "flex",
            borderRadius: 25,
            marginBottom: 100,
            height: '100%',
            width: '100%',
            flexDirection: "column",
            backgroundColor: "#E9EEEA",
            justifyContent: "space-between",
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
                height: 120,
                width: '100%'

            }
        ,
        transactionListView:
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '75%',
                width: '100%',

            }

    });

    return (
        <View style={styles.container}>


            <View style={styles.spendingInfoView}>
                <AllocationInfo availableAmount={props.available} unallocatedAmount={props.unallocated}/>
            </View>
            <View style={styles.transactionListView}>
                <CategoryList/>
            </View>
        </View>
    );
}
const mapStateToProps = (state : RootState) => {


    return {

        available: state.balance.available,
        unallocated: state.balance.unallocated,

    };
};
export default connect(mapStateToProps)(AllocationPage);
