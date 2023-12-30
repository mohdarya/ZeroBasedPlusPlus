import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SpendingChartProps {
}


function SpendingChart(props: SpendingChartProps) {
    return (
        <View style={{
            margin: 10, width: '100%',
            height: '100%',
        }}>
            <View
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                <View
                    style={{

                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                    }}>
                    <View style={{height: '100%',width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{borderColor: '#282828', height: 200, width: 200, borderRadius: 100, borderWidth: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

                            <Text style={{textAlign: 'center', fontSize: 45}}>
                                100%
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SpendingChart;
