import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootState} from "../../../redux/rootReducer.tsx";
import {ISetBalanceJobTime} from "../../../redux/appDetails/types/AppDetailTypes.tsx";
import {setBalanceJobTime} from "../../../redux/appDetails/actions/AppDetailActions.tsx";
import {connect} from "react-redux";

interface SpendingChartProps {
    period: string,
    remaining: number
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
                    <View
                        style={{
                            height: 150,
                            margin: 15,
                        }}>
                        <View
                            style={{width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
                            <View style={{
                                backgroundColor: '#282828',
                                width: 80,
                                height: 25,
                                borderRadius: 5,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{color: '#E9EEEA', textAlign: 'center'}}>
                                    {props.period}
                                </Text>
                            </View>
                        </View>
                        <Text style={{color: '#282828', fontSize: 36, fontWeight: 'bold'}}>
                            { props.period + " Spending"}
                        </Text>
                        <Text style={{color: '#282828', fontSize: 64, fontWeight: 'bold'}}>
                            {props.remaining}
                        </Text>
                    </View>
                    <View style={{width: '90%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
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
const mapStateToProps = (state : RootState, ownProp: SpendingChartProps) => {


    return {
        remaining: Object.values(  Object.fromEntries(Object.entries(state.categories).filter( ([key, value]) => value.frequency ===ownProp.period.toLowerCase()))).reduce((accumulator, value) => {
            return accumulator + value.available;
        }, 0),

    };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        setBalanceJobTime: (data: ISetBalanceJobTime) => dispatch(setBalanceJobTime(data)),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(SpendingChart);
