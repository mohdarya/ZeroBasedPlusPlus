import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text as RNText} from 'react-native';
import {RootState} from "../../../redux/rootReducer.tsx";
import {ISetBalanceJobTime} from "../../../redux/appDetails/types/AppDetailTypes.tsx";
import {setDailyBalanceJobTime} from "../../../redux/appDetails/actions/AppDetailActions.tsx";
import {connect} from "react-redux";
import {Circle,Text, Svg} from "react-native-svg";
import {rotate} from "@shopify/react-native-skia";

interface SpendingChartProps {
    period: string,
    remaining: number
    available: number
}


function SpendingChart(props: SpendingChartProps) {

    const radius = 100;
    const strokeW = radius * 2;
    const circumf = 2 * Math.PI * radius;



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
                            height: 120,
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
                                <RNText style={{color: '#E9EEEA', textAlign: 'center'}}>
                                    {props.period}
                                </RNText>
                            </View>
                        </View>
                        <RNText style={{color: '#282828', fontSize: 25, fontWeight: 'bold'}}>
                            { props.period + " Spending"}
                        </RNText>
                        <RNText style={{color: '#282828', fontSize: 55, fontWeight: 'bold'}}>
                            {props.available - props.remaining}
                        </RNText>
                    </View>
                    <View style={{width: '90%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
                        <Svg height={'100%'} width={'100%'} >
                        < Circle  cx={'-110'} cy={'-245'} fill={'none'} r={radius} strokeWidth={10}
                                  transform="rotate(270)scale(1, -1)"
                                  strokeDasharray={(((props.available - props.remaining) /props.available ))* circumf + ',' + circumf}
                                  strokeDashoffset={0}
                                  stroke={'#282828'}/>
                            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                            <Text   fill="#282828"
                                    stroke="none"
                                    fontSize="46"
                                    fontWeight="bold"
                                    x={'245'} y={'110'}
                                    textAnchor="middle"
                                    alignmentBaseline="middle">
                                { (((props.available - props.remaining) /props.available ) * 100).toFixed(2) + "%"}
                            </Text>
                            </View>
                        </Svg>
                    </View>
                </View>
            </View>
        </View>
    );
}
const mapStateToProps = (state : RootState, ownProp: SpendingChartProps) => {


    return {
        remaining: Object.values(  Object.fromEntries(Object.entries(state.categories).filter( ([key, value]) => value.frequency ===ownProp.period.toLowerCase()))).reduce((accumulator, value) => {
            return accumulator + value.periodSpent;
        }, 0),

        available: Object.values(  Object.fromEntries(Object.entries(state.categories).filter( ([key, value]) => value.frequency ===ownProp.period.toLowerCase()))).reduce((accumulator, value) => {
            return accumulator + value.available;
        }, 0),

    };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        setBalanceJobTime: (data: ISetBalanceJobTime) => dispatch(setDailyBalanceJobTime(data)),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(SpendingChart);
