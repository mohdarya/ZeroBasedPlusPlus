import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import InformationEntry from './components/InformationEntry.tsx';
import Buttons from './components/Buttons.tsx';
import {RefObject} from 'react';
import {BottomSheetRefProps} from '../shared/components/bottomSheet.tsx';
import {RootState} from '../../redux/rootReducer.tsx';
import {IAddCategory} from '../../redux/category/types/CategoryTypes.tsx';
import {addCategory} from '../../redux/category/action/CategoryAction.tsx';
import {
  clearData,
  IComponentCommunicationAction,
} from '../../redux/componentCommunication/action/ComponentCommunicationAction.tsx';
import {connect} from 'react-redux';

interface CategoryCreationPageProps {
  bottomSheetRef: RefObject<BottomSheetRefProps>;
  modalVisible: boolean;
  setModalVisible: any;
}

function CategoryCreationPage(props: CategoryCreationPageProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      borderRadius: 25,
      marginBottom: 100,
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      backgroundColor: '#E9EEEA',
      justifyContent: 'space-between',
    },
    bottomBarView: {
      height: 60,
      marginBottom: '5%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    spendingInfoView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 250,
      width: '100%',
      marginTop: '20%',
      marginBottom: '20%',
    },
    transactionListView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      width: '100%',
      marginBottom: '30%',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.spendingInfoView}>
        <InformationEntry />
      </View>
      <View style={styles.transactionListView}>
        <Buttons
          modalVisible={props.modalVisible}
          setModalVisible={props.setModalVisible}
          bottomSheetRef={props.bottomSheetRef}
        />
      </View>
    </View>
  );
}
const mapStateToProps = (state: RootState) => {
  return {
    amount: state.communication.numeric,
    categories: state.categories,
    itemSelect: state.communication.itemSelected,
    itemKey: state.communication.itemKey,
    text: state.communication.text,
    frequency: state.appDetail.categoryFrequency,
    categoryIcons: state.appDetail.categoryIconList,
    categoryFrequency: state.appDetail.categoryFrequency,
    index: state.communication.index,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addCategory: (data: IAddCategory) => dispatch(addCategory(data)),
    clearData: (data: IComponentCommunicationAction) =>
      dispatch(clearData(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryCreationPage);
