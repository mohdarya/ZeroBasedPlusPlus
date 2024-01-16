import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function BarGraph(props: any) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    barChartContainer: {
      height: '100%',

      width: '100%',
      margin: '3%',
      marginTop: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    barChartLabels: {
      top: '1%',
      width: 50,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
      marginBottom: '6%',
    },
    barChartData: {
      height: '97%',
      width: '15%',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    chartBar: {
      flexWrap: 'wrap',
      width: '60%',

      backgroundColor: '#385782',
      alignSelf: 'center',
      borderRadius: 5,
    },
  });
  let graphYAxis: any[] = [];
  let graphXitems: any[] = [];
  let graphHighestValue = 100;
  props.data.forEach(calculateGraphRange);
  props.data.forEach(setGraphElements);
  setGraphAxis();
  graphYAxis.reverse();

  function setGraphAxis() {
    let range = Math.ceil(graphHighestValue / 5);

    for (let i = 0; i <= 5; i++) {
      graphYAxis.push(<Text key={range + i}>{range * i}</Text>);
    }
  }

  function setGraphElements(item: any, index: number) {
    graphXitems.push(
      <View key={item.x + index} style={styles.barChartData}>
        <View style={{height: '85%', justifyContent: 'flex-end'}}>
          <View
            style={[
              styles.chartBar,
              {height: Math.ceil((item.y / graphHighestValue) * 100) + '%'},
            ]}
          />
        </View>

        <Text style={{textAlign: 'center'}}>{item.x}</Text>
      </View>,
    );
  }

  function calculateGraphRange(item, index) {
    if (item.y >= graphHighestValue) {
      graphHighestValue = Math.ceil(item.y / 500) * 500;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.barChartContainer}>
        <View style={styles.barChartLabels}>{graphYAxis}</View>
        <View
          style={{
            top: '1%',
            width: '95%',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {graphXitems}
        </View>
      </View>
    </View>
  );
}

export default BarGraph;
