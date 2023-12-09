import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {connect} from 'react-redux';
import {returnNumeric} from '../../../redux/componentCommunication/action/ComponentCommunicationAction';

function money_round(num) {
  return Math.floor(num * 100) / 100;
}

function NumberEntry(props) {
  const navigation = useNavigation();
  const [amount, setAmount] = useState(0.0);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#555B6E',
      justifyContent: 'flex-start',
    },
    bottomBarView: {
      height: 100,
    },
    amountStyle: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    otherPartsStyle: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      flex: 5,
    },
    otherPartsSectionStyle: {
      marginTop: 20,

      width: '50%',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignContent: 'space-between',
          margin: 20,
          marginTop: '50%',
        }}>
        <View style={styles.amountStyle}>
          <View style={{flex: 1, display: 'flex', alignItems: 'center'}}>
            <Text style={{color: '#BEE3DB', fontSize: 50, alignSelf: 'center'}}>
              Amount Test
            </Text>
            <View>
              <TextInput
                defaultValue={String(props.amount === 0.0 ? '' : props.amount)}
                pointerEvents={'none'}
                placeholder={'0.00'}
                selectTextOnFocus={true}
                autoFocus={true}
                onSubmitEditing={event => {}}
                onEndEditing={event => {
                  navigation.goBack();
                }}
                onChangeText={text => {
                  if (!isNaN(parseInt(text))) {
                    props.returnNumeric(money_round(text));
                  } else {
                    props.returnNumeric(money_round(0.0));
                  }
                }}
                keyboardType={'numeric'}
                style={{
                  color: '#BEE3DB',
                  fontSize: 45,
                  textAlign: 'center',
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    amount: state.communication.numeric,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    returnNumeric: numeric => dispatch(returnNumeric(numeric)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NumberEntry);
