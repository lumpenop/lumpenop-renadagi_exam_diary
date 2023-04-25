import React, {useContext, useRef} from 'react';
import {View, Text, StyleSheet, Animated, Button} from 'react-native';
import LogContext from 'src/context/LogContext';

const CalendarScreen = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [enabled, setEnabled] = React.useState(false);
  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [enabled, animation]);
  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      />
      <Button title={'Toggle'} onPress={() => setEnabled(!enabled)} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  text: {
    padding: 16,
    fontSize: 24,
  },
  rectangle: {width: 100, height: 100, backgroundColor: 'black'},
});

export default CalendarScreen;
