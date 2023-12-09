import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TransactionItem from './TransactionItem';
import {connect} from "react-redux";

function TransactionSection(props) {


    const Styles = StyleSheet.create({
        container: {
            height: 60,
            width: '100%',
            display: 'flex',


            flexDirection: 'row',

            alignItems: 'center',
            justifyContent: 'center',


        },


    });
    function loadData()
    {



        let categoryArray = makeCategoryArray()
        return categoryArray.map((value, key) =>
            <TransactionItem key={key} name={value.name} amount={value.amount}/>);

    }

    function makeCategoryArray()
    {
        let temp = [];
        for (let key in props.transactions)
        {

            let tempItem = props.transactions[key];
            tempItem = {
                ...tempItem,
                categoryID: key,
            };
            temp.push(tempItem);

        }

        return temp;
    }




    return (
        <View style={{margin: 10}}>
            <Text style={{color: '#BEE3DB', fontSize: 24, margin: 0, marginBottom: 10}}>
                Transactions
            </Text>
            <ScrollView contentContainerStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {loadData()}
            </ScrollView>
        </View>
    );

}


const mapStateToProps = (state) =>
{
    return {

        transactions: state.transactions.transactions,
    };
};
export default connect(mapStateToProps)(TransactionSection);

