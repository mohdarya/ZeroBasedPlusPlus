import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/core";
import TopBar from "./components/TopBar";
import SpendingInfo from "./components/SpendingInfo.tsx";
import BottomBar from "../shared/components/BottomBar.tsx";
import TransactionList from "./components/TransactionList.tsx";
import BottomSheet, {BottomSheetRefProps} from "../shared/components/bottomSheet.tsx";
import BottomSheetSelection from "../shared/containers/BottomSheetSelection.tsx";
import React, {useRef} from "react";
import TransactionAddition from "../transactionAddition/TransactionAddition.tsx";
import {RootState} from "../../redux/rootReducer.tsx";
import {connect} from "react-redux";
import TransactionEdit from "../shared/components/TransactionEdit.tsx";

interface TransactionListPageProps {
}

function TransactionListPage(props: TransactionListPageProps) {
  const navigation = useNavigation();
    const ref = useRef<BottomSheetRefProps>(null);
    const transactionEditingRef = useRef<BottomSheetRefProps>(null);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      height: '100%',
      width: '100%',
      flexDirection: "column",
        backgroundColor: '#E9EEEA',
      justifyContent: "center"
    },
    bottomBarView: {
        height: 65,
        marginBottom: '2%',
        width: '100%',
        bottom: 0,
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

      }
      ,
      transactionListView:
          {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: '90%',
              width: '100%',

          }

  });

  return (
    <View style={styles.container}>

        <View  style={styles.transactionListView}>
        <TransactionList transactionEditingRef={transactionEditingRef}/>
        </View>
      <View style={styles.bottomBarView}>
        <BottomBar page="TransactionListPage"  bottomSheetRef={ref}/>
      </View>

        <BottomSheet ref={ref}>
            <BottomSheetSelection bottomSheetRef={ref}/>
        </BottomSheet>
        <BottomSheet ref={transactionEditingRef}>
            <TransactionEdit transactionEditingRef={transactionEditingRef}/>
        </BottomSheet>
    </View>
  );
}

const mapStateToProps = (state: RootState) => {
    return {
        categories: state.categories,
        statistics: state.statistics.categories,
        date: state.communication.date,
        transactions: state.transactions,
    };
};
export default connect(mapStateToProps)(TransactionListPage);
