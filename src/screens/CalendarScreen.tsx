import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LogContext from 'src/context/LogContext';

const CalendarScreen = () => {
  const context = useContext(LogContext);

  const {text} = context;

  return (
    <View>
      <Text style={styles.text}>text: {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  text: {
    padding: 16,
    fontSize: 24,
  },
});

export default CalendarScreen;
