import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function CategoryItem(props) {
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

    return (
        <View style={Styles.container}>
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}
            />
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                }}>
                <View
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '50%',
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
                  <View style={{width: '100%', marginLeft: 10}}>
                    <View>
                        <Text style={{color: '#555B6E', fontSize: 18, margin: 0}}>
                            {props.name}
                        </Text>
                        <Text style={{color: '#555B6E', fontSize: 18, margin: 0}}>
                            {props.frequency}
                        </Text>
                    </View>
                  </View>
                </View>

                <View style={{
                  display: 'flex',
                  flexDirection: 'row',

                  justifyContent: 'flex-end',
                  width: '45%',

                }}>


                  <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#555B6E', fontSize: 15, margin: 0}}>
                      Available
                    </Text>
                      <Text style={{color: '#555B6E', fontSize: 15, margin: 0}}>
                        {props.available}
                      </Text>
                  </View>
                  </View>
                </View>

        </View>
    );
}

export default CategoryItem;
