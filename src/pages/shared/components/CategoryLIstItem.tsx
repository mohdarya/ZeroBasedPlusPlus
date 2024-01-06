import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';



interface  CategoryItemProps{
    available: number,
    spent: number;
    name: string

}

function CategoryItem(props: CategoryItemProps) {

    const Styles = StyleSheet.create({
        container: {
            height: 60,
            width: '100%',
            display: 'flex',

            flexDirection: 'row',

            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    let percentageSpent : number = ((props.available - props.periodSpent)/ props.available) * 100


    if( isNaN(percentageSpent) )
    {
       percentageSpent = 0
    }
    else {
        percentageSpent = percentageSpent < 0 ? 100 : percentageSpent
    }


    return (
        <View style={Styles.container}>

            <View
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    height: 50,
                  borderRadius: 20,
                  backgroundColor: '#B1BBAE'
                }}>
                <View style={{position: 'absolute', backgroundColor: '#CFE1CB',        borderRadius: 20,    height: 50, width: percentageSpent+ "%"}}/>
                <View
                    style={{
                      marginLeft: 10,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '60%',
                    }}>
                    <View>
                        <Icon
                            name="list"
                            size={25}
                            style={{
                                backgroundColor: 'black',
                                borderRadius: 100,
                                padding: 5,
                                color: 'white',
                            }}
                        />
                    </View>
                  <View>
                        <Text style={{color: '#555B6E', fontSize:15, marginLeft: 5, fontWeight: 'bold'}}>
                            {props.name}
                        </Text>
                  </View>
                </View>

                <View style={{
                  display: 'flex',
                  flexDirection: 'row',

                  justifyContent: 'flex-start',
                  width: '25%',

                }}>


                  <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#555B6E', fontSize: 12, margin: 0}}>
                      Remaining
                    </Text>
                      <Text style={{color: '#555B6E', fontSize: 12, margin: 0} }>
                        {props.available - props.periodSpent}
                      </Text>
                  </View>

                  </View>
                </View>

        </View>
    );
}

export default CategoryItem;
