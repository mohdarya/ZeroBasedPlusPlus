import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SpendingChartProps {
}


function SpendingChart(props : SpendingChartProps) {
    return (
        <View style={{margin: 10,  width: '90%',
            height: '100%',}}>
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                <View
                    style={{
                        backgroundColor: '#FAF9F9',

                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                    }}>
                    <View
                        style={{
                            height: '25%',
                            margin: 15,
                        }}>
                        <Text style={{color: '#555B6E', fontSize: 15, fontWeight: 'bold'}}>
                            Spending Chart
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SpendingChart;
