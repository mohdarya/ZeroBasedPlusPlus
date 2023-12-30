import {StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/core";

import BottomBar from "../shared/components/BottomBar.tsx";
import TopBar from "./components/TopBar";
import InformationEntry from "./components/InformationEntry.tsx";
import Buttons from "./components/Buttons.tsx";
import {RefObject} from "react";
import {BottomSheetRefProps} from "../shared/components/bottomSheet.tsx";


interface CategoryCreationPageProps {
    bottomSheetRef: RefObject<BottomSheetRefProps>,
}

function CategoryCreationPage(props: CategoryCreationPageProps) {
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
                height:250,
                width: '100%',
                marginTop: '20%',
                marginBottom: '20%',

            }
        ,
        transactionListView:
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 100,
                width: '100%',
                marginBottom: '30%',

            }

    });

    return (
        <View style={styles.container}>


            <View style={styles.spendingInfoView}>
                <InformationEntry/>
            </View>
            <View style={styles.transactionListView}>
                    <Buttons bottomSheetRef={props.bottomSheetRef}/>
            </View>
        </View>
    );
}

export default CategoryCreationPage;
