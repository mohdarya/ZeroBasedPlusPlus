import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TransactionItem from './TransactionItem.tsx';
import {connect} from 'react-redux';

function TransactionSection(props: any) {
  const [monthSelected, setMonthSelected] = useState(new Date().getMonth());
  const [transactionData, setTransactionData] = useState(
    props.transactions
      .filter(
        value =>
          value.category === props.categoryId &&
          new Date(value.date).getMonth() === monthSelected,
      )
      .map((value, key) => (
        <TransactionItem
          key={key}
          name={value.payee}
          transactionEditingRef={props.transactionEditingRef}
          categoryId={value.category}
          dateTime={value.date}
          date={new Date(value.date).toLocaleDateString()}
          amount={value.amount}
          id={value.id}
          type={value.type}
          categoryIcon={
            value.category !== 'Available'
              ? props.categories[value.category].icon
              : 'attach-money'
          }
        />
      )),
  );
  let months: {
    [key: number]: string;
  } = {
    0: 'JAN',
    1: 'FEB',
    2: 'MAR',
    3: 'APR',
    4: 'MAY',
    5: 'JUN',
    6: 'JUL',
    7: 'AUG',
    8: 'SEP',
    9: 'OCT',
    10: 'NOV',
    11: 'DEC',
  };

  const Styles = StyleSheet.create({
    container: {
      borderRadius: 25,
      width: '95%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    monthsContainerView: {
      backgroundColor: '#B1BBAE',
      width: '100%',
      height: 35,
      borderRadius: 10,
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    monthContainerBean: {
      backgroundColor: '#CFE1CB',
      width: 50,
      height: 20,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeMonthContainer: {
      backgroundColor: '#282828',
      width: 50,
      height: 20,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeMonthText: {
      color: '#CFE1CB',
    },
    transactionView: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    transactionSectionTextView: {
      color: '#555B6E',
      width: 110,
      fontSize: 18,
      marginTop: 10,
      marginLeft: 15,
      marginBottom: 15,
      fontWeight: 'bold',
    },
    transactionScrollView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
  });

  useEffect(() => {
    setTransactionData(
      props.transactions
        .filter(
          value =>
            value.category === props.categoryId &&
            new Date(value.date).getMonth() === monthSelected,
        )
        .map((value, key) => (
          <TransactionItem
            key={key}
            name={value.payee}
            transactionEditingRef={props.transactionEditingRef}
            categoryId={value.category}
            dateTime={value.date}
            date={new Date(value.date).toLocaleDateString()}
            amount={value.amount}
            id={value.id}
            type={value.type}
            categoryIcon={
              value.category !== 'Available'
                ? props.categories[value.category].icon
                : 'attach-money'
            }
          />
        )),
    );
  }, [monthSelected, props.transactions]);

  function generateMonthElements() {
    let response: Element[] = [];

    for (let i: number = 0; i < 6; i++) {
      let date: Date = new Date();
      date.setMonth(date.getMonth() - i);
      response.push(
        <TouchableOpacity
          key={i}
          onPress={() => {
            setMonthSelected(date.getMonth());
          }}
          style={[
            Styles.monthContainerBean,
            monthSelected === date.getMonth()
              ? Styles.activeMonthContainer
              : {},
          ]}>
          <Text
            style={[
              {
                color: '#282828',
                textAlign: 'center',
              },
              monthSelected === date.getMonth() ? Styles.activeMonthText : {},
            ]}>
            {months[date.getMonth()]}
          </Text>
        </TouchableOpacity>,
      );
    }

    return response.reverse();
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.monthsContainerView}>{generateMonthElements()}</View>
      <View style={Styles.transactionView}>
        <Text style={Styles.transactionSectionTextView}>Transactions</Text>
      </View>
      <ScrollView contentContainerStyle={Styles.transactionScrollView}>
        {transactionData}
      </ScrollView>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions.transactions,
    categories: state.categories,
  };
};
export default connect(mapStateToProps)(TransactionSection);
