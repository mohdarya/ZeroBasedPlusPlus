import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {RefObject, useState} from 'react';
import {BottomSheetRefProps} from '../components/bottomSheet.tsx';
import {
  clearData,
  IComponentCommunicationAction,
} from '../../../redux/componentCommunication/action/ComponentCommunicationAction.tsx';
import CategoryCreationPage from '../../categorycreation/CategoryCreationPage.tsx';
import TransferPage from '../../transferpage/TransferPage.tsx';
import TransactionAddition from '../../transactionAddition/TransactionAddition.tsx';
import AllocationPage from '../../allocation/AllocationPage.tsx';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';

interface BottomSheetSelectionProp {
  bottomSheetRef: RefObject<BottomSheetRefProps>;
  clearData: (data: IComponentCommunicationAction) => {};
}

function BottomSheetSelection(props: BottomSheetSelectionProp) {
  const {height: SCREEN_HEIGHT} = Dimensions.get('window');
  const [modalVisible, setModalVisible] = useState(false);
  const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

  const [viewTrigger, setViewTrigger] = useState<{
    categoryCreation: boolean;
    transactionCreation: boolean;
    allocation: boolean;
    fundsTransfer: boolean;
  }>({
    categoryCreation: false,
    transactionCreation: false,
    allocation: false,
    fundsTransfer: false,
  });
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      backgroundColor: '#B1BBAE',
      marginTop: 25,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    buttonSelection: {
      display: 'flex',
      height: '10%',
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonStyle: {
      borderRadius: 5,
      width: 80,
      height: 40,
      backgroundColor: '#282828',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionView: {
      height: '90%',
      width: '95%',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.buttonSelection}>
        <TouchableOpacity
          onPress={() => {
            setViewTrigger({
              categoryCreation: true,
              transactionCreation: false,
              allocation: false,
              fundsTransfer: false,
            });
            props.bottomSheetRef.current?.scrollTo(MAX_TRANSLATE_Y);
          }}
          style={styles.buttonStyle}>
          <Text style={{width: 'auto', fontSize: 15, color: '#FAF9F9'}}>
            Category
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setViewTrigger({
              categoryCreation: false,
              transactionCreation: true,
              allocation: false,
              fundsTransfer: false,
            });
            props.bottomSheetRef.current?.scrollTo(MAX_TRANSLATE_Y);
          }}
          style={styles.buttonStyle}>
          <Text style={{width: 'auto', fontSize: 13, color: '#FAF9F9'}}>
            Transaction
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setViewTrigger({
              categoryCreation: false,
              transactionCreation: false,
              allocation: true,
              fundsTransfer: false,
            });
            props.bottomSheetRef.current?.scrollTo(MAX_TRANSLATE_Y);
          }}
          style={styles.buttonStyle}>
          <Text style={{width: 'auto', fontSize: 15, color: '#FAF9F9'}}>
            Allocation
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setViewTrigger({
              categoryCreation: false,
              transactionCreation: false,
              allocation: false,
              fundsTransfer: true,
            });
            props.bottomSheetRef.current?.scrollTo(MAX_TRANSLATE_Y);
          }}
          style={styles.buttonStyle}>
          <Text style={{width: 'auto', fontSize: 15, color: '#FAF9F9'}}>
            Transfer
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.actionView}>
        {viewTrigger.categoryCreation && (
          <CategoryCreationPage
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            bottomSheetRef={props.bottomSheetRef}
          />
        )}

        {viewTrigger.fundsTransfer && (
          <TransferPage bottomSheetRef={props.bottomSheetRef} />
        )}

        {viewTrigger.allocation && (
          <AllocationPage bottomSheetRef={props.bottomSheetRef} />
        )}
        {viewTrigger.transactionCreation && (
          <TransactionAddition
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            bottomSheetRef={props.bottomSheetRef}
          />
        )}
      </View>

      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: '30%',
            position: 'absolute',
            top: '30%',
            left: '5%',
            borderRadius: 15,
          }}>
          <View style={{height: '60%'}}>
            <Text style={{fontSize: 40, color: '#282828', textAlign: 'center'}}>
              Please Fill All the Fields
            </Text>
          </View>
          <View
            style={{
              width: '100%',

              flexDirection: 'row',
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Icon
              name="done"
              style={{
                color: '#E9EEEA',
                backgroundColor: '#282828',
                borderRadius: 100,
                width: 50,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              size={50}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    clearData: (data: IComponentCommunicationAction) =>
      dispatch(clearData(data)),
  };
};
export default connect(null, mapDispatchToProps)(BottomSheetSelection);
