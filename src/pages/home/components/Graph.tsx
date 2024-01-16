import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {LineChart} from 'react-native-wagmi-charts';
import {RootState} from '../../../redux/rootReducer.tsx';

function Graph(props: any) {
  let graphPeriods: string[] = ['Last Week', 'Last Month', 'Last 6 Months'];
  let datePeriods: number[] = [7, 31, 186];

  const [data, setData] = useState(props.statistics.daily);
  const [dataToShow, setDataToShow] = useState('daily');
  const [graphPeriodIndex, setGraphPeriodIndex] = useState(0);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#D8DFE9',
      width: '100%',
      height: '100%',
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
    },
    availableViewWrapper: {
      height: '25%',
      width: '100%',
      margin: 15,
    },
    activeDataToShow: {
      backgroundColor: '#282828',
      color: '#B1BBAE',
    },
    defaultDataToShow: {
      backgroundColor: '#B1BBAE',
      width: 75,
      height: 25,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    defaultDataToShowText: {
      color: '#282828',
      textAlign: 'center',
      fontSize: 15,
    },
    availableText: {color: '#282828', fontSize: 20},
    availableAmount: {color: '#282828', fontSize: 35},
    graphPeriodView: {
      backgroundColor: '#B1BBAE',
      width: 130,
      height: 25,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    graphPeriodText: {color: '#282828', textAlign: 'center', fontSize: 15},
    lineChartView: {
      height: '50%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    lineChartAmountText: {
      backgroundColor: '#282828',
      borderRadius: 5,
      color: '#CFE1CB',
      fontSize: 13,
    },
    lineChartDateText: {
      backgroundColor: '#282828',
      borderRadius: 5,
      color: '#CFE1CB',
      fontSize: 12,
      padding: 4,
    },
    lineChartDataToShowView: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  });

  useEffect(() => {
    setData(
      props.statistics[dataToShow].slice(
        props.statistics[dataToShow].length - 1 > datePeriods[graphPeriodIndex]
          ? props.statistics[dataToShow].length -
              1 -
              datePeriods[graphPeriodIndex]
          : 0,
        props.statistics[dataToShow].length - 1,
      ),
    );
  }, [dataToShow, graphPeriodIndex, props.statistics]);
  return (
    <View style={styles.container}>
      <View style={styles.availableViewWrapper}>
        <Text style={styles.availableText}>Available</Text>
        <Text style={styles.availableAmount}>{props.available}</Text>

        <TouchableOpacity
          onPress={() => {
            setGraphPeriodIndex(
              graphPeriodIndex < graphPeriods.length - 1
                ? graphPeriodIndex + 1
                : 0,
            );
          }}
          style={styles.graphPeriodView}>
          <Text style={styles.graphPeriodText}>
            {graphPeriods[graphPeriodIndex]}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lineChartView}>
        {data.length > 0 && (
          <LineChart.Provider data={data}>
            <LineChart height={110} width={340}>
              <LineChart.Path />

              <LineChart.CursorCrosshair>
                <LineChart.Tooltip
                  textStyle={styles.lineChartAmountText}
                  position="top"
                />
                <LineChart.Tooltip position="bottom">
                  <LineChart.DatetimeText
                    style={styles.lineChartDateText}
                    options={{
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    }}
                  />
                </LineChart.Tooltip>
              </LineChart.CursorCrosshair>
            </LineChart>
          </LineChart.Provider>
        )}
      </View>

      <View style={styles.lineChartDataToShowView}>
        <TouchableOpacity
          onPress={() => {
            setDataToShow('total');
          }}
          style={[
            styles.defaultDataToShow,
            dataToShow === 'total' ? styles.activeDataToShow : null,
          ]}>
          <Text
            style={[
              styles.defaultDataToShowText,
              dataToShow === 'total' ? styles.activeDataToShow : null,
            ]}>
            Balance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setDataToShow('monthly');
          }}
          style={[
            styles.defaultDataToShow,
            dataToShow === 'monthly' ? styles.activeDataToShow : null,
          ]}>
          <Text
            style={[
              styles.defaultDataToShowText,
              dataToShow === 'monthly' ? styles.activeDataToShow : null,
            ]}>
            Monthly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setDataToShow('weekly');
          }}
          style={[
            styles.defaultDataToShow,
            dataToShow === 'weekly' ? styles.activeDataToShow : null,
          ]}>
          <Text
            style={[
              styles.defaultDataToShowText,
              dataToShow === 'weekly' ? styles.activeDataToShow : null,
            ]}>
            Weekly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setDataToShow('daily');
          }}
          style={[
            styles.defaultDataToShow,
            dataToShow === 'daily' ? styles.activeDataToShow : null,
          ]}>
          <Text
            style={[
              styles.defaultDataToShowText,
              dataToShow === 'daily' ? styles.activeDataToShow : null,
            ]}>
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
    statistics: state.statistics,
  };
};
export default connect(mapStateToProps)(Graph);
