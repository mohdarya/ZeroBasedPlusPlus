import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text as RNText} from 'react-native';
import {RootState} from "../../../redux/rootReducer.tsx";
import {ISetBalanceJobTime} from "../../../redux/appDetails/types/AppDetailTypes.tsx";
import {setDailyBalanceJobTime} from "../../../redux/appDetails/actions/AppDetailActions.tsx";
import {connect} from "react-redux";
import {Circle, Text, Svg} from "react-native-svg";
import {rotate} from "@shopify/react-native-skia";
import periodSpentPage from "../PeriodSpentPage.tsx";

interface SpendingChartProps
{
    period: string,
    remaining: number
    available: number
    budget: number,
    periodAvailable: number,
}


function SpendingChart(props: SpendingChartProps)
{

    const radius = 100;
    const strokeW = radius * 2;
    const circumf = 2 * Math.PI * radius;

    let remaining = 0;
    let percentageSpent: number = 0
    let circlePercent: number = 0

        remaining = props.periodAvailable - props.remaining;
        percentageSpent = ((props.periodAvailable - props.remaining) / props.periodAvailable) * 100
        circlePercent = ((props.periodAvailable - props.remaining) / props.periodAvailable) * circumf



    if (isNaN(percentageSpent))
    {
        percentageSpent = 0
    } else
    {
        if (percentageSpent > 100)
        {
            percentageSpent = 100
        } else if (percentageSpent < 0)
        {
            percentageSpent = 0
        }
    }
    if (isNaN(circlePercent))
    {
        circlePercent = 0
    } else
    {
        if (circlePercent > circumf)
        {
            circlePercent = circumf
        } else if (circlePercent < 0)
        {
            circlePercent = 0
        }
    }


    return (
        <View style={{
            margin: 10,
            width: '100%',
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
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                            <View style={{
                                backgroundColor: '#282828',
                                width: 80,
                                height: 25,
                                borderRadius: 5,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <RNText style={{
                                    color: '#E9EEEA',
                                    textAlign: 'center'
                                }}>
                                    {props.period}
                                </RNText>
                            </View>
                        </View>
                        <RNText style={{
                            color: '#282828',
                            fontSize: 25,
                            fontWeight: 'bold'
                        }}>
                            {"Remaining " +props.period}
                        </RNText>
                        <RNText style={{
                            color: '#282828',
                            fontSize: 55,
                            fontWeight: 'bold'
                        }}>
                            {remaining}
                        </RNText>
                    </View>
                    <View style={{
                        width: '90%',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}>
                        <Svg height={'100%'} width={'100%'}>
                            < Circle cx={'-110'} cy={'-245'} fill={'none'} r={radius} strokeWidth={10}
                                     transform="rotate(270)scale(1, -1)"

                                     strokeDasharray={circlePercent + ',' + circumf}
                                     strokeDashoffset={0}
                                     stroke={'#282828'}/>
                            <View style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%'
                            }}>
                                <Text fill="#282828"
                                      stroke="none"
                                      fontSize="46"
                                      fontWeight="bold"
                                      x={'245'} y={'110'}
                                      textAnchor="middle"
                                      alignmentBaseline="middle">
                                    {(percentageSpent).toFixed(2) + "%"}
                                </Text>
                            </View>
                        </Svg>
                    </View>
                </View>
            </View>
        </View>
    );
}

const mapStateToProps = (state: RootState, ownProp: SpendingChartProps) =>
{


    return {
        remaining: Object.values(Object.fromEntries(Object.entries(state.categories)
                                                          .filter(([key, value]) => value.frequency.toLowerCase() === ownProp.period.toLowerCase())))
                         .reduce((accumulator, value) =>
                                 {
                                     return accumulator + value.periodSpent;
                                 }, 0),

        available: Object.values(Object.fromEntries(Object.entries(state.categories)
                                                          .filter(([key, value]) => value.frequency.toLowerCase() === ownProp.period.toLowerCase())))
                         .reduce((accumulator, value) =>
                                 {
                                     return accumulator + value.available;
                                 }, 0),
        periodAvailable: Object.values(Object.fromEntries(Object.entries(state.categories)
                                                       .filter(([key, value]) => value.frequency.toLowerCase() === ownProp.period.toLowerCase())))
                      .reduce((accumulator, value) =>
                              {
                                  return accumulator + value.periodAvailable;
                              }, 0),


    };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) =>
{
    return {
        setBalanceJobTime: (data: ISetBalanceJobTime) => dispatch(setDailyBalanceJobTime(data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SpendingChart);
