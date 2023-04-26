import React from 'react';
import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars/src';

const CalendarView = () => {
  return <Calendar style={styles.calendar} />;
};

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default CalendarView;
