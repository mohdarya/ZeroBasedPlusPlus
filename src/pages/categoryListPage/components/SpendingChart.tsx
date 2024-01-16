import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Circle, Svg} from 'react-native-svg';

function SpendingChart(props: any) {
  const radius = 100;
  const circumf = 2 * Math.PI * radius;
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '90%',
    },

    pieChartContainer: {
      height: '100%',
      width: '100%',
      flexDirection: 'row',
      marginTop: 0,
      borderTopLeftRadius: 0,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },

    pieChart: {
      width: '65%',
    },
    pieChartLabels: {
      height: '80%',
      width: '35%',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    pieChartLabelItem: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    containerTag: {
      marginTop: '5%',
      backgroundColor: '#1D2D44',
      height: '10%',
      width: '50%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,

      marginLeft: '3%',
    },
    tagText: {
      color: 'white',
      top: '15%',
      fontSize: 19,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  });
  function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  props.data.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
  let total = 0;
  let pieChartElements = [];
  let pieChartLabelsElements = [];
  let colours = [
    '#FF0000', // Red
    '#00FF00', // Lime
    '#0000FF', // Blue
    '#FFFF00', // Yellow
    '#00FFFF', // Aqua
    '#FF00FF', // Fuchsia
    '#C0C0C0', // Silver
    '#808080', // Gray
    '#800000', // Maroon
    '#808000', // Olive
    '#008000', // Green
    '#800080', // Purple
    '#008080', // Teal
    '#000080', // Navy
    '#FFA500', // Orange
    '#A52A2A', // Brown
    '#8B4513', // SaddleBrown
    '#5F9EA0', // CadetBlue
    '#D2691E', // Chocolate
    '#6495ED', // CornflowerBlue
  ];
  colours = shuffle(colours);
  for (let i = 0; i < props.data.length; i++) {
    total += props.data[i].value;
  }
  let percentTotal = 0;

  function generateGraphElements(item, index) {
    let percentage = (item.value * 100) / total;

    pieChartElements.push(
      <Circle
        key={index + item}
        cx={'52%'}
        cy={'52%'}
        fill={'none'}
        r={radius}
        strokeWidth={15}
        strokeOpacity={0.4}
        strokeDasharray={(percentage * circumf) / 100 + ',' + circumf}
        strokeDashoffset={[(-percentTotal * circumf) / 100]}
        stroke={colours[index % 20]}
      />,
    );
    percentTotal += percentage;
  }

  function generateGraphLabels(item, index) {
    if (index < 10) {
      pieChartLabelsElements.push(
        <View key={item + index} style={styles.pieChartLabelItem}>
          <View
            style={{
              height: 20,
              width: 20,
              opacity: 0.4,
              borderRadius: 5,
              backgroundColor: colours[index % 20],
            }}
          />
          <Text style={{width: '50%'}}>{item.name}</Text>
        </View>,
      );
    }
  }

  props.data.forEach(generateGraphElements);
  props.data.forEach(generateGraphLabels);

  return (
    <View style={styles.container}>
      <View style={styles.pieChartContainer}>
        <View style={styles.pieChart}>
          <Svg height={'100%'} width={'100%'}>
            {pieChartElements}
          </Svg>
        </View>
        <View style={styles.pieChartLabels}>{pieChartLabelsElements}</View>
      </View>
    </View>
  );
}

export default SpendingChart;
