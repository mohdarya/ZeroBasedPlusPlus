import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TransactionItem from './TransactionItem';
import {connect} from 'react-redux';

function TransactionSection(props : any) {

    const [monthSelected, setMonthSelected] = useState(new Date().getMonth())
  let months: {
    [key: number]: string
  } = {
    0: "JAN",
    1:"FEB",
    2:"MAR",
    3:"APR",
    4:"MAY",
    5:"JUN",
    6:"JUL",
    7:"AUG",
    8:"SEP",
    9:"OCT",
    10:"NOV",
    11:"DEC"
  };


  const Styles = StyleSheet.create({
    container: {
      height: 60,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
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
  });

  function loadData() {
    return props.transactions.filter((value) => value.category === props.categoryId).map((value, key) => (
        <TransactionItem key={key} name={value.payee} date={value.date}
                         amount={value.amount}/>
    ));
  }

    function generateMonthElements()
    {

        let response: Element[] = []


        for (let i: number = 0; i < 6; i++)
        {
            let date : Date = new Date;
            date.setMonth(date.getMonth() - i)
            response.push(<TouchableOpacity onPress={() => {setMonthSelected(date.getMonth())}} style={[Styles.monthContainerBean,monthSelected === date.getMonth() ?Styles.activeMonthContainer : {}]}>
                <Text  key={i} style={[{
                    color: '#282828',
                    textAlign: 'center'
                }, monthSelected === date.getMonth() ?Styles.activeMonthText : {}]}>
                    {months[ date.getMonth()]}
                </Text>
            </TouchableOpacity>)
        }

        return response.reverse()

    }



    return (
      <View
          style={{
            borderRadius: 25,
            width: '95%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        <View style={{
          backgroundColor: '#B1BBAE',
          width: '100%',
          height: 35,
          borderRadius: 10,
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>


            {generateMonthElements()}

        </View>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
          <Text
              style={{
                color: '#555B6E',
                width: 110,
                fontSize: 18,
                marginTop: 10,
                marginLeft: 15,
                marginBottom: 15,
                fontWeight: 'bold',
              }}>
            Transactions
          </Text>

        </View>
        <ScrollView
            contentContainerStyle={{

              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
          {loadData()}
        </ScrollView>
      </View>
  );
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions.transactions,
  };
};
export default connect(mapStateToProps)(TransactionSection);
