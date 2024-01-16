import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  IComponentCommunicationAction,
  returnDate,
  returnID,
  returnIndex,
  returnItemKey,
  returnItemSelected,
  returnNumeric,
  returnText,
} from '../../../redux/componentCommunication/action/ComponentCommunicationAction';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
function TopBar(props: any) {
  const Styles = StyleSheet.create({
    container: {
      height: 30,
      width: '100%',
      display: 'flex',

      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    pageNameContainer: {
      flex: 3,
      display: 'flex',

      height: '100%',
      flexDirection: 'column',
      paddingLeft: 10,
    },
  });

  return (
    <View style={Styles.container}>
      <View style={Styles.pageNameContainer}>
        <Text style={{color: '#282828', fontSize: 25}}>
          {props.categoryName}
        </Text>
        <Text style={{color: '#282828', fontSize: 15}}>
          {props.categoryFrequency}
        </Text>
      </View>

      <View style={{width: 50, height: '100%'}}>
        <View style={{width: 35, height: 35}}>
          <Icon
            name="edit"
            style={{
              color: '#E9EEEA',
              backgroundColor: '#282828',
              padding: 5,
              borderRadius: 100,
            }}
            onPress={() => {
              const transactionData: IComponentCommunicationAction = {
                index: props.frequencyList.findIndex(
                  x =>
                    x.toLowerCase() ===
                    props.categories[props.categoryId].frequency.toLowerCase(),
                ),
                from: '',
                to: '',
                date: 0,
                id: props.categoryId,
                itemSelected: props.categories[props.categoryId].icon,
                payee: '',
                text: props.categories[props.categoryId].name,
                type: '',
                number: props.categories[props.categoryId].budget,
                itemKey: '',
              };

              props.returnItemSelected(transactionData);
              props.returnNumeric(transactionData);
              props.returnText(transactionData);
              props.returnId(transactionData);
              props.returnIndex(transactionData);
              props.categoryEditingRef.current?.scrollTo(MAX_TRANSLATE_Y);
            }}
            size={25}
          />
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    available: state.balance.available,
    categories: state.categories,
    frequencyList: state.appDetail.categoryFrequency,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    returnItemSelected: (item: IComponentCommunicationAction) =>
      dispatch(returnItemSelected(item)),
    returnItemKey: (item: IComponentCommunicationAction) =>
      dispatch(returnItemKey(item)),
    returnNumeric: (numeric: IComponentCommunicationAction) =>
      dispatch(returnNumeric(numeric)),
    returnText: (numeric: IComponentCommunicationAction) =>
      dispatch(returnText(numeric)),
    returnDate: (numeric: IComponentCommunicationAction) =>
      dispatch(returnDate(numeric)),
    returnId: (numeric: IComponentCommunicationAction) =>
      dispatch(returnID(numeric)),
    returnIndex: (numeric: IComponentCommunicationAction) =>
      dispatch(returnIndex(numeric)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
