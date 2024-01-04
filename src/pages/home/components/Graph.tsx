import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {LineChart} from "react-native-wagmi-charts";
import {center} from "@shopify/react-native-skia";




function Graph(props : any) {

    let data : {value: number,
        timestamp: number}[] = [
        { value: 100,
            timestamp: new Date('2023-07-16T00:00:00.000Z').getTime()},
        { value: 23,
            timestamp: new Date('2023-07-19T14:23:21.723Z').getTime()},
        { value: 299,
            timestamp: new Date('2023-07-19T14:23:31.384Z').getTime() },


    ]

  return (

        <View
          style={{
            backgroundColor: '#D8DFE9',
            width: '100%',
            height: '100%',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <View
            style={{
              height: '25%',
                width: '100%',
              margin: 15,
            }}>
            <Text style={{color: '#282828', fontSize: 20}}>
              Available
            </Text>
            <Text style={{color: '#282828', fontSize: 35}}>
              {props.available}
            </Text>


          </View>

          <View style={{height: '50%', width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <LineChart.Provider data={data}>
                  <LineChart height={110} width={300}>
                      <LineChart.Path />
                      <LineChart.CursorCrosshair>
                          <LineChart.Tooltip   textStyle={{
                              backgroundColor: '#282828',
                              borderRadius: 5,
                              color: '#CFE1CB',
                              fontSize: 12,
                              padding: 4,
                          }} />
                              <LineChart.Tooltip  position="bottom">

                                  <LineChart.DatetimeText style={{
                                      backgroundColor: '#282828',
                                      borderRadius: 5,
                                      color: '#CFE1CB',
                                      fontSize: 12,
                                      padding: 4,
                                  }}
                                                          options={{
                                                              year: 'numeric',
                                                              month: 'numeric',
                                                              day: 'numeric',

                                                          }} />
                              </LineChart.Tooltip>
                      </LineChart.CursorCrosshair>
                  </LineChart>
              </LineChart.Provider>
          </View>

          <View style={{display: 'flex',flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center'}}>
            <View style={{backgroundColor: '#282828', width: 80, height: 25,borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#E9EEEA', textAlign: 'center'}}>
                Month
              </Text>
            </View>
            <View style={{backgroundColor: '#282828', width: 80, height: 25,borderRadius: 5,  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#E9EEEA', textAlign: 'center'}}>
                Week
              </Text>
            </View>
            <View style={{backgroundColor: '#282828', width: 80, height: 25,borderRadius: 5,  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#E9EEEA', textAlign: 'center'}}>
                Day
              </Text>
            </View>
          </View>
        </View>
  );
}
const mapStateToProps = state => {
  return {
    available: state.balance.available,
  };
};
export default connect(mapStateToProps)(Graph);
