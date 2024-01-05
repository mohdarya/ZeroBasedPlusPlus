import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {LineChart} from "react-native-wagmi-charts";
import {center} from "@shopify/react-native-skia";
import {useAppState} from "@react-native-community/hooks";
import {useIsFocused} from "@react-navigation/native";
import {RootState} from "../../../redux/rootReducer.tsx";




function Graph(props : any) {


    const [data,setData] = useState(props.statistics.daily);
    const [dataToShow, setDataToShow] = useState('daily');
    const styles = StyleSheet.create({

        activeAction: {
            backgroundColor: '#282828',
            color: '#B1BBAE'
        }

    });


    useEffect(() => {
        setData(props.statistics[dataToShow]);
    }, [dataToShow]);
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

          <View style={{height: '50%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <LineChart.Provider data={data}>
                  <LineChart height={110} width={340}>
                      <LineChart.Path />

                      <LineChart.CursorCrosshair >
                          <LineChart.Tooltip   textStyle={{
                              backgroundColor: '#282828',
                              borderRadius: 5,
                              color: '#CFE1CB',
                              fontSize: 13,
                          }} position="top"/>
                              <LineChart.Tooltip   position="bottom">

                                  <LineChart.DatetimeText  style={{
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
            <TouchableOpacity onPress={() => { setDataToShow("monthly")}} style={[{
                backgroundColor: '#B1BBAE',

                width: 90,
                height: 25,
                borderRadius: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },  dataToShow === "monthly" ? styles.activeAction : null]}>
              <Text  style={[{color: '#282828', textAlign: 'center', fontSize: 15}, dataToShow === "monthly" ? styles.activeAction : null]}>
                Month
              </Text>
            </TouchableOpacity>
              <TouchableOpacity onPress={() => { setDataToShow("weekly")}}  style={[{
                  backgroundColor: '#B1BBAE',

                  width: 90,
                  height: 25,
                  borderRadius: 5,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
              },  dataToShow === "weekly" ? styles.activeAction : null]}>
                  <Text  style={[{color: '#282828', textAlign: 'center', fontSize: 15}, dataToShow === "weekly" ? styles.activeAction : null]}>
                      Weekly
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setDataToShow("daily")}}  style={[{
                  backgroundColor: '#B1BBAE',

                  width: 90,
                  height: 25,
                  borderRadius: 5,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
              },  dataToShow === "daily" ? styles.activeAction : null]}>
                  <Text  style={[{color: '#282828', textAlign: 'center', fontSize: 15}, dataToShow === "daily" ? styles.activeAction : null]}>
                      Daily
                  </Text>
              </TouchableOpacity>
          </View>
        </View>
  );
}
const mapStateToProps = (state: RootState) => {
  return {
    available: state.balance.available,
      statistics: state.statistics
  };
};
export default connect(mapStateToProps)(Graph);
