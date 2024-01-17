import {StyleSheet, View} from 'react-native';
import AllocationInfo from './components/AllocationInfo.tsx';
import {RootState} from '../../redux/rootReducer.tsx';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  clearData,
  IComponentCommunicationAction,
} from '../../redux/componentCommunication/action/ComponentCommunicationAction.tsx';
import React, {RefObject} from 'react';
import {BottomSheetRefProps} from '../shared/components/bottomSheet.tsx';
import {IAddCategory} from '../../redux/category/types/CategoryTypes.tsx';
import {addCategory} from '../../redux/category/action/CategoryAction.tsx';
import CategoryList from '../shared/components/CategoryList.tsx';

interface AllocationPageProps {
  available: number;
  unallocated: number;
  bottomSheetRef: RefObject<BottomSheetRefProps>;
  clearData: (data: IComponentCommunicationAction) => {};
}

function AllocationPage(props: AllocationPageProps) {
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
    AllocationView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 120,
      width: '100%',
    },
    categoryListView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60%',
      width: '100%',
    },
    closeButtonWrapperView: {
      height: 70,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeButtonView: {height: 50, width: 50},
    closeButton: {
      color: '#E9EEEA',
      backgroundColor: '#282828',
      borderRadius: 100,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.AllocationView}>
        <AllocationInfo
          availableAmount={props.available}
          unallocatedAmount={props.unallocated}
        />
      </View>
      <View style={styles.categoryListView}>
        <CategoryList calculateAllocation={true} />
      </View>
      <View style={styles.closeButtonWrapperView}>
        <View style={styles.closeButtonView}>
          <Icon
            name="close"
            style={styles.closeButton}
            onPress={() => {
              const clearDataParameters: IComponentCommunicationAction = {
                id: '',
                index: 0,
                from: '',
                to: '',
                date: 0,
                itemSelected: '',
                payee: '',
                text: '',
                type: '',
                number: 0.0,
                itemKey: '',
              };
              props.clearData(clearDataParameters);
              props.bottomSheetRef.current?.scrollTo(0);
            }}
            size={50}
          />
        </View>
      </View>
    </View>
  );
}
const mapStateToProps = (state: RootState) => {
  return {
    available: state.balance.available,
    unallocated: state.balance.unallocated,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addCategory: (data: IAddCategory) => dispatch(addCategory(data)),
    clearData: (data: IComponentCommunicationAction) =>
      dispatch(clearData(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllocationPage);
