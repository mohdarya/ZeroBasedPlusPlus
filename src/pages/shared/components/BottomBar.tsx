import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/core';
import {BottomSheetRefProps} from './bottomSheet.tsx';
import {RefObject, useCallback} from 'react';

interface bottomBarProps {
  page: string;
  bottomSheetRef: RefObject<BottomSheetRefProps>;
}

function BottomBar(props: bottomBarProps) {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    const isActive = props.bottomSheetRef?.current?.isActive();
    if (isActive) {
      props.bottomSheetRef?.current?.scrollTo(0);
    } else {
      props.bottomSheetRef?.current?.scrollTo(-200);
    }
  }, []);
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: '65%',
      height: '100%',
      borderRadius: 25,
      backgroundColor: '#282828',
    },
    icon: {color: '#E9EEEA'},
  });

  return (
    <View style={styles.container}>
      <Icon
        name="list"
        style={styles.icon}
        onPress={() =>
          //@ts-ignore
          navigation.navigate('CategoryListPage')
        }
        size={40}
      />
      <Icon
        style={styles.icon}
        name="home"
        onPress={() =>
          //@ts-ignore
          navigation.navigate('HomePage')
        }
        size={40}
      />
      <Icon
        style={styles.icon}
        name="playlist-add"
        onPress={onPress}
        size={40}
      />
    </View>
  );
}

export default BottomBar;
