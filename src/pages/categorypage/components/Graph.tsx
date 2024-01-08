import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BarGraph from "./barGraph.tsx";
import {IStatisticsItem} from "../../../redux/statistics/types/StatisticsTypes.tsx";

function Graph(props: any)
{
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
    let barGraphData: any[] = [{
        x: "Jan",
        y: 40,

    },
        {
            x: "FEB",
            y: 20,

        }
        ,
        {
            x: "MCH",
            y: 10,

        },
        ,
        {
            x: "MCH",
            y: 10,

        },
        ,
        {
            x: "MCH",
            y: 10,

        },
        ,
        {
            x: "MCH",
            y: 10,

        }
    ];




    let graphPeriods: string [] = [
        "Available",
        "Allocated",
        "Spent"
    ]

    let datePeriods: number [] = [
        7,
        31,
        186
    ]
    const [graphPeriodIndex, setGraphPeriodIndex] = useState(0)
    const [data, setData] = useState(()=> {
        if( props.categoryID in props.statistics)
        {
            return (props.statistics[props.categoryID][graphPeriods[graphPeriodIndex].toLowerCase()].map((value : IStatisticsItem, key : string)=> {

                return({x: months[new Date(value.timestamp).getMonth()],
                    y: value.value})
            }))
        }else {
            return([])
        }
    })

    useEffect(() =>
              {

                  if( props.categoryID in props.statistics)
                  {

                      setData(props.statistics[props.categoryID][graphPeriods[graphPeriodIndex].toLowerCase()].map((value : IStatisticsItem, key : string)=> {

                         return({x: months[new Date(value.timestamp).getMonth()],
                          y: value.value})
                      }).slice(props.statistics[props.categoryID][graphPeriods[graphPeriodIndex].toLowerCase()].length - 1 > 6?props.statistics[props.categoryID][graphPeriods[graphPeriodIndex].toLowerCase()].length - 1 - 6 : 0, props.statistics[props.categoryID][graphPeriods[graphPeriodIndex].toLowerCase()].length - 1 ))
                  }else {
                      setData([])
                  }

              }, [graphPeriodIndex]);


    const width = Dimensions.get('window').width
    const height = 220
    return (
        <View style={{margin: 10}}>
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <View
                    style={{
                        width: '95%',
                        height: '100%',
                        borderRadius: 20,

                    }}>


                    <View
                        style={{

                            height: '25%',
                            display: 'flex',
                            width: '95%',
                            justifyContent: 'center',
                            alignItems: 'flex-end',

                        }}>
                        <View style={{
                            backgroundColor: '#282828',

                            width: 100,
                            height: 25,
                            borderRadius: 5,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <TouchableOpacity onPress={() =>
                            {
                                setGraphPeriodIndex(graphPeriodIndex < graphPeriods.length - 1 ? graphPeriodIndex + 1 : 0)
                            }} style={{}}>
                                <Text style={{
                                    color: '#E9EEEA',
                                    textAlign: 'center',
                                    fontSize: 15
                                }}>
                                    {graphPeriods[graphPeriodIndex]}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{
                            color: '#555B6E',
                            fontSize: 30,
                            fontWeight: 'bold'
                        }}>
                            {props.categoryData[graphPeriods[graphPeriodIndex].toLowerCase() === 'spent' ? "periodSpent" : graphPeriods[graphPeriodIndex].toLowerCase()]}
                        </Text>
                    </View>


                    <View style={{
                        width: '95%',
                        height: '80%',
                        borderRadius: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {
                            data.length > 0 &&
                        <BarGraph data={data}/>}
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Graph;
