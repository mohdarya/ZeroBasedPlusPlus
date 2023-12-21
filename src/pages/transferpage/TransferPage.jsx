import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TopBar from './components/TopBar';
import BottomBar from '../shared/components/BottomBar';
import Buttons from './components/Buttons';
import CategoryItem from './components/CategoryLIstItem';

function TransferPage(props) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: 'flex',
            height: '100%',
            width: '100%',
            flexDirection: 'column',
            backgroundColor: '#555B6E',
            justifyContent: 'space-between',
        },
        bottomBarView: {
            height: 60,
            marginBottom: '5%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        spendingInfoView:
            {
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '65%',
                width: '100%',

            }
        ,
        transactionListView:
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '10%',
                width: '100%',
                marginBottom: '30%',

            },
        amountDetailView: {
            width: '90%',

            flexDirection: 'row',
            height: '20%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 5,
        },
        amountView: {
            borderRadius: 20,
            width: '55%',
            height: '100%',
            backgroundColor: '#FAF9F9',
        },
        frequencyView: {
            borderRadius: 20,
            width: '40%',
            height: '100%',
            backgroundColor: '#FAF9F9',
        },

    });

    return (
        <View style={styles.container}>
            <TopBar/>

            <View style={{width: '100%', height: '80%'}}>
                <View style={styles.spendingInfoView}>
                    <View style={{
                        backgroundColor: 'white',
                        height: 65,
                        width: '60%',
                        borderRadius: 15,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>


                        <Text style={{width: '30%', textAlign: 'center', fontSize: 20}}>
                            Amount
                        </Text>
                        <Text style={{width: '30%', textAlign: 'center', fontSize: 20}}>
                            9
                        </Text>

                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 120,
                        width: '90%',
                        borderRadius: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',

                    }}>
                        <Text style={{
                            width: '100%',
                            textAlign: 'left',
                            fontSize: 20,
                            marginLeft: 20,
                        }}>
                            From Category
                        </Text>
                        <View style={{width: '90%'}}>
                            <CategoryItem name={'test'} frequency={'Daily'}
                                          available={'2000'}/>
                        </View>

                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 120,
                        width: '90%',
                        borderRadius: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}>

                        <Text style={{
                            width: '100%',
                            textAlign: 'left',
                            fontSize: 20,
                            marginLeft: 20,
                        }}>
                            To Category
                        </Text>
                        <View style={{width: '90%'}}>
                            <CategoryItem name={'test'} frequency={'Daily'}
                                          available={'2000'}/>
                        </View>

                    </View>

                </View>
                <View style={styles.transactionListView}>
                    <Buttons/>
                </View>
            </View>
            <View style={styles.bottomBarView}>
                <BottomBar page="TransferPage"/>
            </View>
        </View>
    );
}

export default TransferPage;
