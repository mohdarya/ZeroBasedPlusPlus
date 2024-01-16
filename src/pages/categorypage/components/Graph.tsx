import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BarGraph from './barGraph.tsx';
import {IStatisticsItem} from '../../../redux/statistics/types/StatisticsTypes.tsx';

function Graph(props: any) {
  const styles = StyleSheet.create({
    containerWrapper: {
      margin: 10,
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '95%',
      height: '100%',
      borderRadius: 20,
    },
    graphPeriodSelectionView: {
      height: '25%',
      display: 'flex',
      width: '95%',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    graphDetailTextView: {
      backgroundColor: '#282828',
      width: 100,
      height: 25,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    graphDetailText: {
      color: '#E9EEEA',
      textAlign: 'center',
      fontSize: 15,
    },
    graphDetailAmountView: {
      color: '#555B6E',
      fontSize: 30,
      fontWeight: 'bold',
    },
    barGraphView: {
      width: '95%',
      height: '80%',
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  let months: {
    [key: number]: string;
  } = {
    0: 'JAN',
    1: 'FEB',
    2: 'MAR',
    3: 'APR',
    4: 'MAY',
    5: 'JUN',
    6: 'JUL',
    7: 'AUG',
    8: 'SEP',
    9: 'OCT',
    10: 'NOV',
    11: 'DEC',
  };

  let graphPeriods: string[] = ['Available', 'Allocated', 'Spent'];
  const [graphPeriodIndex, setGraphPeriodIndex] = useState(0);
  const [data, setData] = useState(() => {
    if (props.categoryID in props.statistics) {
      return props.statistics[props.categoryID][
        graphPeriods[graphPeriodIndex].toLowerCase()
      ].map((value: IStatisticsItem) => {
        return {
          x: months[new Date(value.timestamp).getMonth()],
          y: value.value,
        };
      });
    } else {
      return [];
    }
  });
  useEffect(() => {
    if (props.categoryID in props.statistics) {
      setData(
        props.statistics[props.categoryID][
          graphPeriods[graphPeriodIndex].toLowerCase()
        ]
          .map((value: IStatisticsItem) => {
            return {
              x: months[new Date(value.timestamp).getMonth()],
              y: value.value,
            };
          })
          .slice(
            props.statistics[props.categoryID][
              graphPeriods[graphPeriodIndex].toLowerCase()
            ].length -
              1 >
              6
              ? props.statistics[props.categoryID][
                  graphPeriods[graphPeriodIndex].toLowerCase()
                ].length -
                  1 -
                  6
              : 0,
            props.statistics[props.categoryID][
              graphPeriods[graphPeriodIndex].toLowerCase()
            ].length,
          ),
      );
    } else {
      setData([]);
    }
  }, [graphPeriodIndex]);

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <View style={styles.graphPeriodSelectionView}>
          <View style={styles.graphDetailTextView}>
            <TouchableOpacity
              onPress={() => {
                setGraphPeriodIndex(
                  graphPeriodIndex < graphPeriods.length - 1
                    ? graphPeriodIndex + 1
                    : 0,
                );
              }}
              style={{}}>
              <Text style={styles.graphDetailText}>
                {graphPeriods[graphPeriodIndex]}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.graphDetailAmountView}>
            {
              props.categoryData[
                graphPeriods[graphPeriodIndex].toLowerCase() === 'spent'
                  ? 'periodSpent'
                  : graphPeriods[graphPeriodIndex].toLowerCase()
              ]
            }
          </Text>
        </View>

        <View style={styles.barGraphView}>
          {data.length > 0 && <BarGraph data={data} />}
        </View>
      </View>
    </View>
  );
}

export default Graph;
