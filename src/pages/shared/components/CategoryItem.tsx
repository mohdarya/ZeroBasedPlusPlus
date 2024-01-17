import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CategoryItemProps {
  available: number;
  periodSpent: number;
  name: string;
  categoryIcon: string;
  frequency: string;
  budget: number;
  periodAvailable: number;
  calculateAllocation: boolean;
  transferPage: boolean;
}

function CategoryItem(props: CategoryItemProps) {
  let dateNow = new Date();
  let frequencyToDays: {[frequency: string]: number} = {
    daily: new Date(dateNow.getFullYear(), dateNow.getMonth(), 0).getDate(),
    weekly: 4,
    monthly: 1,
    'no-limit': 0,
  };

  let remaining = 0;
  let percentageSpent: number = 0;

  remaining = props.periodAvailable - props.periodSpent;
  percentageSpent =
    ((props.periodAvailable - props.periodSpent) / props.periodAvailable) * 100;

  if (props.calculateAllocation) {
    percentageSpent =
      (1 -
        (props.budget * frequencyToDays[props.frequency.toLowerCase()] -
          props.available) /
          (props.budget * frequencyToDays[props.frequency.toLowerCase()])) *
      100;

    remaining =
      props.budget * frequencyToDays[props.frequency.toLowerCase()] >
      props.available
        ? props.budget * frequencyToDays[props.frequency.toLowerCase()] -
          props.available
        : 0;
  }

  if (props.transferPage) {
    percentageSpent = 100;
    remaining = props.available;
  }

  if (isNaN(percentageSpent)) {
    percentageSpent = 0;
  } else {
    if (percentageSpent > 100) {
      percentageSpent = 100;
    } else if (percentageSpent < 0) {
      percentageSpent = 0;
    }
  }

  const Styles = StyleSheet.create({
    container: {
      height: 60,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryItemView: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      height: 50,
      borderRadius: 20,
      backgroundColor: '#B1BBAE',
    },
    categoryItemPercentageSpentBar: {
      position: 'absolute',
      backgroundColor: '#CFE1CB',
      borderRadius: 20,
      height: 50,
      width: percentageSpent + '%',
    },
    categoryItemMainView: {
      marginLeft: 10,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      width: '60%',
    },
    icon: {
      backgroundColor: 'black',
      borderRadius: 100,
      padding: 5,
      color: 'white',
    },
    categoryNameText: {
      color: '#555B6E',
      fontSize: 15,
      marginLeft: 5,
      fontWeight: 'bold',
    },
    categoryDetailTextWrapperView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '25%',
    },
    categoryDetailTextView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoryDetailText: {color: '#555B6E', fontSize: 12, margin: 0},
  });
  return (
    <View style={Styles.container}>
      <View style={Styles.categoryItemView}>
        <View style={Styles.categoryItemPercentageSpentBar} />
        <View style={Styles.categoryItemMainView}>
          <View>
            <Icon name={props.categoryIcon} size={25} style={Styles.icon} />
          </View>
          <View>
            <Text style={Styles.categoryNameText}>{props.name}</Text>
          </View>
        </View>

        <View style={Styles.categoryDetailTextWrapperView}>
          <View style={Styles.categoryDetailTextView}>
            <Text style={Styles.categoryDetailText}>
              {props.transferPage && 'Available'}

              {!props.transferPage && 'Remaining'}
            </Text>
            <Text style={Styles.categoryDetailText}>
              {remaining < 0 ? 0 : remaining}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CategoryItem;
