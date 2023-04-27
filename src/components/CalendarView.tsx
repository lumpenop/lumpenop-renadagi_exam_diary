import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars/src';
import {MarkedDatesType} from 'src/screens/CalendarScreen';

interface Props {
  markedDates: MarkedDatesType;
  selectedDate: string;
  onSelectDate: React.Dispatch<React.SetStateAction<string>>;
}

const CalendarView = ({markedDates, selectedDate, onSelectDate}: Props) => {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };
  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDate}
      onDayPress={day => onSelectDate(day.dateString)}
      theme={{
        selectedDayBackgroundColor: '#009688',
        arrowColor: '#009688',
        dotColor: '#009688',
        todayTextColor: '#009688',
      }}
    />
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default CalendarView;
