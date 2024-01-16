import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

function Available() {
  return (
    <View
      style={{
        height: 60,
        width: '100%',
        display: 'flex',

        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          height: 50,
          borderRadius: 20,
          backgroundColor: '#71FFAA',
        }}>
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
              name="attach-money"
              size={25}
              style={{
                borderRadius: 100,
                padding: 5,
                color: '#282828',
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: '#555B6E',
                fontSize: 15,
                marginLeft: 5,
                fontWeight: 'bold',
              }}>
              Available
            </Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',

            justifyContent: 'flex-start',
            width: '25%',
          }}
        />
      </View>
    </View>
  );
}

export default Available;
